import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaSalesRepository } from '@/repositories/prisma/prisma-sales-repository';
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error';
import { DeleteSaleUseCase } from '@/use-cases/sales/delete-sale-use-case';

export async function deleteSale(request: FastifyRequest, reply: FastifyReply) {
  const deleteSaleParamsSchema = z.object({
    saleId: z.coerce.number(),
  });

  const { saleId } = deleteSaleParamsSchema.parse(request.params);

  try {
    const salesRepository = new PrismaSalesRepository();
    const deleteSaleUseCase = new DeleteSaleUseCase(salesRepository);

    await deleteSaleUseCase.execute({ saleId });

    return reply.status(204).send();
  } catch (err) {
    if (err instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: err.message });
    }
    return reply.status(500).send({ message: 'Internal Server Error' });
  }
}