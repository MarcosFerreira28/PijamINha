import { PajamaSizeRepository } from "@/repositories/pajamaSize-repository";
import { PajamaSize, SizeType } from "@prisma/client";
import { SizeNotFoundError } from "../errors/size-not-found-error";

interface UpdatePajamaSizeUseCaseRequest {
    pajamaId: number;
    size: SizeType;
    stockQuantity: number;
}

interface UpdatePajamaSizeUseCaseResponse {
    pajamaSize: PajamaSize;
}

export class UpdatePajamaSizeUseCase {
    constructor(private pajamaSizeRepository: PajamaSizeRepository) {}

    async execute({
        pajamaId,
        size,
        stockQuantity,
    }: UpdatePajamaSizeUseCaseRequest): Promise<UpdatePajamaSizeUseCaseResponse> {
        const existingPajamaSize = await this.pajamaSizeRepository.findByPajamaIdAndSize(
            pajamaId,
            size
        );

        if (!existingPajamaSize) {
            throw new SizeNotFoundError();
        }

        const updatedPajamaSize = await this.pajamaSizeRepository.update(
            existingPajamaSize.id,
            { stockQuantity }
        );

        return {
            pajamaSize: updatedPajamaSize
        };
    }
}


