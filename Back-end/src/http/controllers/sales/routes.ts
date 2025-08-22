import { FastifyInstance } from 'fastify';
import { create } from './create';
import { get } from './get';
import { update } from './update';
import { deleteSale } from './delete-sale';

export async function salesRoutes(app: FastifyInstance) {
  app.post('/sales', create);
  app.get('/sales/:saleId', get);
  app.patch('/sales/:saleId', update);
   app.delete('/sales/:saleId', deleteSale);
}