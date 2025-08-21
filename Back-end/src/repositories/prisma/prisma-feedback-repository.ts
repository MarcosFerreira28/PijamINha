import { prisma } from '@/lib/prisma';
import { FeedbacksRepository } from '../feedbacks-repository';
import { Prisma } from '@prisma/client';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create(data: Prisma.FeedbackCreateInput) {
        const feedback = await prisma.feedback.create({ data });
        return feedback;
    }

    async findMany() {
        const feedbacks = await prisma.feedback.findMany({
            orderBy: {
                rating: 'desc'
            }
        });
        return feedbacks;
    }

    async findById(id: number) {
        const feedback = await prisma.feedback.findUnique({
            where: { id }
        });
        return feedback;
    }

    async delete(id: number) {
        await prisma.feedback.delete({
            where: { id }
        });
    }
}