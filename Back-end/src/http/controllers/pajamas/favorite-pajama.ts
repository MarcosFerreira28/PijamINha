import { PrismaPajamasRepository } from "@/repositories/prisma/prisma-pajamas-repository";
import { FavoritesPajamaUseCase } from "@/use-cases/pajamas/favoritePajama-use-case";
import { PajamaNotFoundError } from "@/use-cases/errors/pajama-not-found-error";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function favoritePajama(request: FastifyRequest, reply: FastifyReply) {
    const favoriteParamsSchema = z.object({
        id: z.coerce.number().int().positive(),
    })

    try {
        const { id } = favoriteParamsSchema.parse(request.params)

        const pajamasRepository = new PrismaPajamasRepository()
        const favoritePajamaUseCase = new FavoritesPajamaUseCase(pajamasRepository)

        const pajama = await favoritePajamaUseCase.execute({ id })

        return reply.status(200).send({ 
            pajama,
            message: `Pajama ${pajama.favorite ? 'favorited' : 'unfavorited'} successfully`
        })
    } catch (error) {
        if (error instanceof PajamaNotFoundError) {
            return reply.status(404).send({ message: error.message })
        }

        if (error instanceof z.ZodError) {
            return reply.status(400).send({ 
                message: 'Validation error.',
                issues: z.treeifyError(error)
            })
        }

        return reply.status(500).send({ message: 'Internal server error.' })
    }
}

