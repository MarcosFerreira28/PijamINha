import styles from "./styles.module.css";

export default function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.images}>
                <img src="" alt="coracao" />
                <img src="" alt="desconto" />
                <img src="" alt="img fundo" />
            </div>

            <div className={styles.info}>
                <h1>Nome do pijama</h1>
                <p>R$ 78,00</p>
                <h2>R$ 40,00</h2>
                <p>6x de <strong>13,15</strong></p>
            </div>
        </div>
    )
}