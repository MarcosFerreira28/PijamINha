import { env } from "@/env"
import { FastifyReply, FastifyRequest } from "fastify"
import { verify } from "jsonwebtoken"

interface Payload {
  userId: number
}

export async function authenticateMiddleware(request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization
    if (!authHeader) {
        return reply.status(401).send({ message: 'Está faltando o token de autenticação' })
    }
    const [, token] = authHeader.split(' ')
    if (!token) {
        return reply.status(401).send({ message: 'Token de autenticação inválido' })
    }
    const { userId } = verify(token, env.JWT_SECRET) as Payload
    request.userId = userId 
    
}