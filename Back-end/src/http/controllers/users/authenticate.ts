import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { InvalidCredentialsError } from '@/use-cases/errors/invalid-credentials-error';
import { AuthenticateUseCase } from '@/use-cases/users/authenticate-user';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
    const authenticateBodySchema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    const { email, password } = authenticateBodySchema.parse(request.body);

    try {
        const usersRepository = new PrismaUsersRepository();
        const authenticateUseCase = new AuthenticateUseCase(usersRepository);

        const { user } = await authenticateUseCase.execute({
            email,
            password,
        });
        const token = await reply.jwtSign(
            {
                name: user.name,
                username: user.username,
            },
            {
                sign: {
                    sub: user.id.toString(),
                },
            },
        );

        return reply.status(200).send({ token });

    } catch (error) {
        if (error instanceof InvalidCredentialsError) {
            return reply.status(400).send({ message: error.message });
        }
        throw error;
    }
}