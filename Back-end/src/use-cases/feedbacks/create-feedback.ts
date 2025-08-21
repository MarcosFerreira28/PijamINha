import { FeedbacksRepository } from "@/repositories/feedbacks-repository";
import { Feedback } from "@prisma/client";

interface CreateFeedbackUseCaseRequest {
    name: string;
    description: string;
    rating: number;
}

interface CreateFeedbackUseCaseResponse {
    feedback: Feedback;
}

export class CreateFeedbackUseCase {
    constructor(private feedbacksRepository: FeedbacksRepository) { }

    async execute(request: CreateFeedbackUseCaseRequest): Promise<CreateFeedbackUseCaseResponse> {
        if (request.rating < 1 || request.rating > 5) {
            throw new Error('Avaliação deve ser de 0 a 5.');
        }

        const feedback = await this.feedbacksRepository.create(request);

        return { feedback };
    }
}