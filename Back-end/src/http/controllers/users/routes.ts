import { FastifyInstance } from 'fastify';
import { register } from './register';
import { authenticate } from './authenticate';
import { verifyJwt } from '@/http/middlewares/authenticate';
import { profile } from './profile';
import { update } from './update';
import { deleteUser } from './delete';

export async function usersRoutes(app: FastifyInstance) {

    app.post('/users', register);

    app.post('/sessions', authenticate);

    app.get('/me', { onRequest: [verifyJwt] }, profile);

    app.patch('/users', { onRequest: [verifyJwt] }, update);

    app.delete('/users', { onRequest: [verifyJwt] }, deleteUser);
}