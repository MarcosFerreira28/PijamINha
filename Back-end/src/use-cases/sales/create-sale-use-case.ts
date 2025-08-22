import { SalesRepository } from '@/repositories/sales-repository';
import { PaymentType, Sale } from '@prisma/client';
import { PajamaNotFoundError } from '../errors/pajama-not-found-error';
import { InvalidCredentialsError } from '../errors/invalid-credentials-error';
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

interface CreateSaleUseCaseRequest {
  buyerName: string;
  cpf: string;
  price: number;
  paymentMethod: PaymentType;
  installments: number;
  cardNumber?: string;
  adress: AddressInput;
  salePajamas: SalePajamaInput[];
}

interface CreateSaleUseCaseResponse {
  sale: Sale;
}

export class CreateSaleUseCase {
  constructor(private salesRepository: SalesRepository) {}

  async execute({
    buyerName,
    cpf,
    price,
    paymentMethod,
    installments,
    cardNumber,
    adress,
    salePajamas,
  }: CreateSaleUseCaseRequest): Promise<CreateSaleUseCaseResponse> {
    
    // Validar se todos os pijamas existem
    for (const pajama of salePajamas) {
      const pajamaExists = await this.salesRepository.checkPajamaExists(pajama.pajamaId);
      if (!pajamaExists) {
        throw new PajamaNotFoundError();
      }
    }

    // Validar método de pagamento
    if (!Object.values(PaymentType).includes(paymentMethod)) {
      throw new InvalidCredentialsError('Invalid payment method.');
    }

    try {
      const sale = await this.salesRepository.create({
        buyerName,
        cpf,
        price,
        paymentMethod,
        installments,
        cardNumber,
        address: {
          create: adress,
        },
        salePajama: {
          create: salePajamas.map((pajama) => ({
            quantity: pajama.quantity,
            price: pajama.price,
            pajama: {
              connect: {
                id: pajama.pajamaId,
              },
            },
          })),
        },
      });

      if(!sale) {
        throw new ResourceNotFoundError('Sale could not be created');
      }

      return {
        sale,
      };
    } catch (error) {
      console.error('Erro ao criar venda:', error);
      throw new ResourceNotFoundError('Erro ao criar a venda');
    }
  }
}