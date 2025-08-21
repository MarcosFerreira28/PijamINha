import { Feedback, Prisma } from '@prisma/client';

export interface FeedbacksRepository {
    create(data: Prisma.FeedbackCreateInput): Promise<Feedback>;
    findMany(): Promise<Feedback[]>;
    findById(id: number): Promise<Feedback | null>;
    delete(id: number): Promise<void>;
}