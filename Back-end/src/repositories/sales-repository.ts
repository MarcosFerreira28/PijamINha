import { Prisma, Sale } from '@prisma/client';

export interface SalesRepository {
  create(data: Prisma.SaleCreateInput): Promise<Sale | null>;
  findById(id: number): Promise<Sale | null>;
  delete(id: number): Promise<void>;
  update(id: number, data: Prisma.SaleUpdateInput): Promise<Sale | null>;
  checkPajamaExists(id: number): Promise<boolean>;
}