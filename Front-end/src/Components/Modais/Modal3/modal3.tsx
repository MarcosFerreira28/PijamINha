import { useNavigate } from "react-router-dom";
import style from "./modal3.module.css";
import x from "../../../assets/X.png";
import type { Sale } from "../../../interfaces/Sale";

interface Modal3Props {
    onClose: () => void;
    saleData: Sale;
    sucesso: boolean;
}

export default function Modal3({onClose, saleData, sucesso}: Modal3Props) {
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate("/");
    }

    return (
        <div
            className={style.modalTotal}
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    handleClose();
                }
            }}
        >
            <div className={style.modal}>
                <div className={style.texto}>
                    {sucesso ? (
                        <>
                            <h2>Sua compra foi concluída!</h2>
                            <p>Obrigado por comprar conosco, {saleData.buyerName}!</p>
                        </>
                    ) : (
                        <>
                            <h2>Erro na compra!</h2>
                            <p>Ops! Ocorreu um erro ao processar sua compra.</p>
                            <p>Tente novamente ou entre em contato com nosso suporte.</p>
                        </>
                    )}
                </div>
                
                <div className={style.botao}>
                    <button className={style.fechar} onClick={handleClose}>
                        <img src={x} alt="x" />
                    </button>
                </div>
            </div>
        </div>
    );
}


