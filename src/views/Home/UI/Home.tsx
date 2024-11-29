"use client"
import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import {Swiper as Noobikk, SwiperRef, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
export const Home = () => {
  const [autoplay , setAutoplay] = useState(false)

  const sliderRef = useRef<SwiperRef | null>(null)
  useEffect( () => {
    if (autoplay){
        const id = setInterval( () => {
            sliderRef.current?.swiper.slideNext()
        } , 1000)
        return () => {
            clearInterval(id)
        }
    }
    else{

    }

  } , [autoplay] )
  return (
    <section className="home">
      <div className="container">
        <div className="home__mblock">
          <h1 className="home__h1">Олечка самая</h1>
          <Noobikk
            ref={sliderRef}
            className="my-swiper"
            modules={[Navigation]}
            centeredSlides={true}
            style={{
                height : "clamp(2.063rem, 0.875rem + 5.28vw, 5.625rem)",
                overflowY : "hidden"
            }}
            effect="cube"
            direction="vertical"
            loop={true}
            slidesPerView={1}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
          >
            <SwiperSlide>
                <h1 className="home__h1 q">великолепная</h1>
            </SwiperSlide>
            <SwiperSlide>
              <h1 className="home__h1 q">безупречная</h1>
            </SwiperSlide >
            <SwiperSlide>
              <h1 className="home__h1 q">чудесная</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1 className="home__h1 q">потрясающая</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1 className="home__h1 q">божественная</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1 className="home__h1 q">лучшая</h1>
            </SwiperSlide>
            <SwiperSlide>
                <h1 className="home__h1 q">восхитительная</h1>
            </SwiperSlide>
            
          </Noobikk>
        </div>
        <div className="home__buttons-block">
            <button className="next green-button">Еще!</button>
            <button onClick={() => {setAutoplay(!autoplay)}} className="grey-button">{!autoplay ? "Автопроигрыватель!" : "Стоп!"}</button>
        </div>
      </div>
    </section>
  );
};
