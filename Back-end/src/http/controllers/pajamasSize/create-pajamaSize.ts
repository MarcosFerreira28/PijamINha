import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaPajamaSizeRepository } from "@/repositories/prisma/prisma-pajamaSize-repository";
import { CreatePajamaSizeUseCase } from "@/use-cases/pajamasSize/createPajamaSize-use-case";
import { SizeType } from "@prisma/client";

export async function createPajamaSize(request: FastifyRequest, reply: FastifyReply) {
    const createPajamaSizeBodySchema = z.object({
        pajamaId: z.number().int().positive(),
        size: z.enum(SizeType),
        stockQuantity: z.number().int().positive()
    });


    const { pajamaId, size, stockQuantity } = createPajamaSizeBodySchema.parse(request.body);

    const pajamaSizeRepository = new PrismaPajamaSizeRepository();
    const createPajamaSizeUseCase = new CreatePajamaSizeUseCase(pajamaSizeRepository);

    const { pajamaSize } = await createPajamaSizeUseCase.execute({
        pajamaId,
        size,
        stockQuantity
    });

    return reply.status(201).send({ pajamaSize });

}