import style from "./styles.module.css";
import x from "../../../assets/X.png";

export default function ModalFeedback({ onCloseModal }: any) {
    return (
        <div
            className={style.modalTotal}
            onClick={(e) => e.target === e.currentTarget && onCloseModal()}
        >
            <div className={style.modal}>
                <div className={style.texto}>
                    <h2>Obrigado!</h2>
                    <p>Seu feedback foi enviado com sucesso.</p>
                </div>
                <div className={style.botao}>
                    <button className={style.fechar} onClick={onCloseModal}>
                        <img src={x} alt="x" />
                    </button>
                </div>
            </div>
        </div>
    );
}