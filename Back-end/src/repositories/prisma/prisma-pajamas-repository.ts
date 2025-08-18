import { Prisma, Pajama, SizeType } from "@prisma/client";
import { PajamasRepository } from "../pajamas-repository";
import { prisma } from "@/lib/prisma";


export class PrismaPajamasRepository implements PajamasRepository {
    async create(data: Prisma.PajamaCreateInput): Promise<Pajama> {
        const pajamaSizes = [
            { size: SizeType.PP, stockQuantity: 1 },
            { size: SizeType.P, stockQuantity: 1 },
            { size: SizeType.M, stockQuantity: 1 },
            { size: SizeType.G, stockQuantity: 1 },
            { size: SizeType.GG, stockQuantity: 1 }
        ]


        return await prisma.pajama.create({
            data: {
                ...data,
                pajamaSize: {
                    create: pajamaSizes
                }
            }
        });
    }
    async update(id: number, data: Prisma.PajamaUpdateInput): Promise<Pajama> {
        return await prisma.pajama.update({ where: { id }, data })
    }
    async get(id: number) {
        return await prisma.pajama.findUnique({
            where: { id },
            include: {
                pajamaSize: true
            }
        })
    }
    async delete(id: number) {
        await prisma.pajama.delete({ where: { id } })
    }
    async list() {
        return await prisma.pajama.findMany({
            include: {
                pajamaSize: true
            }
        })
    }

}