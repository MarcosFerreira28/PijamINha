import { UsersRepository } from '@/repositories/users-repository';
import type { User } from '@prisma/client';
import { hash } from 'bcrypt';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error';

interface CreateUserUseCaseRequest {
  name: string;
  username: string;
  email: string;
  password: string;
}

interface CreateUserUseCaseResponse {
  user: User;
}

export class CreateUserUseCase {
  constructor(private usersRepository: UsersRepository) { }

  async execute(request: CreateUserUseCaseRequest): Promise<CreateUserUseCaseResponse> {
    const passwordHash = await hash(request.password, 10);

    const userWithSameEmail = await this.usersRepository.findByEmail(request.email);
    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }
    const userWithSameUsername = await this.usersRepository.findByUsername(request.username);
    if (userWithSameUsername) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.create({
      ...request,
      password: passwordHash,
    });

    return { user };
  }
}