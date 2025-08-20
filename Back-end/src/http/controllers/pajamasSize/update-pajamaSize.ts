import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { PrismaPajamaSizeRepository } from "@/repositories/prisma/prisma-pajamaSize-repository";
import { UpdatePajamaSizeUseCase } from "@/use-cases/pajamasSize/updatePajamaSize-use-case";
import { SizeType } from "@prisma/client";
import { SizeNotFoundError } from "@/use-cases/errors/size-not-found-error";

export async function updatePajamaSize(request: FastifyRequest, reply: FastifyReply) {
    const updatePajamaSizeParamsSchema = z.object({
        pajamaId: z.coerce.number().int().positive(),
    });

    const updatePajamaSizeBodySchema = z.object({
        size: z.enum(SizeType),
        stockQuantity: z.number().int().positive()
    });

    try {
        const { pajamaId } = updatePajamaSizeParamsSchema.parse(request.params);
        const { size, stockQuantity } = updatePajamaSizeBodySchema.parse(request.body);

        const pajamaSizeRepository = new PrismaPajamaSizeRepository();
        const updatePajamaSizeUseCase = new UpdatePajamaSizeUseCase(pajamaSizeRepository);

        const { pajamaSize } = await updatePajamaSizeUseCase.execute({
            pajamaId,
            size,
            stockQuantity
        });

        return reply.status(200).send({ pajamaSize });
    } catch (error) {
        if (error instanceof SizeNotFoundError) {
            return reply.status(404).send({ message: error.message });
        }

        if (error instanceof z.ZodError) {
            return reply.status(400).send({ 
                message: 'Validation error.',
                issues: z.treeifyError(error)
            });
        }

        return reply.status(500).send({ message: 'Internal server error.' });
    }
}

