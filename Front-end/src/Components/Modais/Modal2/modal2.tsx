import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import style from "./modal2.module.css";
import seta from "../../../assets/expand.png";
import { useState } from "react";
import Modal3 from "../Modal3/modal3";
import type { Address } from "../../../interfaces/Address";
import type { SalePajama } from "../../../interfaces/SalePajama";
import type { Sale } from "../../../interfaces/Sale";
import { api } from "../../../interceptator/interceptor";

const schema = z
    .object({
        formaPagamento: z.string().nonempty("Selecione a forma de pagamento"),
        parcelamento: z.string().optional(),
        numeroCartao: z.string().optional(),
    })
    .refine(
        (data) => {
            if (data.formaPagamento === "cartao") {
                return /^\d{16}$/.test(data.numeroCartao || "");
            }
            return true;
        },
        {
            message: "Número de cartão inválido",
            path: ["numeroCartao"],
        }
    );

type FormData = z.infer<typeof schema>;

interface Modal2Props {
    onClose: () => void;
    adress: Address;
    buyerName: string;
    cpf: string;
    salePajamas: SalePajama[];
    totalGeral: number;
}

export default function Modal2({ onClose, adress, buyerName, cpf, salePajamas, totalGeral }: Modal2Props) {
    const [abrirModal3, setAbrirModal3] = useState(false);
    const [saleData, setSaleData] = useState<Sale | null>(null);
    const [sucesso, setSucesso] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const formaPagamento = watch("formaPagamento");

    const handleRequest = async (data: Sale) => {
        try {
            const response = await api.post('/sales', data);

            if (response.status === 201) {
                setSucesso(true);
            }
        } catch (error) {
            alert("Erro ao efetivar compras. Tente novamente.");
            console.error(error);
        }
    };

    const onSubmit = async (data: FormData) => {
        console.log("Dados de pagamento:", data);

        const paymentMethodMap = {
            pix: "PIX" as const,
            boleto: "MONEY" as const,
            cartao: "CREDIT_CARD" as const,
        };

        console.log(adress);

        const sale: Sale = {
            buyerName,
            cpf,
            price: totalGeral,
            paymentMethod: paymentMethodMap[data.formaPagamento as keyof typeof paymentMethodMap],
            installments: data.parcelamento ? parseInt(data.parcelamento) : undefined,
            cardNumber: data.numeroCartao,
            adress,
            salePajamas,
        };

        console.log("Objeto Sale criado:", sale);
        console.log("Endereco:",adress)
        setSaleData(sale);
        setAbrirModal3(true);
        await handleRequest(sale);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={style.modalTotal} onClick={handleOverlayClick}>
            <div className={style.modal}>
                <h2>Pagamento</h2>
                <form onSubmit={handleSubmit(onSubmit)} className={style.formulario}>
                    <select {...register("formaPagamento")}>
                        <option value="">Selecione</option>
                        <option value="pix">Pix</option>
                        <option value="boleto">Boleto</option>
                        <option value="cartao">Cartão</option>
                    </select>
                    {errors.formaPagamento && <p>{errors.formaPagamento.message}</p>}

                    {formaPagamento === "cartao" && (
                        <>
                            <select {...register("parcelamento")}>
                                <option value="">Selecione o parcelamento</option>
                                <option value="1">À vista</option>
                                <option value="2">2x sem juros</option>
                                <option value="3">3x sem juros</option>
                                <option value="4">4x sem juros</option>
                                <option value="5">5x sem juros</option>
                            </select>

                            <input
                                type="text"
                                placeholder="Número do cartão"
                                {...register("numeroCartao")}
                            />
                            {errors.numeroCartao && <p>{errors.numeroCartao.message}</p>}
                        </>
                    )}

                    <div className={style.botoes}>
                        <button type="button" onClick={onClose} className={style.voltar}>
                            <img src={seta} alt="seta" />
                            <p>VOLTAR</p>
                        </button>
                        <button type="submit" className={style.enviar}>
                            <p>ENVIAR</p>
                        </button>
                    </div>
                </form>
            </div>

            {abrirModal3 && saleData && (
                <Modal3
                    onClose={() => setAbrirModal3(false)}
                    saleData={saleData}
                    sucesso={sucesso}
                />
            )}
        </div>
    );
}