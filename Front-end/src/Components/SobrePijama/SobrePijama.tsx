import styles from './styles.module.css';

export default function SobrePijama({ description } : { description: string }) {


    return (
        <div className={styles.container}>
            <h1>SOBRE NOSSO PIJAMA</h1>

            <p>{description}</p>

            <div>
                <h2>Contém:</h2>
                <ul>
                    <li>Um pijama que voce vai amar ter!</li>
                    <li>Estilização perfeita e a moda de última linha incrivelmente confortável!!</li>
                </ul>
            </div>

            <div>
                <h2>Composição: </h2>
                <ul>
                    <li>100% algodão</li>
                </ul>
            </div>

        </div>
    )
}