import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository';
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error';
import { UpdateSaleUseCase } from '@/use-cases/sales/update-sale-use-case';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateSaleParamsSchema = z.object({
    saleId: z.coerce.number(),
  });

  const updateSaleBodySchema = z.object({
    buyerName: z.string().optional(),
    cpf: z.string().optional(),
    price: z.number().optional(),
    paymentMethod: z
      .enum(['MONEY', 'CREDIT_CARD', 'DEBIT_CARD', 'PIX'])
      .optional(),
    installments: z.number().optional(),
    cardNumber: z.string().optional(),
    address: z.object({
      zipCode: z.string(),
      state: z.string(),
      city: z.string(),
      neighborhood: z.string(),
      adress: z.string(),
      number: z.string(),
    }).optional(),
    salePajamas: z.array(
      z.object({
        pajamaId: z.number(),
        quantity: z.number(),
        price: z.number(),
      })
    ).optional(),
  });

  const { saleId } = updateSaleParamsSchema.parse(request.params);
  const data = updateSaleBodySchema.parse(request.body);

  if (Object.keys(data).length === 0) {
    return reply.status(400).send({ 
      message: 'Pelo menos um campo deve ser fornecido para atualização' 
    });
  }

  try {
    const salesRepository = new PrismaSalesRepository();
    const updateSaleUseCase = new UpdateSaleUseCase(salesRepository);

    const { sale } = await updateSaleUseCase.execute({ saleId, ...data });

    return reply.status(200).send(sale);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    
    throw err;
  }
}