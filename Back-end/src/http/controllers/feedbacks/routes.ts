import { FastifyInstance } from 'fastify';
import { create } from './create.js';
import { getById } from './get-by-id'; 
import { deleteFeedback } from './delete'; 
import { fetch } from './fetch'

export async function feedbacksRoutes(app: FastifyInstance) {

    app.post('/feedbacks', create);

    app.get('/feedbacks', fetch);

    app.get('/feedbacks/:feedbackId', getById);
    
    app.delete('/feedbacks/:feedbackId', deleteFeedback);
}