import { FastifyRequest, FastifyReply } from 'fastify';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';
import { GetUserProfileUseCase } from '@/use-cases/users/get-user-profile';
import { sanitizeUser } from '@//utils/sanitize';

export async function profile(request: FastifyRequest, reply: FastifyReply) {
    // O ID do usuário vai vim do token, garantindo que ele só possa ver o próprio perfil
    const userId = Number(request.user.sub);

    const usersRepository = new PrismaUsersRepository();
    const getUserProfile = new GetUserProfileUseCase(usersRepository);

    const { user } = await getUserProfile.execute({ userId });

    return reply.status(200).send({ user: sanitizeUser(user) });
}