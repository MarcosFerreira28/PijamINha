import { useForm } from "react-hook-form"
import styles from "./styles.module.css"
import z from "zod"
import cpf from 'cpf'
import { zodResolver } from "@hookform/resolvers/zod"

const userSchema = z.object({
    nome: z.string().regex(/^[^/d]+$/ , {
        message: 'Não pode ter números'
    }),
    usuario: z.string().refine(value => value.trim().length > 0, { message: 'Não pode ter espaços' }),
    email: z.string().nonempty('O E-mail não pode ser vazio').refine(value => z.string().email().safeParse(value).success, { 
        message: 'O e-mail não é válido'
    }),
    senha: z.string().nonempty('Senha não pode ser vazia').min(6, 'Deve ter no mínimo 6 caracteres').refine(value => value.trim().length > 0, { message: 'Não pode ter espaços' }),
    confirmarSenha: z.string().nonempty('A confirmação de senha não pode ser vazia').refine(data => data.senha === data.confirmarSenha, {
        message: 'As senhas não coincidem',
        path: ['confimarSenha']
    })
})

type User = z.infer<typeof userSchema>

export default function Cadastro() {
    const { register, handleSubmit, reset } = useForm<User>({
        resolver: zodResolver(userSchema)
    })

    function createUser(data: User) {
        console.log(data)
        reset()
    }


    return (
        <div className={styles.mainCadastro}>

            <div className={styles.cardCadastro}>
                <h1>Registre-se</h1>

                <form onSubmit={handleSubmit(createUser)}>
                    <div className={styles.inputs}>
                        <input type="text"
                            placeholder="Nome"
                            {...register('nome')}
                        />
                        <input type="text"
                            placeholder="Nome de Usuário"
                            {...register('usuario')}
                        />
                        <input type="email"
                            placeholder="E-mail"
                            {...register('email')}
                        />
                        <input type="password"
                            placeholder="Senha"
                            {...register('senha')}
                        />
                        <input type="password"
                            placeholder="Confirmar senha"
                            {...register('confirmarSenha')}
                        />
                    </div>
                </form>
                <button className={styles.btnRegistrar}>REGISTRAR</button>

            </div>
        </div>
    )
}