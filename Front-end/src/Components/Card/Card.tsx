import styles from "./styles.module.css";
import coracao from "../../Assets/Coracao.png";
import desconto from "../../Assets/Desconto.png";
import favoritado from "../../Assets/Favoritado.png";
import FUNDOCARDTESTE from "../../Assets/FundoCardTeste.png"; //TIRAR E COLOCAR A IMAGEM DO PROPS

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.images}>
                <img src={coracao} alt="coracao" className={styles.coracao}/>
                <img src={desconto} alt="desconto" className={styles.desconto}/>
                <img src={FUNDOCARDTESTE} alt="img fundo" className={styles.fundo}/>
            </div>

            <div className={styles.info}>
                <h1>Nome do pijama</h1>
                <p className={styles.precoOriginal}>R$ 78,00</p>
                <h2>R$ 40,00</h2>
                <p className={styles.parcelas}>6x de <strong>13,15</strong></p>
            </div>
        </div>
    )
}