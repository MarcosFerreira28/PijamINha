import styles from "./styles.module.css"
import logoDormindo from "../../assets/LogoDormindo.png"
import instagran from "../../assets/Instagram.png"
import facebook from "../../assets/Facebook.png"
import linkedin from "../../assets/linkedin.png"

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <div className={styles.footerContato}>
                    <div>
                        <h1>Endereço</h1>
                        <p>Av. Milton Tavares de Souza, s/n - Sala 115 B - Boa Viagem, Niterói - RJ CEP: 24210-315 </p>
                    </div>
                    <div>
                        <h1>Fale Conosco</h1>
                        <p>contato@injunior.com.br</p>
                        <span>
                            <img src={instagran} alt="Instagram" />
                            <img src={facebook} alt="Facebook" />
                            <img src={linkedin} alt="LinkedIn" />
                        </span>
                    </div>
                </div>

                <img src={logoDormindo} alt="lobodormindo" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1873241132716!2d-43.135835125815646!3d-22.906460537857185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99817e444e692b%3A0xfd5e35fb577af2f5!2sUFF%20-%20Instituto%20de%20Computa%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1755272772925!5m2!1spt-BR!2sbr"></iframe>            
            </div>
            <div className={styles.copyright}>
                <p>© Copyright 2025. IN Junior. Todos os direitos reservados. Niterói, Brasil.</p>
            </div>
        </footer>
    )
}