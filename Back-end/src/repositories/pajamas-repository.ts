import { Pajama, PajamaSize, Prisma } from "@prisma/client";


export interface FindManyWithPajamaInterface extends Pajama {
    pajamaSize: PajamaSize[]
}

export interface PajamasRepository {
    create(data: Prisma.PajamaCreateInput): Promise<Pajama>;
    update(id: number, data: Prisma.PajamaUpdateInput): Promise<Pajama>;
    get(id: number): Promise<FindManyWithPajamaInterface | null>;
    delete(id: number): Promise<void>;
    list(): Promise<FindManyWithPajamaInterface[]>
}