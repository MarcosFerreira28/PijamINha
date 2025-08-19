import { PrismaClient, PajamaSize, Prisma, SizeType } from "@prisma/client";
import { PajamaSizeRepository } from "../pajamaSize-repository";

export class PrismaPajamaSizeRepository implements PajamaSizeRepository {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        this.prisma = prisma;
    }


    async create(data: Prisma.PajamaSizeCreateInput): Promise<PajamaSize> {
        const pajamaSize = await this.prisma.pajamaSize.create({
            data,
        });
        return pajamaSize;
    }

    async update(id: number, data: Prisma.PajamaSizeUpdateInput): Promise<PajamaSize> {
        const pajamaSize = await this.prisma.pajamaSize.update({
            where: {
                id,
            },
            data,
        });
        return pajamaSize;
    }

    async findByPajamaIdAndSize(pajamaId: number, size: SizeType): Promise<PajamaSize | null> {
        const pajamaSize = await this.prisma.pajamaSize.findFirst({
            where: {
                pajamaId,
                size,
            },
        });
        return pajamaSize;
    }
}
