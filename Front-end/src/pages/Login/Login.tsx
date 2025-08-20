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
                    <div className={styles.inputs}>
                        <div className={styles.emailInput}>
                            <input type="text"
                                placeholder="Usuário ou E-mail"
                            />
                        </div>
                        <div className={styles.senhaInput}>
                            <input type="text"
                                placeholder="Senha"
                            />
                            <button><svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.549 13.352C8.159 13.352 6.219 11.412 6.219 9.022C6.219 6.632 8.159 4.692 10.549 4.692C12.939 4.692 14.879 6.632 14.879 9.022C14.879 11.412 12.939 13.352 10.549 13.352ZM10.549 6.192C8.989 6.192 7.719 7.462 7.719 9.022C7.719 10.582 8.989 11.852 10.549 11.852C12.109 11.852 13.379 10.582 13.379 9.022C13.379 7.462 12.109 6.192 10.549 6.192Z" fill="#A31621" />
                                <path d="M10.545 18.04C6.785 18.04 3.235 15.84 0.795 12.02C-0.265 10.37 -0.265 7.68 0.795 6.02C3.245 2.2 6.795 0 10.545 0C14.295 0 17.845 2.2 20.285 6.02C21.345 7.67 21.345 10.36 20.285 12.02C17.845 15.84 14.295 18.04 10.545 18.04ZM10.545 1.5C7.315 1.5 4.225 3.44 2.065 6.83C1.315 8 1.315 10.04 2.065 11.21C4.225 14.6 7.315 16.54 10.545 16.54C13.775 16.54 16.865 14.6 19.025 11.21C19.775 10.04 19.775 8 19.025 6.83C16.865 3.44 13.775 1.5 10.545 1.5Z" fill="#A31621" />
                            </svg>
                            </button>
                        </div>
                    </div>

                    <button className={styles.btnEsqueciSenha}>Esqueci a minha senha</button>
                    <div className={styles.barraBranca}></div>
                    <Link to='/cadastro'>Cadastre-se</Link>
                </form>

            </div>
        </div>
    )
}