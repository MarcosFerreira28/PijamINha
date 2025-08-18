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
import setaesquerda from '../../Assets/setaesquerda.png';
import setadireita from '../../Assets/setadireita.png';

import { useRef, useEffect, useState } from 'react';
import type { FeedbackType } from '../../Types/Feedback.ts';



export default function Home() {
    const feedbacks: FeedbackType[] = [
        { name: 'Fulano da Silva', rating: 4, description: 'Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaa aaaaaaa aaaaaa  aaaaa aaaaaaaaaaaaaaaa aaaa aaaaaaaaaaaa aaaaaaaaaa aaaaaaa aaaaaaaaaaaaaa aaaa qdjhsd wdjqhdfqhhwqn fnnfqwhf hwb dwqh dw dhqfwqdhw  qwhd wh dwhqwhwq dsdgsg gdgsdgs gsfdgg sgdsdgdsgds ' },
        { name: 'Fjoger', rating: 4.6, description: 'Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaa ' },
        { name: 'cacetinho', rating: 4.2, description: 'Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaa ' },
        { name: 'marcola', rating: 5, description: 'Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaa ' },
        { name: 'sof da Silva', rating: 4.8, description: 'Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaa ' },
        { name: 'que isso da Silva', rating: 4.1, description: 'Adorei o pijama, muito confortável! eu gosto dele demais ele é tao legal e incrivel voce deveria compra-lo agora mesmo caralho aaa ' },
    ];

    function agruparFeedbacks(feedbacks: FeedbackType[]) {
        const result = [];
        for (let i = 0; i < feedbacks.length; i += 3) {
            result.push(feedbacks.slice(i, i + 3));
        }
        return result;
    }
    const feedbacksAgrupados = agruparFeedbacks(feedbacks);

    // refs para navegação do carrossel
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    // Atualiza as refs após renderizar para garantir que ambas as setas funcionem
    //colocando as funções padrão do init do swiper em um useeffect
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current) {
            // @ts-ignore
            swiperInstance.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance, prevRef, nextRef]);


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
                    <h1 className={styles.feedbacksTitulo}>Feedbacks</h1>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <img src={setaesquerda} alt="Anterior" ref={prevRef} className={styles.setas} />
                        <Swiper
                            modules={[Navigation]}
                            slidesPerView={1}
                            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                            onSwiper={setSwiperInstance}
                            loop
                            className={styles.feedbacksSwiper}
                        >
                            {feedbacksAgrupados.map((grupo, idx) => (
                                <SwiperSlide key={idx}>
                                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', padding: '0 20px 20px 20px' }}>
                                        {grupo.map((feedbackCard, i) => (
                                            <Feedback key={i} {...feedbackCard} />
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <img src={setadireita} alt="Próximo" ref={nextRef} className={styles.setas} />
                    </div>
                </div>

                <button className={styles.feedbackButton}>Também quero dar um feedback!</button>
                {/* adicionar link to para pagina de feedback */}
            </span>
        </div>
    )
}