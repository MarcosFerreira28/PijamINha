import Header2 from "../../Components/Header-2";
import setaesquerda from "../../Assets/setaesquerda.svg";
import setadireita from "../../Assets/setadireita.svg";

import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useRef, useState } from "react";
import type SwiperCore from 'swiper';
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import styles from"./styles.module.css";
import axios from "axios";
import type { Pijama } from "../../Types/Pijama";

export default function Favoritos() {
    const [pijamas, setPijamas] = useState<Pijama[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3333/pajamas")
        .then(response => setPijamas(response.data))
        .catch(error => console.error("Erro ao buscar pijamas:", error));
    }, [])
    
    const swiperRef = useRef<SwiperCore | null>(null);
        
    return (
        <> 
            <Header2 />
            <div className={styles.favoritosContainer}>
                
                <img src={setaesquerda} alt="Anterior" className={styles.setas} onClick={() => {
                                                                    swiperRef.current?.slidePrev()
                                                                }}/>
                <div className={styles.carouselWrapper}>
                    <Swiper
                        slidesPerView={5.5}
                        slidesPerGroup={1}
                        spaceBetween={24}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        loop={false}
                        className={styles.swiper}
                    >
                        {pijamas.filter(p => p.favorite == true).map((pijama) => (
                            <SwiperSlide key={pijama.id}>
                                <Link to={`/individual/${pijama.id}`} style={{cursor: "pointer", textDecoration: "none"}}>
                                    <Card id={pijama.id} name={pijama.name} price={pijama.price} image={pijama.image} favorite={pijama.favorite} onSale={pijama.onSale} salePercent={pijama.salePercent} menor={true} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {pijamas.length > 5 ? (<div className={styles.fadeRight}></div>) : null}
                    
                </div>

                <img src={setadireita} alt="Anterior" className={styles.setas} onClick={() => {
                                                                    swiperRef.current?.slideNext()
                                                                }}/>
            </div>
        </>
    )
}