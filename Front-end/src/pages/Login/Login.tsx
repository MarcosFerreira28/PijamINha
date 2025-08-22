import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { api } from "../../interceptator/interceptor"
import { getUserProfile } from "../../Hooks/getProfile"
import { useAuthStore } from "../../store/AuthStore"

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

type LoginFormData = z.infer<typeof userSchema>

export default function Login() {
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigate = useNavigate();
    const setToken = useAuthStore((state) => state.setToken);
    const setUser = useAuthStore((state) => state.setUser);
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<LoginFormData>({
        resolver: zodResolver(userSchema)
    })

    async function loginUser(data: LoginFormData) {
        try {
            const isEmail = z.string().email().safeParse(data.usuarioOuEmail).success;

            const requestBody = isEmail
                ? { identifier: data.usuarioOuEmail, password: data.senha }
                : { identifier: data.usuarioOuEmail, password: data.senha };
            
            const response = await api.post('/sessions', requestBody);

            if (response.status === 200) {
                const { token } = response.data;
                console.log(token);
                setToken(token);

                try {
                    const userProfile = await getUserProfile();
                    setUser(userProfile);
                    console.log('Perfil do usuário:', userProfile);
                } catch (profileError) {
                    console.error('Erro ao buscar perfil:', profileError);
                }

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
                                    className={styles.eyeButton}
                                >
                                    {mostrarSenha ? (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.99902 3L20.999 21M9.8433 9.91364C9.32066 10.4536 8.99902 11.1892 8.99902 12C8.99902 13.6569 10.3422 15 11.999 15C12.8215 15 13.5667 14.669 14.1086 14.133M6.49902 6.64715C4.59972 7.90034 3.15305 9.78394 2.45703 12C3.73128 16.0571 7.52159 19 11.9992 19C13.9881 19 15.8414 18.4194 17.3988 17.4184M10.999 5.04939C11.328 5.01673 11.6617 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C21.2607 12.894 20.8577 13.7338 20.3522 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.45703 12C3.73128 7.94288 7.52159 5 11.9992 5C16.4769 5 20.2672 7.94291 21.5414 12C20.2672 16.0571 16.4769 19 11.9992 19C7.52159 19 3.73128 16.0571 2.45703 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M11.9992 15C13.6561 15 14.9992 13.6569 14.9992 12C14.9992 10.3431 13.6561 9 11.9992 9C10.3424 9 8.99923 10.3431 8.99923 12C8.99923 13.6569 10.3424 15 11.9992 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
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