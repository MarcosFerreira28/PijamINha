import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';
import { DeleteUserUseCase } from '@/use-cases/users/delete-user';

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
    const userId = Number(request.user.sub);

    const usersRepository = new PrismaUsersRepository();
    const deleteUserUseCase = new DeleteUserUseCase(usersRepository);

    await deleteUserUseCase.execute({ userId });

    return reply.status(204).send();
}