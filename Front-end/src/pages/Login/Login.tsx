import styles from "./styles.module.css"
import { Link } from "react-router-dom"

export default function Login() {

    return (
        <div className={styles.mainLogin}>

            <div className={styles.loginCard}>

                <div className={styles.tituloEdesc}>
                    <h1>Login</h1>
                    <div className={styles.desc}>
                        <p>Faça login para ter acesso aos</p> 
                        <p>pijamas dos seus <span>sonhos!</span></p>
                    </div>

                </div>

                <form className={styles.inputsEbotoes}>
                    <div className={styles.cadaInput}>
                        <input type="text"
                            placeholder="Usuário ou E-mail"
                        />
                    </div>
                    <div className={styles.cadaInput}>
                        <input type="text"
                            placeholder="Senha"
                        />
                    </div>
                    <button className={styles.btnEsqueciSenha}>Esqueci a minha senha</button>
                    <div className={styles.barraBranca}></div>
                    <Link to='/cadastro'>Cadastre-se</Link>
                </form>

            </div>
        </div>
    )
}