import { useForm } from "react-hook-form"
import styles from "./styles.module.css"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ModalCadastro from "../../Components/Modais/ModalCadastro/ModalCadastro"
import { useState } from "react"


const userSchema = z.object({
    nome: z.string().regex(/^\D+$/, {
        message: '* Não pode ter números'
    }),
    usuario: z.string()
        .nonempty('* O usuário não pode ser vazio')
        .refine(value => value.trim().length > 0, { message: '* Não pode ter espaços' })
        .regex(/^[a-zA-Z0-9]+$/, {
            message: '* Não pode ter acentos'
        }),

    email: z.string().nonempty('* O E-mail não pode ser vazio').refine(value => z.string().email().safeParse(value).success, {
        message: '* O e-mail não é válido'
    }),
    senha: z.string().nonempty('* Senha não pode ser vazia').min(6, '* Deve ter no mínimo 6 caracteres').refine(value => value.trim().length > 0, { message: '* Não pode ter espaços' }),
    confirmarSenha: z.string().nonempty('* A confirmação de senha não pode ser vazia')
})
    .refine((data) => data.senha === data.confirmarSenha, {
        message: '* As senhas não coincidem',
        path: ['confirmarSenha']
    });


type User = z.infer<typeof userSchema>

export default function Cadastro() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<User>({
        resolver: zodResolver(userSchema)
    });

    const handleFecharModalEnavegar = () => {
        setIsModalOpen(false);
        navigate('/login');
    }

    async function createUser(data: User) {
        try {
            const requestData = {
                name: data.nome,
                username: data.usuario,
                email: data.email,
                password: data.senha,
            };
            await axios.post('http://localhost:3333/users', requestData);

            console.log('Usuário criado com sucesso!');
            
            setIsModalOpen(true);

        } catch (error: any) {
            if (error.response?.status === 409) {
                setError('root', {
                    message: "* E-mail ou nome de usuário já cadastrado."
                });
            } else {
                setError('root', {
                    message: "* Erro ao criar usuário. Tente novamente."
                });
            }
        }
    }


    return (
        <div className={styles.mainCadastro}>
            {isModalOpen && <ModalCadastro onCloseModal={handleFecharModalEnavegar} />}
            <div className={styles.cardCadastro}>
                <h1>Registre-se</h1>

                <form className={styles.form} onSubmit={handleSubmit(createUser)}>
                    <div className={styles.inputs}>
                        <div className={styles.cadaInput}><input type="text"
                            placeholder="Nome"
                            {...register('nome')}
                        />
                            {errors.nome &&
                                <span className={styles.errorMessage}>{errors.nome.message}
                                </span>
                            }</div>
                        <div className={styles.cadaInput}><input type="text"
                            placeholder="Nome de Usuário"
                            {...register('usuario')}
                        />
                            {errors.usuario &&
                                <span className={styles.errorMessage}>{errors.usuario.message}</span>
                            }</div>
                        <div className={styles.cadaInput}><input type="email"
                            placeholder="E-mail"
                            {...register('email')}
                        />
                            {errors.email &&
                                <span className={styles.errorMessage}>{errors.email.message}</span>
                            }</div>
                        <div className={styles.cadaInput}>
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
                        <div className={styles.cadaInput}>
                            <div className={styles.senhaInput}>
                                <input 
                                    type={mostrarConfirmarSenha ? "text" : "password"}
                                    placeholder="Confirmar senha"
                                    {...register('confirmarSenha')}
                                />
                                <button
                                    type="button"
                                    onClick={() => setMostrarConfirmarSenha(!mostrarConfirmarSenha)}
                                    className={styles.eyeButton}
                                >
                                    {mostrarConfirmarSenha ? (
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
                            {errors.confirmarSenha &&
                                <span className={styles.errorMessage}>{errors.confirmarSenha.message}</span>
                            }
                        </div>
                    </div>
                    <div className={styles.btnEspan}>
                        <button
                            type='submit'
                            disabled={isSubmitting}
                            className={styles.btnRegistrar}
                        >{isSubmitting ? 'REGISTRANDO...' : 'REGISTRAR'}

                        </button>
                        {errors.root &&
                            <span className={styles.errorMessage}>{errors.root.message}</span>
                        }</div>

                </form>

            </div>
        </div>
    )
}