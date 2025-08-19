import Header2 from "../../Components/Header-2";
import setaesquerda from "../../Assets/setaesquerda.png";
import setadireita from "../../Assets/setadireita.png";

import '../../../node_modules/swiper/swiper.css'
import '../../../node_modules/swiper/modules/pagination.min.css'
import '../../../node_modules/swiper/modules/navigation.min.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { useEffect, useRef, useState } from "react";
import Card from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import styles from"./styles.module.css";

export default function Favoritos() {
    
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState<any>(null);

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
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama feminino longo - estampa poá daksdajs ndna jsndjs najn dsjan jdn ajn" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama curto - estampa poá" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="nem pijama isso é" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama extra" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama extra" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama extra" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama extra" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama extra" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/cardInfo" style={{cursor: "pointer", textDecoration: "none"}}><Card name="Pijama extra" price={79.99} image="https://images.tcdn.com.br/img/img_prod/460977/pijama_macacao_kigurumi_adulto_unissex_stitch_lilo_eamp_stitch_disney_mkp_119771_1_ccb98b402f9860e36ae7c93ee82387c7.jpg" favorite={true} on_sale={true} sale_percent={10} menor={true} /></Link>
                        </SwiperSlide>
                    </Swiper>

                    <div className={styles.fadeRight}></div>
                </div>

                <img src={setadireita} alt="Próximo" ref={nextRef} />
            </div>
        </>
    )
}