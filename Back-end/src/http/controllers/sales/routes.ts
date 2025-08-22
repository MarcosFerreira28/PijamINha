import { FastifyInstance } from 'fastify';
import { create } from './create';
import { get } from './get';
import { update } from './update';
import { deleteSale } from './delete-sale';
import { verifyJwt } from '@/http/middlewares/authenticate';

export async function salesRoutes(app: FastifyInstance) {
  app.post('/sales', {onRequest: [verifyJwt]}, create);
  app.get('/sales/:saleId', get);
  app.patch('/sales/:saleId', {onRequest: [verifyJwt]}, update);
  app.delete('/sales/:saleId', {onRequest: [verifyJwt]}, deleteSale);
}