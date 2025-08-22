import { SalesRepository } from '@/repositories/sales-repository';
import { ResourceNotFoundError } from '../errors/resource-not-found-error';

interface DeleteSaleUseCaseRequest {
  saleId: number;
}

export class DeleteSaleUseCase {
  constructor(private salesRepository: SalesRepository) {}

  async execute({ saleId }: DeleteSaleUseCaseRequest): Promise<void> {
    const sale = await this.salesRepository.findById(saleId);

    if (!sale) {
      throw new ResourceNotFoundError();
    }

    await this.salesRepository.delete(saleId);
  }
}