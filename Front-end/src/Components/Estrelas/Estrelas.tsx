import { useState } from "react";
import styles from "./styles.module.css";
import estrelaVazia from '../../assets/estrelaVazia.svg';
import estrelaCheia from '../../assets/estrelaPintada.svg';
import estelaMetade from '../../assets/estrelaMetade.svg';

interface EstrelasProps {
    onRate: (rating: number) => void;
}

export default function Estrelas({ onRate }: EstrelasProps) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const getStarState = (value: number) => {
        const displayValue = hover || rating;
        if (displayValue >= value) {
            return 'cheia';
        } else if (displayValue >= value - 0.5) {
            return 'metade';
        }
        return 'vazia';
    };

    const handleStarClick = (value: number) => {
        setRating(value);
        onRate(value);
    };

    const handleStarHover = (value: number) => {
        setHover(value);
    };

    const handleMouseLeave = () => {
        setHover(0);
    };

    const getStarImage = (starState: string) => {
        switch (starState) {
            case 'cheia':
                return estrelaCheia;
            case 'metade':
                return estelaMetade;
            default:
                return estrelaVazia;
        }
    };

    return (
        <div className={styles.estrelasContainer} onMouseLeave={handleMouseLeave}>
            {[...Array(5)].map((_, index) => {
                const estrelaValor = index + 1;
                const starState = getStarState(estrelaValor);

                return (
                    <div key={index} className={styles.estrelaIndividual}>
                        <img
                            src={getStarImage(starState)}
                            alt="Estrela de avaliação"
                            className={styles.estrelaIcone}
                        />
                        <div className={styles.estelaMetade} 
                        onMouseEnter={() => handleStarHover(estrelaValor - 0.5)} onClick={() => handleStarClick(estrelaValor - 0.5)}></div>
                        
                        <div className={styles.estrelaCheia}
                            onMouseEnter={() => handleStarHover(estrelaValor)}
                            onClick={() => handleStarClick(estrelaValor)}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}