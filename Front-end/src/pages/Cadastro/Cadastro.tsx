import styles from "./styles.module.css"

export default function Cadastro(){

    return(
        <div className={styles.mainCadastro}>
          
           <div className={styles.cardCadastro}>
                <h1>Registre-se</h1>
                
                <div className={styles.inputs}>
                    <input type="text" 
                    placeholder="Nome"
                    />
                    <input type="text" 
                    placeholder="Nome"
                    />
                    <input type="email" 
                    placeholder="Nome"
                    />
                    <input type="password" 
                    placeholder="Nome"
                    />
                    <input type="password" 
                    placeholder="Nome"
                    />
                </div>
                
                <button className={styles.btnRegistrar}>REGISTRAR</button>
            
            </div> 
        </div>
    )
}