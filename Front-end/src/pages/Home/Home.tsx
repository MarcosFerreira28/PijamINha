import styles from './styles.module.css';

import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import type SwiperCore from 'swiper';

import loboHome from '../../Assets/LoboHome.png';
import pijamaMulher from '../../Assets/PijamaMulher.png';
import people from '../../Assets/People.png';
import delivery from '../../Assets/Delivery.png';
import PromocaoNatal from '../../Assets/PromocaoNatal.png';
import PromocaoValentines from '../../Assets/PromocaoValentines.png';
import PromocaoGrupo from '../../Assets/PromocaoGrupo.png';
import Card from '../../Components/Card/Card';
import FeedbackCard from '../../Components/FeedbackCard/FeedbackCard.tsx';
import setaesquerda from '../../Assets/setaesquerda.svg';
import setadireita from '../../Assets/setadireita.svg';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import type { FeedbackType } from '../../Types/Feedback.ts';
import { Link } from 'react-router-dom';
import type { Pijama } from '../../Types/Pijama.ts';



export default function Home() {
    const [pijamas, setPijamas] = useState<Pijama[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3333/pajamas")
        .then(response => setPijamas(response.data))
        .catch(error => console.error("Erro ao buscar pijamas:", error));
    }, [])

    const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3333/feedbacks")
        .then(response => setFeedbacks(response.data.feedbacks))
        .catch(error => console.error("Erro ao buscar feedbacks:", error));
    }, []);


    const swiperRef = useRef<SwiperCore | null>(null)

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
                        {pijamas.filter(p => p.onSale).slice(0,3).map((pijama, index) => (
                            <Link to={`/individual/${pijama.id}`} key={index} style={{cursor: "pointer", textDecoration: "none"}}>
                                <Card id={pijama.id} name={pijama.name} price={pijama.price} image={pijama.image} favorite={pijama.favorite} onSale={pijama.onSale} salePercent={pijama.salePercent} menor={false}/>
                            </Link>
                        ))}
                    </div>
                </div>

                <div className={styles.feedbacks}>
                    <h1 className={styles.feedbacksTitulo}>Feedbacks</h1>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center'}}>
                        {feedbacks.length > 0 ? (
                            <div className={styles.containerFeedbackSwiper}>
                                {feedbacks.length > 3 ? 
                                <img src={setaesquerda} alt="Anterior" className={styles.setas} onClick={() => {
                                                                                                    swiperRef.current?.slidePrev()
                                                                                                }}/>
                                : null}
                                <Swiper
                                    slidesPerView={Math.min(3, feedbacks.length)}
                                    loop
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                    className={styles.feedbacksSwiper}
                                >
                                    {feedbacks.map((grupo, idx) => (
                                        <SwiperSlide key={idx}>
                                            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', padding: '0 20px 20px 20px' }}>
                                                <FeedbackCard key={idx} {...grupo} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {feedbacks.length > 3 ? 
                                <img src={setadireita} alt="Anterior" className={styles.setas} onClick={() => {
                                                                                                    swiperRef.current?.slideNext()
                                                                                                }}/>
                                : null }
                            </div>
                        ) : null}
                    </div>
                </div>

                <Link to="/feedback"><button className={styles.feedbackButton}>Também quero dar um feedback!</button></Link>
            </span>
        </div>
    )
}