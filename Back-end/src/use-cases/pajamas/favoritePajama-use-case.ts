import { PajamasRepository } from "@/repositories/pajamas-repository";
import { PajamaNotFoundError } from "../errors/pajama-not-found-error";


export class FavoritesPajamaUseCase {
    constructor(private pajamaRepository: PajamasRepository) { }
    async execute({ id }: { id: number }) {
        const pajama = await this.pajamaRepository.get(id)
        if (!pajama) {
            throw new PajamaNotFoundError();
        }
        return await this.pajamaRepository.update(id, {
            favorite: !pajama.favorite
        })
    }
}