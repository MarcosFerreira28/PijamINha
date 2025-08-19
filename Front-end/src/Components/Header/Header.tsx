import logo from "../../assets/Logo.png"
import carrinho from "../../assets/Carrinho.png"
import favorito from "../../assets/Favorito.png"
import user from "../../assets/User.png"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo" className={styles.loboimg}/>

            <nav className={styles.nav}>
                <p>PIJAMAS</p>
                <p>FEMININO</p>
                <p>MASCULINO</p>
                <p>INFANTIL</p>
            </nav>

            <div className={styles.icons}>
                <div>
                    <Link to="/carrinho"><img src={carrinho} alt="carrinho" /></Link>
                    <img src={favorito} alt="favorito" />
                </div>
                <img src={user} alt="login" />
            </div>
        </header>
    )
}