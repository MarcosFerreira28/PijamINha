import { PajamasRepository } from "@/repositories/pajamas-repository";
import { BodyType, GenderType, Pajama, SeasonType } from "@prisma/client";


interface CreatePajamaUseCaseRequest {
    name: string;
    description: string;
    image: string;
    price: number;
    season: SeasonType;
    type: BodyType;
    gender: GenderType;
    onSale?: boolean;
    salePercent?: number;
}

interface CreatePajamaUseCaseResponse {
    pajama: Pajama;
}

export class CreatePajamaUseCase {
    constructor(private pajamasRepository: PajamasRepository) { }

    async execute(
        request: CreatePajamaUseCaseRequest
    ): Promise<CreatePajamaUseCaseResponse> {


        const pajama = await this.pajamasRepository.create(request);


        return {
            pajama,
        };
    }
}