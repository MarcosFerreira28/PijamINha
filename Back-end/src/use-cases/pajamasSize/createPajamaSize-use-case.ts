import { PajamaSizeRepository } from "@/repositories/pajamaSize-repository";
import { PajamaSize, SizeType } from "@prisma/client";

interface CreatePajamaSizeUseCaseRequest {
    pajamaId: number;
    size: SizeType;
    stockQuantity: number;
}

interface CreatePajamaSizeUseCaseResponse {
    pajamaSize: PajamaSize;
}

export class CreatePajamaSizeUseCase {
    constructor(private pajamaSizeRepository: PajamaSizeRepository) {}

    async execute({
        pajamaId,
        size,
        stockQuantity,
    }: CreatePajamaSizeUseCaseRequest): Promise<CreatePajamaSizeUseCaseResponse> {
        const pajamaSize = await this.pajamaSizeRepository.create({
            pajama: {
                connect: {
                    id: pajamaId
                }
            },
            size,
            stockQuantity,
        });

        return {
            pajamaSize,
        };
    }
}
