import InfoPijamaIndividual from "../../Components/InfoPijamaIndividual/InfoPijamaIndividual";
import styles from "./styles.module.css";

import masculino from '../../Assets/Masculino.svg';
import feminino from '../../Assets/Feminino.svg';
import familia from '../../Assets/Família.svg';
import unissex from '../../Assets/Unissex.svg';
import inverno from '../../Assets/Inverno.svg';
import verao from '../../Assets/Verão.svg';
import adulto from '../../Assets/Adulto.svg';
import infantil from '../../Assets/Infantil.svg';
import ambos from '../../Assets/Ambos.svg';

export default function Individual() {
    const season = "inverno";
    const gender = "Feminino";
    const type = "Adulto";

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <img className={styles.imagemPijama} src="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" alt="" />

                <InfoPijamaIndividual />

            </div>



            <div className={styles.imagensContainer}>
                {season.toLowerCase() === "inverno" ? <img src={inverno} alt="" /> : (
                    season.toLowerCase() === "verão" ? <img src={verao} alt="" /> : null
                )}

                {gender.toLowerCase() === "feminino" ? <img src={feminino} alt="" /> : (
                    gender.toLowerCase() === "masculino" ? <img src={masculino} alt="" /> : (
                        gender.toLowerCase() === "unissex" ? <img src={unissex} alt="" /> : (
                            gender.toLowerCase() === "família" ? <img src={familia} alt="" /> : null
                        )
                    )
                )}

                {type.toLowerCase() === "adulto" ? <img src={adulto} alt="" /> : (
                    type.toLowerCase() === "infantil" ? <img src={infantil} alt="" /> : (
                        type.toLowerCase() === "ambos" ? <img src={ambos} alt="" /> : null
                    )
                )}
            </div>

            <SobrePijama />
        </div>
    )
}