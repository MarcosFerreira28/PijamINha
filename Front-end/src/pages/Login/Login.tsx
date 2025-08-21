import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import axios from 'axios';

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
            // Verifica se a entrada é um e-mail
            const isEmail = z.string().email().safeParse(data.usuarioOuEmail).success;

            // Cria o corpo da requisição com a propriedade correta
            const requestBody = isEmail
                ? { identifier: data.usuarioOuEmail, password: data.senha }
                : { identifier: data.usuarioOuEmail, password: data.senha };
            
            // Faz a requisição para a API com o corpo de requisição correto
            const response = await axios.post('http://localhost:3333/sessions', requestBody);

            if (response.status === 200) {
                navigate('/');
            }

        } catch (error: any) {
            if (error.response?.status === 401 || error.response?.status === 404) {
                setError('root', {
                    message: "* Erro ao iniciar sessão: usuário ou senha incorretos"
                });
            } else {
                setError('root', {
                    message: "* Erro de conexão. Tente novamente."
                });
            }
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
                                >
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