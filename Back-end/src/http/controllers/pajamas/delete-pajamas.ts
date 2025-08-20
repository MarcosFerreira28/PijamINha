import { PrismaPajamasRepository } from "@/repositories/prisma/prisma-pajamas-repository";
import { DeletePajamaUseCase } from "@/use-cases/pajamas/deletePajama-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";


export async function deletePajama(request: FastifyRequest, reply: FastifyReply) {
    const deletePajamaParamsSchema = z.object({
        pajamaId: z.coerce.number().positive().int()
    })

    const { pajamaId } = deletePajamaParamsSchema.parse(request.params)

    const pajamasRepository = new PrismaPajamasRepository();
    const deletePajamasUseCase = new DeletePajamaUseCase(pajamasRepository);

    await deletePajamasUseCase.execute({
        id: pajamaId,
    })
    return reply.status(204).send()
}