import { PajamasRepository } from "@/repositories/pajamas-repository";
import { PajamaNotFoundError } from "../errors/pajama-not-found-error";


export class GetPajamaUseCase {
    constructor(private pajamasRepository: PajamasRepository) { }
    async execute({ id }: { id: number }) {
        const pajama = await this.pajamasRepository.get(id);
        if (!pajama) {
            throw new PajamaNotFoundError();
        }
        return await this.pajamasRepository.get(id)
    }
}