import InfoPijamaIndividual from "../../Components/InfoPijamaIndividual/InfoPijamaIndividual";
import styles from "./styles.module.css";
import SobrePijama from "../../Components/SobrePijama/SobrePijama";

import masculino from '../../Assets/Masculino.svg';
import feminino from '../../Assets/Feminino.svg';
import familia from '../../Assets/Família.svg';
import unissex from '../../Assets/Unissex.svg';
import inverno from '../../Assets/Inverno.svg';
import verao from '../../Assets/Verão.svg';
import adulto from '../../Assets/Adulto.svg';
import infantil from '../../Assets/Infantil.svg';
import ambos from '../../Assets/Ambos.svg';
import { useLoaderData } from "react-router-dom";
import type { Pijama } from "../../Types/Pijama";

export default function Individual() {
    const info = useLoaderData() as Pijama;

    const season = info.season;
    const gender = info.gender;
    const type = info.type;

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <img className={styles.imagemPijama} src={info.image} alt="" />

                <InfoPijamaIndividual />

            </div>



            <div className={styles.imagensContainer}>
                {season.toLowerCase() === "winter" ? <img src={inverno} alt="" /> : (
                    season.toLowerCase() === "summer" ? <img src={verao} alt="" /> : null
                )}

                {gender.toLowerCase() === "female" ? <img src={feminino} alt="" /> : (
                    gender.toLowerCase() === "male" ? <img src={masculino} alt="" /> : (
                        gender.toLowerCase() === "unissex" ? <img src={unissex} alt="" /> : (
                            gender.toLowerCase() === "family" ? <img src={familia} alt="" /> : null
                        )
                    )
                )}

                {type.toLowerCase() === "adult" ? <img src={adulto} alt="" /> : (
                    type.toLowerCase() === "child" ? <img src={infantil} alt="" /> : (
                        type.toLowerCase() === "both" ? <img src={ambos} alt="" /> : null
                    )
                )}
            </div>

            <SobrePijama description={info.description} />
        </div>
    )
}