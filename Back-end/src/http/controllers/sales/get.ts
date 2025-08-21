import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error';
import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository';
import { GetSaleUseCase } from '@/use-cases/sales/get-sale-use-case';

export async function get(request: FastifyRequest, reply: FastifyReply) {
  const getSaleParamsSchema = z.object({
    saleId: z.coerce.number(),
  });

  const { saleId } = getSaleParamsSchema.parse(request.params);

  try {
    const salesRepository = new PrismaSalesRepository();
    const getSaleUseCase = new GetSaleUseCase(salesRepository);

    const { sale } = await getSaleUseCase.execute({ saleId });

    return reply.status(200).send(sale);
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    throw err;
  }
}