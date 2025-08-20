import styles from "./styles.module.css";
import coracao from "../../Assets/Favorito-cinza.png";
import desconto from "../../Assets/Desconto.png";
import favoritadoimg from "../../Assets/Favoritado.png";
import type { CardPijama } from "../../Types/Pijama";
import { useState } from "react";
import Favoritar from "../../Functions/Favoritar";
import Desfavoritar from "../../Functions/Desfavoritar";

export default function Card({name, price, image, favorite, on_sale, sale_percent, menor}: CardPijama) {
    const [favorited, setFavorited] = useState(favorite);

    function handleFavorite() {
        setFavorited(!favorited);
        if (favorited) {
            Favoritar();//passar a informação necessária aqui
        } else {
            Desfavoritar();//passar a informação necessária aqui
        }
    }

    return (
        <div className={styles.card} style={menor ? {width: "14.9vw", height: "69.9vh"} : {}}>
            <div className={styles.images}>

                {favorited ? (
                    <img src={favoritadoimg} alt="coracao" className={styles.coracao} 
                    onClick={e => {
                        e.preventDefault();
                        handleFavorite();
                    }}/>
                ) : (
                    <img src={coracao} alt="coracao" className={styles.coracao} 
                    onClick={e => {
                        e.preventDefault();
                        handleFavorite();
                    }}/>
                )}

                {on_sale && (<img src={desconto} className={styles.desconto}/>)}
                <img src={image} alt="img fundo" className={styles.fundo}/> 
            </div>

            <div className={styles.info}>
                <h1 style={menor ? {fontSize: "13px"} : {}}>{name}</h1>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "12px"}}>
                    <div className={styles.preco}>
                        {on_sale && (
                            menor ? null : (
                                <p className={styles.precoOriginal}>
                                    R$ {price.toFixed(2).replace(".", ",")}
                                </p>
                            )
                        )}
                        {on_sale ? (
                            <h2 style={menor ? {fontSize: "24px"} : {}}>
                                R$ {(price - (price * (sale_percent ?? 0) / 100)).toFixed(2).replace(".", ",")}
                            </h2>
                        ) : (
                            <h2>R$ {price.toFixed(2).replace(".", ",")}</h2>
                        )}
                    </div>

                    {menor ? null : <p className={styles.parcelas}>6x de <strong>{(price / 6).toFixed(2).replace(".", ",")}</strong></p>}
                </div>
            </div>
        </div>
    )
}