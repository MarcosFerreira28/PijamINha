import Estrelas from "../../Components/Estrelas/Estrelas"
import styles from "./styles.module.css"
import { useState } from "react"

type FeedbackType = {
    name: string;
    description: string;
    rating: number;
}
export default function Feedback() {
    const [formData, setFormData] = useState<FeedbackType>({
        name: '',
        description: '',
        rating: 0,
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleRatingChange = (newRating: number) => {
        setFormData({
            ...formData,
            rating: newRating,
        });
        console.log("Avaliação:", newRating);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Dados:", formData);

    };

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
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <input
                            name="name"
                            type="text"
                            placeholder="Nome Completo"
                            className={styles.nome}
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="description"
                            id=""
                            placeholder="Descição Detalhada"
                            className={styles.descricao}
                            value={formData.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>

                    <Estrelas onRate={handleRatingChange} />

                    <div>
                    </div>
                    <div className={styles.enviarContainer}>
                        <button className={styles.btnEnviar} type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}