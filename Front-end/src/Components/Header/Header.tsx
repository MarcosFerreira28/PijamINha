import logo from "../../assets/Logo.png"
import user from "../../assets/User.svg"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><img src={logo} alt="logo" className={styles.loboimg} /></Link>

            <nav className={styles.nav}>
                <Link to="/pijaminhas">PIJAMINHAS</Link>
                <Link to="/pijaminhas?gender=Feminino">FEMININO</Link>
                <Link to="/pijaminhas?gender=Masculino">MASCULINO</Link>
                <Link to="/pijaminhas?type=Infantil">INFANTIL</Link>
            </nav>

            <div className={styles.icons}>
                <div>
                    <Link to="/carrinho"><svg
                        className={styles.carrinho}
                        width="33"
                        height="33"
                        viewBox="0 0 33 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="24.1152" cy="25.2786" rx="2.22115" ry="2.22115" stroke="#FCF7F8" stroke-width="1.375" />
                        <ellipse cx="12.2695" cy="25.2786" rx="2.22115" ry="2.22115" stroke="#FCF7F8" stroke-width="1.375" />
                        <path d="M26.1834 21.5769H10.7715C10.4642 21.5769 10.1943 21.3731 10.1102 21.0776L9.71045 19.6731M7.13311 10.6177L6.60133 8.7493C6.51723 8.45382 6.2473 8.25 5.94009 8.25H4.94198H4.125M7.13311 10.6177L27.0062 11.0866C27.4308 11.0966 27.7449 11.4855 27.6653 11.9027L26.2899 19.1144C26.2281 19.4386 25.9446 19.6731 25.6146 19.6731H9.71045M7.13311 10.6177L9.71045 19.6731" stroke="#FCF7F8" stroke-width="1.375" stroke-linecap="round" />
                    </svg>
                    </Link>
                    <Link to="/favoritos"><svg
                        className={styles.coracao}
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.51182 4.51162C6.00352 2.01992 10.0434 2.01992 12.5351 4.51162L22.4606 14.4372L13.4374 23.4604L3.51182 13.5349C1.02012 11.0432 1.02012 7.00331 3.51182 4.51162Z" fill="#FCF7F8" />
                        <path d="M23.5116 4.51162C21.0199 2.01992 16.9801 2.01992 14.4884 4.51162L4.56283 14.4372L13.5861 23.4604L23.5116 13.5349C26.0033 11.0432 26.0033 7.00331 23.5116 4.51162Z" fill="#FCF7F8" />
                    </svg>
                    </Link>
                </div>
                <Link to="/login">
                    <img src={user} alt="" />
                </Link>
            </div>
        </header>
    )
}