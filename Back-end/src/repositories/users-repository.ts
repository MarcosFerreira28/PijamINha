import { Prisma, User } from '@prisma/client';

export interface UsersRepository {
    create(data: Prisma.UserCreateInput): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    findById(id: number): Promise<User | null>;
    update(id: number, data: Prisma.UserUpdateInput): Promise<User>;
    delete(id: number): Promise<void>;
}