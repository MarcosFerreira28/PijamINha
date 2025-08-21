import { useNavigate } from "react-router-dom";
import style from "./modal3.module.css";
import x from "../../../assets/X.png";

export default function Modal3() {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/");
    };

    return (
        <div
        className={style.modalTotal}
        onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
        <div className={style.modal}>
            <div className={style.texto}>
            <h2>Seu cadastro foi concluido!</h2>
            <p>Seja Bem Vindo!</p>
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



