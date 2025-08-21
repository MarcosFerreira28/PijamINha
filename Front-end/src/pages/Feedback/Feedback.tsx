import Estrelas from "../../Components/Estrelas/Estrelas";
import styles from "./styles.module.css";
import { useState } from "react";
import axios from 'axios';
import ModalFeedback from "../../Components/Modais/ModalFeedback/ModalFeedback"; 

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3333/feedbacks', formData);

            if (response.status === 201) {
                setIsModalOpen(true); 
                setFormData({
                    name: '',
                    description: '',
                    rating: 0,
                });
            }
        } catch (error) {
            alert('Erro ao enviar o feedback. Tente novamente.');
            console.error(error);
        }
    };

    return (
        <div className={styles.mainFeedback}>
            {isModalOpen && <ModalFeedback onCloseModal={handleCloseModal} />}

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
                            placeholder="Descrição Detalhada"
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