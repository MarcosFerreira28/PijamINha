import { FindPajamaWithDetails, PajamasRepository } from "@/repositories/pajamas-repository";

export class ListPajamaUseCase {
    constructor(private pajamasRepository: PajamasRepository) { }
    async execute(): Promise<FindPajamaWithDetails[]> {
        return await this.pajamasRepository.list()
    }
}