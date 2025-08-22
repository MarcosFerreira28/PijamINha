import type { Address } from "./Address";
import type { SalePajama } from "./SalePajama";

export interface Sale {
    buyerName: string;
    cpf: string;
    price: number;
    paymentMethod: "MONEY" | "CREDIT_CARD" | "DEBIT_CARD" | "PIX";
    installments?: number;
    cardNumber?: string;
    adress: Address;
    salePajamas: SalePajama[];
}
