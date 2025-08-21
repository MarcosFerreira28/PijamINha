import { UsersRepository } from '@/repositories/users-repository';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error';

interface AuthenticateUseCaseRequest {
    identifier: string;
    password: string;
}

interface AuthenticateUseCaseResponse {
    user: User;
}

export class AuthenticateUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute({ identifier, password }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
        const user = await this.usersRepository.findByEmailOrUserName(identifier);

        if (!user) {
            throw new InvalidCredentialsError();
        }
        
        const doesPasswordMatch = await compare(password, user.password);
        if (!doesPasswordMatch) {
            throw new InvalidCredentialsError();
        }
        return { user };
    }
}