import { useForm } from "react-hook-form"
import styles from "./styles.module.css"

export default function Cadastro(){
    const { register } = useForm()

    return(
        <div className={styles.mainCadastro}>

           <div className={styles.cardCadastro}>
                <h1>Registre-se</h1>
                
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
                
                <button className={styles.btnRegistrar}>REGISTRAR</button>
            
            </div> 
        </div>
    )
}