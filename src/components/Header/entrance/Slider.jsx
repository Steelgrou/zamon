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
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide className='istanbul'><img src={istanbul} alt="" /></SwiperSlide>
            <SwiperSlide><img src={istanbul} alt="" /></SwiperSlide>
            <SwiperSlide><img src={istanbul} alt="" /></SwiperSlide>
            <SwiperSlide><img src={istanbul} alt="" /></SwiperSlide>
            ...
        </Swiper>
    )
}
