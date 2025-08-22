import { prisma } from '@/lib/prisma';
import { Prisma, Sale } from '@prisma/client';
import { SalesRepository } from '../sales-repository';

export class PrismaSalesRepository implements SalesRepository {
  async create(data: Prisma.SaleCreateInput) {
    const sale = await prisma.sale.create({
      data,
      include: {
        address: true,
        salePajama: {
          include: {
            pajama: true,
          },
        },
      },
    });
    return sale;
  }

  async findById(id: number) {
    const sale = await prisma.sale.findUnique({
      where: {
        id,
      },
      include: {
        address: true,
        salePajama: {
          include: {
            pajama: true,
          },
        },
      },
    });
    return sale;
  }

  async update(id: number, data: Prisma.SaleUpdateInput) {
    const sale = await prisma.sale.update({
      where: {
        id,
      },
      data,
      include: {
        address: true,
        salePajama: {
          include: {
            pajama: true,
          },
        },
      },
    });
    return sale;
  }

  async delete(id: number) {
    await prisma.sale.delete({
      where: {
        id,
      },
    });
  }

  async checkPajamaExists(id: number) {
    const pajama = await prisma.pajama.findUnique({ 
      where: { id } 
    });
    return Boolean(pajama);
  }
}