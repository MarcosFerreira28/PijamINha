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

    const formatPaymentMethod = (method: string) => {
        const methodMap = {
            'PIX': 'PIX',
            'MONEY': 'Boleto',
            'CREDIT_CARD': 'Cartão de Crédito',
            'DEBIT_CARD': 'Cartão de Débito'
        };
        return methodMap[method as keyof typeof methodMap] || method;
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price);
    };

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
                            
                            <div className={style.resumoCompra}>
                                <h3>Resumo da Compra:</h3>
                                <p><strong>Total:</strong> {formatPrice(saleData.price)}</p>
                                <p><strong>Forma de Pagamento:</strong> {formatPaymentMethod(saleData.paymentMethod)}</p>
                                {saleData.installments && saleData.installments > 1 && (
                                    <p><strong>Parcelamento:</strong> {saleData.installments}x</p>
                                )}
                                <p><strong>Itens:</strong> {saleData.salePajamas.length} produto(s)</p>
                                <p><strong>Entrega em:</strong> {saleData.adress.city} - {saleData.adress.state}</p>
                            </div>
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


