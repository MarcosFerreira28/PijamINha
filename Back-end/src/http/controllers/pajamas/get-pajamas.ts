import { PrismaPajamasRepository } from "@/repositories/prisma/prisma-pajamas-repository";
import { PajamaNotFoundError } from "@/use-cases/errors/pajama-not-found-error";
import { GetPajamaUseCase } from "@/use-cases/pajamas/getPajama-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export async function getPajama(request: FastifyRequest, reply: FastifyReply) {
    const getPajamaParamsSchema = z.object({
        id: z.coerce.number().int().positive(),
    })

    const { id } = getPajamaParamsSchema.parse(request.params)
    const pajamasRepository = new PrismaPajamasRepository()
    const getPajamaUseCase = new GetPajamaUseCase(pajamasRepository)

    try {
        const pajama = await getPajamaUseCase.execute({ id })
        return reply.status(200).send(pajama)
    } catch (error) {
        if (error instanceof PajamaNotFoundError) {
            return reply.status(404).send({ message: error.message })
        }
        throw error
    }
}