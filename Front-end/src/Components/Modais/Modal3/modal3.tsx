import style from "./modal3.module.css";

interface Modal3Props {
    onClose: () => void;
}

export default function Modal3({ onClose }: Modal3Props) {
    return (
        <div className={style.modalTotal}>
        <div className={style.modal}>
            <h2>Sua compra foi concluída!</h2>
            <p>Obrigado por comprar conosco!</p>
            
            <button onClick={onClose} className={style.fechar}>
            Fechar
            </button>
        </div>
        </div>
    );
}
