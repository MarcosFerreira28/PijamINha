import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedback-repository';
import { FetchFeedbacksUseCase } from '@/use-cases/feedbacks/fetch-feedback';

export async function fetch(request: FastifyRequest, reply: FastifyReply) {
    try {
        const feedbacksRepository = new PrismaFeedbacksRepository();
        const fetchFeedbacksUseCase = new FetchFeedbacksUseCase(feedbacksRepository);

        const { feedbacks } = await fetchFeedbacksUseCase.execute();

        return reply.status(200).send({ feedbacks });

    } catch (error) {
        throw error;
    }
}