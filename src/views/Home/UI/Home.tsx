"use client"
import React, { useEffect, useRef, useState } from "react";
import "./styles.scss";
import {Swiper as Noobikk, SwiperRef, SwiperSlide} from "swiper/react"
import {Navigation} from "swiper/modules"
import { olya } from "../config/olya";
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
            effect={"cube"}
            direction="vertical"
            loop={true}
            slidesPerView={1}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
          >
            {olya.map( (e) => {
                return <SwiperSlide>
                    <h1 className="home__h1 q">{e}</h1>
                </SwiperSlide>
            })}
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
