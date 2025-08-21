import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedback-repository.js';
import { GetFeedbackUseCase } from '@/use-cases/feedbacks/get-feedbacks.js';
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error.js';

export async function getById(request: FastifyRequest, reply: FastifyReply) {
    const getFeedbackParamsSchema = z.object({
        feedbackId: z.coerce.number().int(),
    });

    const { feedbackId } = getFeedbackParamsSchema.parse(request.params);

    try {
        const feedbacksRepository = new PrismaFeedbacksRepository();
        const getFeedbackUseCase = new GetFeedbackUseCase(feedbacksRepository);

        const { feedback } = await getFeedbackUseCase.execute({ feedbackId });

        return reply.status(200).send({ feedback });

    } catch (error) {
        if (error instanceof ResourceNotFoundError) {
            return reply.status(404).send({ message: error.message });
        }
        throw error;
    }
}