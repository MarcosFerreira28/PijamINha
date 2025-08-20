import styles from "./styles.module.css"

export default function Feedback() {
    return (
        <div className={styles.mainFeedback}>

            <div className={styles.feedbackCard}>
                <div className={styles.tituloEtexto}>
                    <h1 className={styles.titulo}>Feedback</h1>
                    <div className={styles.texto}>
                        <p>Fale um pouco sobre a sua</p>
                        <p>experiência com a nossa loja!</p>
                    </div>
                </div>
                <form>
                    <div className={styles.inputs}>
                        <input
                            type="text"
                            placeholder="Nome Completo"
                            className={styles.nome}
                        />
                        <input
                            type="text"
                            placeholder="Descrição Detalhada"
                            className={styles.descricao}
                        />
                    </div> 
                    <div className={styles.enviarContainer}>
                        <button className={styles.btnEnviar}>ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
