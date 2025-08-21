import { SalesRepository } from '@/repositories/sales-repository';
import { Sale } from '@prisma/client';
import { ResourceNotFoundError } from '../errors/resource-not-found-error';

interface GetSaleUseCaseRequest {
  saleId: number;
}

interface GetSaleUseCaseResponse {
  sale: Sale;
}

export class GetSaleUseCase {
  constructor(private salesRepository: SalesRepository) {}

  async execute({ saleId }: GetSaleUseCaseRequest): Promise<GetSaleUseCaseResponse> {
    const sale = await this.salesRepository.findById(saleId);

    if (!sale) {
      throw new ResourceNotFoundError();
    }

    return { sale };
  }
}