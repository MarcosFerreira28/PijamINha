import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import style from "./modal2.module.css";
import seta from "../../../assets/expand.png";
import { useState } from "react";
import Modal3 from "../Modal3/modal3";

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
    }

    export default function Modal2({ onClose }: Modal2Props) {
    const [abrirModal3, setAbrirModal3] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const formaPagamento = watch("formaPagamento");

    const onSubmit = (data: FormData) => {
        console.log("Dados de pagamento:", data);
        setAbrirModal3(true); // <- abre Modal3
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

        {abrirModal3 && <Modal3 onClose={() => setAbrirModal3(false)} />}
        </div>
    );
}


