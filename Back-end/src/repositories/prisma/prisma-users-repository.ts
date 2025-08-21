import { prisma } from '@/lib/prisma';
import { Prisma, User } from '@prisma/client';
import { UsersRepository } from '../users-repository';

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const user = await prisma.user.create({ data });
    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  }

  async findByUsername(username: string) {
    const user = await prisma.user.findUnique({ where: { username } });
    return user;
  }

  async findById(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return user;
  }

  async delete(id: number): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }

  async findByEmailOrUserName(identifier: string): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {email: identifier},
          {username: identifier}
        ]
      }
    });
    return user;
  }

}