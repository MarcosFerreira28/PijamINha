import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaFeedbacksRepository } from '@/repositories/prisma/prisma-feedback-repository';
import { CreateFeedbackUseCase } from '@/use-cases/feedbacks/create-feedback.js';

export async function create(request: FastifyRequest, reply: FastifyReply) {
    const createFeedbackBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        rating: z.number().min(1).max(5),
    });

    const { name, description, rating } = createFeedbackBodySchema.parse(request.body);

    try {
        const feedbacksRepository = new PrismaFeedbacksRepository();
        const createFeedbackUseCase = new CreateFeedbackUseCase(feedbacksRepository);

        await createFeedbackUseCase.execute({
            name,
            description,
            rating,
        });

    } catch (error) {
        if (error instanceof Error) {
            return reply.status(400).send({ message: error.message });
        }
        throw error;
    }

    return reply.status(201).send();
}