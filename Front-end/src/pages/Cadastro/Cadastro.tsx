import { useForm } from "react-hook-form"
import styles from "./styles.module.css"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

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
    const { register, handleSubmit, formState: { errors, isSubmitting }, setError } = useForm<User>({
        resolver: zodResolver(userSchema)
    })

    async function createUser(data: User) {
        try {
            await new Promise(resolve => setTimeout(resolve, 2000))
            console.log(data)
            throw new Error('* Erro ao criar usuário')
        } catch {
            setError('root', {
                message: "* Erro ao criar usuário"
            })
        }
    }


    return (
        <div className={styles.mainCadastro}>

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
                        <div className={styles.cadaInput}><input type="password"
                            placeholder="Senha"
                            {...register('senha')}
                        />
                            {errors.senha &&
                                <span className={styles.errorMessage}>{errors.senha.message}</span>
                            }</div>
                        <div className={styles.cadaInput}><input type="password"
                            placeholder="Confirmar senha"
                            {...register('confirmarSenha')}
                        />
                            {errors.confirmarSenha &&
                                <span className={styles.errorMessage}>{errors.confirmarSenha.message}</span>
                            }</div>
                    </div>
                    <div className={styles.btnEspan}><button type='submit' disabled={isSubmitting} className={styles.btnRegistrar}>{isSubmitting ? 'REGISTRANDO...' : 'REGISTRAR'}</button>
                        {errors.root &&
                            <span className={styles.errorMessage}>{errors.root.message}</span>
                        }</div>

                </form>

            </div>
        </div>
    )
}