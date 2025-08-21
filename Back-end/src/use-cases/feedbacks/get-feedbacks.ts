import { FeedbacksRepository } from "@/repositories/feedbacks-repository";
import { Feedback } from "@prisma/client";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";

interface GetFeedbackUseCaseRequest {
    feedbackId: number;
}

interface GetFeedbackUseCaseResponse {
    feedback: Feedback;
}

export class GetFeedbackUseCase {
    constructor(private feedbacksRepository: FeedbacksRepository) { }

    async execute({ feedbackId }: GetFeedbackUseCaseRequest): Promise<GetFeedbackUseCaseResponse> {
        const feedback = await this.feedbacksRepository.findById(feedbackId);

        if (!feedback) {
            throw new ResourceNotFoundError();
        }

        return { feedback };
    }
}