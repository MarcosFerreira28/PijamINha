import { FeedbacksRepository } from "@/repositories/feedbacks-repository";
import { Feedback } from "@prisma/client";

interface FetchFeedbacksUseCaseResponse {
    feedbacks: Feedback[];
}

export class FetchFeedbacksUseCase {
    constructor(private feedbacksRepository: FeedbacksRepository) { }

    async execute(): Promise<FetchFeedbacksUseCaseResponse> {
        const feedbacks = await this.feedbacksRepository.findMany();

        return { feedbacks };
    }
}