import { UsersRepository } from "@/repositories/users-repository";
import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error.js";

interface DeleteUserUseCaseRequest {
    userId: number;
}

export class DeleteUserUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({ userId }: DeleteUserUseCaseRequest): Promise<void> {
        const userExists = await this.usersRepository.findById(userId);
        if (!userExists) {
            throw new ResourceNotFoundError();
        }

        await this.usersRepository.delete(userId);
    }
}