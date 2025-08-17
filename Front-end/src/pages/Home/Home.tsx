import styles from './styles.module.css';

import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import loboHome from '../../Assets/LoboHome.png';
import pijamaMulher from '../../Assets/PijamaMulher.png';
import people from '../../Assets/People.png';
import delivery from '../../Assets/Delivery.png';
import PromocaoNatal from '../../Assets/PromocaoNatal.png';
import PromocaoValentines from '../../Assets/PromocaoValentines.png';
import PromocaoGrupo from '../../Assets/PromocaoGrupo.png';
import Card from '../../Components/Card/Card';
import Feedback from '../../Components/Feedback/Feedback';



export default function Home() {

    return (
        <div className={styles.home}>
            <div className={styles.apresentacao}>
                <img src={loboHome} alt="" />
                <p>Se os lobos soubessem desse conforto, nem sopravam casas, iam dormir!</p>
            </div>

            <Swiper className={styles.swiper}
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop
            >
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={PromocaoNatal} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={PromocaoValentines} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src={PromocaoGrupo}/>
                </SwiperSlide>
            </Swiper>

            <span style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
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

                <div className={styles.cardContainer}>
                    <h1 className={styles.titulo}>Nossas últimas promoções!</h1>
                    <div className={styles.cards}>
                        <Card name="Pijama feminino longo - estampa poá daksdajs ndna jsndjs najn dsjan jdn ajn" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={false} />
                        <Card name="Pijama feminino longo - estampa poá daksdajs ndna jsndjs najn dsjan jdn ajn" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={false} />
                        <Card name="Pijama feminino longo - estampa poá daksdajs ndna jsndjs najn dsjan jdn ajn" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={false} />
                    </div>
                    {/* 3 cards aleatorios que ao clicar vai pra sua pagina individual precisa do get na base */}
                </div>

                <div className={styles.feedbacks}>
                    <h1>Feedbacks</h1>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        <Feedback name='Fulano da Silva' rating={4.6} description='Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaa aaaaaaa aaaaaa  aaaaa aaaaaaaaaaaaaaaa aaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaaaaa aaaa qdjhsd wdjqhdfqhhwqn fnnfqwhf hwb dwqh dw dhqfwqdhw  qwhd wh dwhqwhwq dsdgsg gdgsdgs gsfdgg sgdsdgdsgds ' />
                        <Feedback name='Fulano da Silva' rating={4.6} description='Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaa ' />
                    {/* componente feedbacks em carrosel e somente os com 4 ou mais estrelas */}
                    </div>
                </div>

                <button className={styles.feedbackButton}>Também quero dar um feedback!</button>
                {/* adicionar link to para pagina de feedback */}
            </span>

        </div>
    )
}