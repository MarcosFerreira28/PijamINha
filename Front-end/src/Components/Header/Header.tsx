import logo from "../../assets/Logo.png"
import carrinho from "../../assets/Carrinho.png"
import favorito from "../../assets/Favorito.png"
import user from "../../assets/User.png"
import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/"><img src={logo} alt="logo" className={styles.loboimg}/></Link>

            <nav className={styles.nav}>
                <Link to="/pijaminhas">PIJAMINHAS</Link>
                <Link to="/pijaminhas?gender=Feminino">FEMININO</Link>
                <Link to="/pijaminhas?gender=Masculino">MASCULINO</Link>
                <Link to="/pijaminhas?type=Infantil">INFANTIL</Link>
            </nav>

            <div className={styles.icons}>
                <div>
                    <Link to="/carrinho"><img src={carrinho} alt="carrinho" /></Link>
                    <Link to="/favoritos"><img src={favorito} alt="favorito" /></Link>
                </div>
                <Link to="/login"><img src={user} alt="login" /></Link>
            </div>
        </header>
    )
}