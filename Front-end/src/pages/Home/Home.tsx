import styles from './styles.module.css';
import loboHome from '../../Assets/LoboHome.png';
import pijamaMulher from '../../Assets/PijamaMulher.png';
import people from '../../Assets/People.png';
import delivery from '../../Assets/Delivery.png';


export default function Home() {

    return (
        <div className={styles.home}>
            <div className={styles.apresentacao}>
                <img src={loboHome} alt="" />
                <p>Se os lobos soubessem desse conforto, nem sopravam casas, iam dormir!</p>
            </div>

            <img src="" alt="" /> {/* aqui tem que ter o carrosel, componente Banner */}

            <div className={styles.vantagens}>
                <div>
                    <img src={pijamaMulher} alt="foto pijama" />
                    <p>Pijamas confortáveis e com tecnologia</p>
                </div>
                <div>
                    <img src={people} alt="foto de pessoas" />
                    <p>Modelos para todas as idades e tamanhos</p>
                </div>
                <div>
                    <img src={delivery} alt="foto de caminhao" />
                    <p>Frete grátis em todo o Brasil e exterior</p>
                </div>
            </div>

            <div className={styles.cards}>
                <h1>Nossas últimas promoções!</h1>
                {/* 3 cards aleatorios que ao clicar vai pra sua pagina individual */}
            </div>

            <div className={styles.feedbacks}>
                <h1>Feedbacks</h1>
                {/* componente feedbacks em carrosel e somente os com 4 ou mais estrelas */}
            </div>

            <button>Também quero dar um feedback!</button>
            {/* adicionar link to para pagina de feedback */}
        
        </div>
    )
}