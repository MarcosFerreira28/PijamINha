import Header2 from "../../Components/Header-2";
import setaesquerda from "../../Assets/setaesquerda.svg";
import setadireita from "../../Assets/setadireita.svg";

import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import styles from"./styles.module.css";
import axios from "axios";
import type { Pijama } from "../../Types/Pijama";

export default function Favoritos() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

    const [pijamas, setPijamas] = useState<Pijama[]>([]);

    useEffect(() => {
        axios.get("http://localhost:3333/pajamas")
        .then(response => setPijamas(response.data))
        .catch(error => console.error("Erro ao buscar pijamas:", error));
    }, [])
    
    useEffect(() => {
        if (swiperInstance && prevRef.current && nextRef.current && (swiperInstance.params.navigation.prevEl !== prevRef.current || swiperInstance.params.navigation.nextEl !== nextRef.current)) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance, prevRef, nextRef]);
        
    return (
        <> 
            <Header2 />
            <div className={styles.favoritosContainer}>
                
                <img src={setaesquerda} alt="Anterior" ref={prevRef} className={styles.setas} />
                <div className={styles.carouselWrapper}>
                    <Swiper
                        modules={[Navigation]}
                        slidesPerView={5.5}
                        slidesPerGroup={1}
                        spaceBetween={24}
                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                        onSwiper={setSwiperInstance}
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

                    <div className={styles.fadeRight}></div>
                </div>

                <img src={setadireita} alt="Próximo" ref={nextRef} className={styles.setas} />
            </div>
        </>
    )
}