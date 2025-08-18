import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import style from "./modal1.module.css";
import Modal2 from "../Modal2/modal2";

const schema = z.object({
    nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
    cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),
    cep: z.string().regex(/^\d{8}$/, "CEP deve ter 8 dígitos"),
    logradouro: z.string().nonempty("Campo obrigatório"),
    uf: z.string().length(2, "UF deve ter 2 letras"),
    cidade: z.string().nonempty("Campo obrigatório"),
    numero: z.string().nonempty("Campo obrigatório"),
    bairro: z.string().nonempty("Campo obrigatório"),
    });

    type FormData = z.infer<typeof schema>;

    interface Modal1Props {
    onClose: () => void;
    }

    export default function Modal1({ onClose }: Modal1Props) {
    const [abrirModal2, setAbrirModal2] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log("Dados enviados:", data);
        setAbrirModal2(true);
    };
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
        onClose();
        }
    };

    return (
        <div className={style.modalTotal} onClick={handleOverlayClick}>
        <div className={style.modal}>
            <h2>Dados</h2>

            {!abrirModal2 && (
            <form onSubmit={handleSubmit(onSubmit)} className={style.formulario}>
                <input
                type="text"
                placeholder="Nome completo"
                {...register("nome")}
                />
                {errors.nome && <p>{errors.nome.message}</p>}

                <input type="text" placeholder="CPF" {...register("cpf")} />
                {errors.cpf && <p>{errors.cpf.message}</p>}

                <input type="text" placeholder="CEP" {...register("cep")} />
                {errors.cep && <p>{errors.cep.message}</p>}

                <input
                type="text"
                placeholder="Logradouro"
                {...register("logradouro")}
                />
                {errors.logradouro && <p>{errors.logradouro.message}</p>}

                <div className={style.linha}>
                    <div className={style.campo}>
                        <input
                        type="text"
                        placeholder="UF"
                        {...register("uf")}
                        className={style.menor}
                        />
                        {errors.uf && <p>{errors.uf.message}</p>}
                    </div>
                    <div className={style.campo}>
                        <input
                        type="text"
                        placeholder="Cidade"
                        {...register("cidade")}
                        />
                        {errors.cidade && <p>{errors.cidade.message}</p>}
                    </div>
                    </div>

                    <div className={style.linha}>
                    <div className={style.campo}>
                        <input
                        type="text"
                        placeholder="Número"
                        {...register("numero")}
                        className={style.menor}
                        />
                        {errors.numero && <p>{errors.numero.message}</p>}
                    </div>
                    <div className={style.campo}>
                        <input
                        type="text"
                        placeholder="Bairro"
                        {...register("bairro")}
                        />
                        {errors.bairro && <p>{errors.bairro.message}</p>}
                    </div>
                </div>


                <button type="submit" className={style.enviar}>
                ENVIAR
                </button>
            </form>
            )}

            <button className={style.fechar} onClick={onClose}>
            X
            </button>
        </div>

        {abrirModal2 && <Modal2 onClose={() => setAbrirModal2(false)} />}
        </div> 
    );
}
