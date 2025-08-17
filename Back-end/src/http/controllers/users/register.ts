import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { UserAlreadyExistsError } from '@/use-cases/errors/user-already-exists-error';
import { CreateUserUseCase } from '@/use-cases/users/create-user';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
    });

    const { name, username, email, password } = registerBodySchema.parse(request.body);

    try {
        const usersRepository = new PrismaUsersRepository();
        const registerUseCase = new CreateUserUseCase(usersRepository);

        await registerUseCase.execute({
            name,
            username,
            email,
            password,
        });

    } catch (error) {
        if (error instanceof UserAlreadyExistsError) {
            return reply.status(409).send({ message: error.message });
        }
        throw error;
    }
    return reply.status(201).send();
}