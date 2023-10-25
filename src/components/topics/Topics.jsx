import React from 'react'
import './Topics.css'
import { useLocation } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import { Navigation } from "swiper";8

import banner1 from '../../assets/one.webp'
import banner2 from '../../assets/two.webp'
import banner3 from '../../assets/three.webp'
import banner4 from '../../assets/002.webp'
import banner5 from '../../assets/003.webp'
import banner6 from '../../assets/004.webp'
import banner7 from '../../assets/005.webp'
import banner8 from '../../assets/006.webp'
import banner9 from '../../assets/007.webp'


function Topics() {
  const { pathname } = useLocation()
  if (pathname.includes("/service")) {
      return <></>
  }
  if (pathname.includes("/traning")) {
    return <></>
}
if (pathname.includes("/product")) {
  return <></>
}
  return (
    <div className='topics'>
     <div className="slider__container">
        <Swiper navigation={false}  className="mySwiper">
          <SwiperSlide>
            <img src={banner1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={banner8} alt="" />
          </SwiperSlide>
      
          <SwiperSlide>
            <img src={banner9} alt="" />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  )
}

export default Topics