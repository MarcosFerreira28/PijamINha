import styles from "./styles.module.css";
import coracao from "../../Assets/Coracao.png";
import desconto from "../../Assets/Desconto.png";
import favoritado from "../../Assets/Favoritado.png";
import type { CardPijama } from "../../Types/CardPijama";

export default function Card(props: CardPijama) {
    return (
        <div className={styles.card}>
            <div className={styles.images}>
                <img src={props.favorite ? favoritado : coracao} alt="coracao" className={styles.coracao}/>
                <img src={props.on_sale ? desconto: ""} className={styles.desconto}/>
                <img src={props.image} alt="img fundo" className={styles.fundo}/> 
            </div>

            <div className={styles.info}>
                <h1>{props.name}</h1>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
                    <div className={styles.preco}>
                        {props.on_sale && (
                        <p className={styles.precoOriginal}>
                            R$ {props.price.toFixed(2).replace(".", ",")}
                        </p>
                        )}
                        {props.on_sale ? (
                            <h2>R$ {(props.price - (props.price * props.sale_percent / 100)).toFixed(2).replace(".", ",")}</h2>
                        ) : (
                            <h2>R$ {props.price.toFixed(2).replace(".", ",")}</h2>
                        )}
                    </div>
                    <p className={styles.parcelas}>6x de <strong>{(props.price / 6).toFixed(2).replace(".", ",")}</strong></p>
                </div>
            </div>
        </div>
    )
}