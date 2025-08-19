import { Prisma, SizeType } from "@prisma/client";
import { PajamaSizeRepository } from "../pajamaSize-repository";
import { prisma } from "@/lib/prisma";

export class PrismaPajamaSizeRepository implements PajamaSizeRepository {
    async create(data: Prisma.PajamaSizeCreateInput) {
        const pajamaSize = await prisma.pajamaSize.create({
            data,
        });
        return pajamaSize;
    }

    async update(id: number, data: Prisma.PajamaSizeUpdateInput) {
        const pajamaSize = await prisma.pajamaSize.update({
            where: {
                id,
            },
            data,
        });
        return pajamaSize;
    }

    async findByPajamaIdAndSize(pajamaId: number, size: SizeType) {
        const pajamaSize = await prisma.pajamaSize.findFirst({
            where: {
                pajamaId,
                size,
            },
        });
        return pajamaSize;
    }
}

