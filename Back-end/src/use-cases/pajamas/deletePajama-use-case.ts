import { PajamasRepository } from "@/repositories/pajamas-repository";

export class DeletePajamaUseCase {
    constructor(private pajamasRepository: PajamasRepository) { }
    async execute({ id }: { id: number }) {
        await this.pajamasRepository.delete(id)
    }
}