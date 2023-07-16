import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'


// css
import "swiper/css";
import { carouselData } from '@/api/carouselData';
import HomeSlideItem from './HomeSlideItem';
const ProjectCarousel = () => {
  return (
    <Swiper
     slidesPerView={2}
     spaceBetween={15}
     className='h-32 sm:h-60'
     loop={true}
     >
        {carouselData.map((items, i)=>(
            <SwiperSlide key={i} className='h-full w-full' ><HomeSlideItem data={items}/></SwiperSlide>
        ))}
       
      
    </Swiper>
  )
}

export default ProjectCarousel
