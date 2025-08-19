import { User } from "@prisma/client";
//não mostra senha quando lê usuário
export function sanitizeUser(user: User) {
    const { password, ...sanitizedUser } = user;
    return sanitizedUser;
}