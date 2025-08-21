import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedback-repository';
import { DeleteFeedbackUseCase } from '@/use-cases/feedbacks/delete-feedback';
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error';

export async function deleteFeedback(request: FastifyRequest, reply: FastifyReply) {
    const deleteFeedbackParamsSchema = z.object({
        feedbackId: z.coerce.number().int(),
    });

    const { feedbackId } = deleteFeedbackParamsSchema.parse(request.params);

    try {
        const feedbacksRepository = new PrismaFeedbacksRepository();
        const deleteFeedbackUseCase = new DeleteFeedbackUseCase(feedbacksRepository);

        await deleteFeedbackUseCase.execute({ feedbackId });

        return reply.status(204).send();

    } catch (error) {
        if (error instanceof ResourceNotFoundError) {
            return reply.status(404).send({ message: error.message });
        }
        throw error;
    }
}