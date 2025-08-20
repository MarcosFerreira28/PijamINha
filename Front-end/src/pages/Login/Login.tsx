import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

const userSchema = z.object({
    usuarioOuEmail: z.string()
        .nonempty('* O Usuário ou E-mail não pode ser vazio')
        .refine(value => {
            const isEmail = z.string().email().safeParse(value).success;
            if (isEmail) {
                return true;
            }

            const hasSpaces = value.includes(' ');
            if (hasSpaces) {
                return false;
            }

            const hasAccentsOrSpecialChars = !/^[a-zA-Z0-9]+$/.test(value);
            if (hasAccentsOrSpecialChars) {
                return false;
            }

            return true;
        }, {
            message: '* Sem espaços ou acentos'
        }),
    senha: z.string().nonempty('* Senha não pode ser vazia').min(6, '* Deve ter no mínimo 6 caracteres').refine(value => value.trim().length > 0, { message: '* Não pode ter espaços' })
})


type User = z.infer<typeof userSchema>

export default function Login() {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<User>({
        resolver: zodResolver(userSchema)
    })

    async function loginUser(data: User) {
        try {
            await new Promise(resolve => setTimeout(resolve, 1500))
            console.log(data)
            navigate('/home');
            throw new Error('* Erro ao iniciar sessão: usuário não encontrado')
        } catch {
            setError('root', {
                message: "* Erro ao iniciar sessão: usuário não encontrado"
            })
        }
    }


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

                <form onSubmit={handleSubmit(loginUser)} className={styles.inputsEbotoes}>
                    <div className={styles.inputs}>
                        <div className={styles.emailInputEspan}>
                            <div className={styles.emailInput}>
                                <input type="text"
                                    placeholder="Usuário ou E-mail"
                                    {...register('usuarioOuEmail')}
                                />
                                {errors.usuarioOuEmail &&
                                    <span className={styles.errorMessageEmail}>{errors.usuarioOuEmail.message}</span>
                                }
                            </div>
                        </div>

                        <div className={styles.inputSenhaEspan}>
                            <div className={styles.senhaInput}>
                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    placeholder="Senha"
                                    {...register('senha')}
                                />
                                <button
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                ><svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.549 13.352C8.159 13.352 6.219 11.412 6.219 9.022C6.219 6.632 8.159 4.692 10.549 4.692C12.939 4.692 14.879 6.632 14.879 9.022C14.879 11.412 12.939 13.352 10.549 13.352ZM10.549 6.192C8.989 6.192 7.719 7.462 7.719 9.022C7.719 10.582 8.989 11.852 10.549 11.852C12.109 11.852 13.379 10.582 13.379 9.022C13.379 7.462 12.109 6.192 10.549 6.192Z" fill="#A31621" />
                                        <path d="M10.545 18.04C6.785 18.04 3.235 15.84 0.795 12.02C-0.265 10.37 -0.265 7.68 0.795 6.02C3.245 2.2 6.795 0 10.545 0C14.295 0 17.845 2.2 20.285 6.02C21.345 7.67 21.345 10.36 20.285 12.02C17.845 15.84 14.295 18.04 10.545 18.04ZM10.545 1.5C7.315 1.5 4.225 3.44 2.065 6.83C1.315 8 1.315 10.04 2.065 11.21C4.225 14.6 7.315 16.54 10.545 16.54C13.775 16.54 16.865 14.6 19.025 11.21C19.775 10.04 19.775 8 19.025 6.83C16.865 3.44 13.775 1.5 10.545 1.5Z" fill="#A31621" />
                                    </svg>
                                </button>
                            </div>
                            {errors.senha &&
                                <span className={styles.errorMessage}>{errors.senha.message}</span>
                            }
                        </div>

                    </div>
                    <button className={styles.btnEsqueciSenha}>Esqueci minha senha</button>
                    <div className={styles.botaoEbarra}>
                        <button
                            className={styles.btnEntrar}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'ENTRANDO...' : 'ENTRAR'}
                        </button>
                        {errors.root &&
                            <span className={styles.errorMessage}>{errors.root.message}</span>
                        }
                        <div className={styles.barraBranca}></div>
                    </div>
                    <div className={styles.cadastroContainer}>
                        <Link to='/cadastro' className={styles.btnCadastro}>CADASTRE-SE</Link>
                    </div>

                </form>

            </div>
        </div>
    )
}