import type { FeedbackType } from '../../Types/Feedback';
import estrelaVazia from '../../Assets/estrelaVazia.png';
import estrelaPintada from "../../assets/estrelaPintada.png";
import estrelaMetade from "../../assets/estrelaMetade.png";
import styles from './styles.module.css';

export default function Feedback({name, rating, description} : FeedbackType){
    return (
        <div className={styles.feedbackContainer}>
            <h1>{name}</h1>
            <div style={{ maxWidth: "25.1vw"}}>
                <img src={estrelaPintada} alt="" />
                <img src={estrelaPintada} alt="" />
                <img src={estrelaPintada} alt="" />
                <img src={estrelaPintada} alt="" />
                {
                    rating < 4.5 ? (
                        <img src={estrelaVazia} alt="" />
                    ) : rating < 5 ? (
                        <img src={estrelaMetade} alt="" />
                    ) : (
                        <img src={estrelaPintada} alt="" />
                    )
                }
            </div>
            <div className={styles.descriptionContainer}>
                <p>{description}</p>
            </div>
        </div>
    )
}