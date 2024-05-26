import React from 'react'
// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import istanbul from '/istanbul.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation

            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

        >
            <SwiperSlide className='istanbul'><img src={istanbul} alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
            <SwiperSlide className='istanbul'><img src={istanbul} alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
            <SwiperSlide className='istanbul'><img src={istanbul} alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
            <SwiperSlide className='istanbul'><img src={istanbul} alt="" style={{ width: "100%", height: "100vh" }} /></SwiperSlide>
            ...
        </Swiper>
    )
}
