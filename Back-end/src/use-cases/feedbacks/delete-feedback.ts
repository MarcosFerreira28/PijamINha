import { FeedbacksRepository } from "@/repositories/feedbacks-repository";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";

interface DeleteFeedbackUseCaseRequest {
    feedbackId: number;
}

export class DeleteFeedbackUseCase {
    constructor(private feedbacksRepository: FeedbacksRepository) { }

    async execute({ feedbackId }: DeleteFeedbackUseCaseRequest): Promise<void> {
        const feedback = await this.feedbacksRepository.findById(feedbackId);

        if (!feedback) {
            throw new ResourceNotFoundError();
        }

        await this.feedbacksRepository.delete(feedbackId);
    }
}