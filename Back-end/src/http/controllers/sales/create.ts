import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository';
import { CreateSaleUseCase } from '@/use-cases/sales/create-sale-use-case';
import { PajamaNotFoundError } from '@/use-cases/errors/pajama-not-found-error';
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error';
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createSaleBodySchema = z.object({
    buyerName: z.string(),
    cpf: z.string(),
    price: z.number(),
    paymentMethod: z.enum(['MONEY', 'CREDIT_CARD', 'DEBIT_CARD', 'PIX']),
    installments: z.number().default(1),
    cardNumber: z.string().optional(),
    adress: z.object({
      zipCode: z.string(),
      state: z.string(),
      city: z.string(),
      neighborhood: z.string(),
      adress: z.string(),
      number: z.string(),
    }),
    salePajamas: z.array(
      z.object({
        pajamaId: z.number(),
        quantity: z.number(),
        price: z.number(),
      })
    ),
  });

  const {
    buyerName,
    cpf,
    price,
    paymentMethod,
    installments,
    cardNumber,
    adress,
    salePajamas,
  } = createSaleBodySchema.parse(request.body);

  try {
    const salesRepository = new PrismaSalesRepository();
    const createSaleUseCase = new CreateSaleUseCase(salesRepository);

    const { sale } = await createSaleUseCase.execute({
      buyerName,
      cpf,
      price,
      paymentMethod,
      installments,
      cardNumber,
      adress,
      salePajamas,
    });

    return reply.status(201).send(sale);
  } catch (err) {
    
    if (err instanceof PajamaNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    if(err instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: err.message });
    }
    if(err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }

    throw err;
  }
}