import { PrismaPajamasRepository } from "@/repositories/prisma/prisma-pajamas-repository";
import { CreatePajamaUseCase } from "@/use-cases/pajamas/createPajama-use-cases";
import { BodyType, GenderType, SeasonType } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";


export async function createPajama(request: FastifyRequest, reply: FastifyReply) {
    const createPajamaBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        image: z.string(),
        price: z.number(),
        season: z.enum(SeasonType),
        type: z.enum(BodyType),
        gender: z.enum(GenderType),
        onSale: z.boolean().default(false),
        salePercent: z.number().positive().optional()
    })

    const {
        name,
        description,
        image,
        price,
        season,
        type,
        gender,
        onSale,
        salePercent
    } = createPajamaBodySchema.parse(request.body)


    const pajamasRepository = new PrismaPajamasRepository()
    const createPajamaUseCase = new CreatePajamaUseCase(pajamasRepository)

    const { pajama } = await createPajamaUseCase.execute({
        name,
        description,
        image,
        price,
        season,
        type,
        gender,
        onSale: onSale,
        salePercent: salePercent,
    })

    return reply.status(201).send({ pajama })
}
