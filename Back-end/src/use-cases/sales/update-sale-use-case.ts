import { SalesRepository } from '@/repositories/sales-repository';
import { PaymentType, Sale } from '@prisma/client';
import { ResourceNotFoundError } from '../errors/resource-not-found-error';

interface SalePajamaInput {
    pajamaId: number;
    quantity: number;
    price: number;
  }
  
  interface AddressInput {
    zipCode: string;
    state: string;
    city: string;
    neighborhood: string;
    adress: string;
    number: string;
  }

interface UpdateSaleUseCaseRequest {
  saleId: number;
  buyerName?: string;
  cpf?: string;
  price?: number;
  paymentMethod?: PaymentType;
  installments?: number;
  cardNumber?: string;
  address?: AddressInput;
  salePajamas?: SalePajamaInput[];
}

interface UpdateSaleUseCaseResponse {
  sale: Sale;
}

export class UpdateSaleUseCase {
  constructor(private salesRepository: SalesRepository) {}

  async execute({
    saleId,
    ...data
  }: UpdateSaleUseCaseRequest): Promise<UpdateSaleUseCaseResponse> {
    const saleExists = await this.salesRepository.findById(saleId);

    if (!saleExists) {
      throw new ResourceNotFoundError();
    }

    const updateData: any = {};

    const simpleFields = ['buyerName', 'cpf', 'price', 'paymentMethod', 'installments', 'cardNumber'];
    
    for (const [key, value] of Object.entries(data)) {
      if (simpleFields.includes(key) && value !== undefined) {
        updateData[key] = value;
      }
    }

    if (data.address) {
      updateData.address = { 
        upsert: {
          create: data.address,
          update: data.address
        }
      };
    }

    if (data.salePajamas) {
      updateData.salePajama = {
        deleteMany: {},
        create: data.salePajamas.map((pajama) => ({
          pajama: {
            connect: {
              id: pajama.pajamaId,
            },
          },
          quantity: pajama.quantity,
          price: pajama.price,
        })),
      };
    }

    const sale = await this.salesRepository.update(saleId, updateData);

    if (!sale) {
        throw new ResourceNotFoundError('Venda não pôde ser atualizada');
    }

    return {
      sale,
    };
  }
}