import logo from "../../assets/Logo.png"
import carrinho from "../../assets/Carrinho.png"
import favorito from "../../assets/Favorito.png"
import user from "../../assets/User.png"
import styles from "./styles.module.css"

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
                    <img src={carrinho} alt="carrinho" />
                    <img src={favorito} alt="favorito" />
                </div>
                <img src={user} alt="login" />
            </div>
        </header>
    )
}