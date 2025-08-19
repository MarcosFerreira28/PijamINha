import { UsersRepository } from "@/repositories/users-repository";
import { User } from "@prisma/client";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";

interface UpdateUserProfileUseCaseRequest {
    userId: number;
    data: {
        name?: string;
        username?: string;
        email?: string;
    }
}

interface UpdateUserProfileUseCaseResponse {
    user: User;
}

export class UpdateUserProfileUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({ userId, data }: UpdateUserProfileUseCaseRequest): Promise<UpdateUserProfileUseCaseResponse> {
        const userExists = await this.usersRepository.findById(userId);
        if (!userExists) {
            throw new ResourceNotFoundError();
        }

        const user = await this.usersRepository.update(userId, data);

        return { user };
    }
}