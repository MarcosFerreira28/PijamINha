import { PajamasRepository } from "@/repositories/pajamas-repository";
import { BodyType, GenderType, Pajama, SeasonType } from "@prisma/client";
import { PajamaNotFoundError } from "../errors/pajama-not-found-error";
import { update } from "@/http/controllers/users/update";


interface UpdatePajamaUseCaseRequest {
    id: number;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    season?: SeasonType;
    type?: BodyType;
    gender?: GenderType;
    favorite?: boolean;
    onSale?: boolean;
    salePercent?: number;
}

interface UpdatePajamaUseCaseResponse {
    pajama: Pajama;
}

export class UpdatePajamaUseCase {
    constructor(private pajamasRepository: PajamasRepository) { }

    async execute(request: UpdatePajamaUseCaseRequest): Promise<UpdatePajamaUseCaseResponse> {
        const { id, ...data } = request;

        const pajamaExists = await this.pajamasRepository.get(id);
        if(!pajamaExists) {
            throw new PajamaNotFoundError();
        }
        const pajama = await this.pajamasRepository.update(id, data)

        return {pajama}
    }
}



