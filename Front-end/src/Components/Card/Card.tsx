import styles from "./styles.module.css";
import coracao from "../../Assets/Coracao.png";
import desconto from "../../Assets/Desconto.png";
import favoritadoimg from "../../Assets/Favoritado.png";
import type { CardPijama } from "../../Types/CardPijama";
import { useState } from "react";

// AJUSTAR PARA COLOCAR O WIDTH E HEIGHT DO PROPS
export default function Card(props: CardPijama) {
    const [favorited, setFavorited] = useState(props.favorite);

    return (
        <div className={styles.card}>
            <div className={styles.images}>

                {favorited ? (
                    <img src={favoritadoimg} alt="coracao" className={styles.coracao} onClick={() => setFavorited(!favorited)}/>
                ) : (
                    <img src={coracao} alt="coracao" className={styles.coracao} onClick={() => setFavorited(!favorited)}/>
                )}

                {/* TEM QUE ADICIONAR TRATAMENTO DE CLICAR NO CORAÇÃO E FAVORITAR NA BASE */}

                {props.on_sale && (<img src={desconto} className={styles.desconto}/>)}
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