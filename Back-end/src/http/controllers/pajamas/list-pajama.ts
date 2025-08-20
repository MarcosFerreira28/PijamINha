import { PrismaPajamasRepository } from "@/repositories/prisma/prisma-pajamas-repository";
import { ListPajamaUseCase } from "@/use-cases/pajamas/listPajama-use-cases";
import { FastifyReply, FastifyRequest } from "fastify";


export async function listPajamas(request: FastifyRequest, reply: FastifyReply) {
    const pajamasRepository = new PrismaPajamasRepository()
    const listPajamasUseCase = new ListPajamaUseCase(pajamasRepository)

    const pajamas = await listPajamasUseCase.execute()
    return reply.status(200).send(pajamas)
}