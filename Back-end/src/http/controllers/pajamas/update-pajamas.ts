import { PrismaPajamasRepository } from "@/repositories/prisma/prisma-pajamas-repository";
import { UpdatePajamaUseCase } from "@/use-cases/pajamas/updatePajama-use-case";
import { BodyType, GenderType, SeasonType } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function updatePajama(request: FastifyRequest, reply: FastifyReply) {
    const updatePajamaParamsSchema = z.object({
        id: z.coerce.number(),
    })

    const updatePajamaBodySchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        image: z.string().optional(),
        price: z.number().optional(),
        season: z.enum(SeasonType).optional(),
        type: z.enum(BodyType).optional(),
        gender: z.enum(GenderType).optional(),
        favorite: z.boolean().optional(),
        onSale: z.boolean().optional(),
        salePercent: z.number().positive().optional()
    })

    try {
        const { id } = updatePajamaParamsSchema.parse(request.params)
        const data = updatePajamaBodySchema.parse(request.body)

        const pajamasRepository = new PrismaPajamasRepository()
        const updatePajamaUseCase = new UpdatePajamaUseCase(pajamasRepository)

        const { pajama } = await updatePajamaUseCase.execute({
            id,
            ...data,
            onSale: data.onSale,
            salePercent: data.salePercent
        })

        return reply.status(200).send({ pajama })
    } catch (error) {
        return reply.status(400).send({ message: 'Error updating pajama.' })
    }
}
