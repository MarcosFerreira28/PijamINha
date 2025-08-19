import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';
import { UpdateUserProfileUseCase } from '@/use-cases/users/update-user-profile';
import { sanitizeUser } from '@/utils/sanitize';

export async function update(request: FastifyRequest, reply: FastifyReply) {
    const updateUserBodySchema = z.object({
        name: z.string().optional(),
        username: z.string().optional(),
        email: z.string().email().optional(),
    });

    const data = updateUserBodySchema.parse(request.body);
    const userId = Number(request.user.sub);

    const usersRepository = new PrismaUsersRepository();
    const updateUserProfile = new UpdateUserProfileUseCase(usersRepository);

    const { user } = await updateUserProfile.execute({ userId, data });

    return reply.status(200).send({ user: sanitizeUser(user) });
}