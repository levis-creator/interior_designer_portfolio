"use client";

import { BsChevronDown } from "react-icons/bs";
import { carouselData } from "@/api/carouselData";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HomeSlideItem from "./HomeSlideItem";

// swiper css
import "swiper/css";
import "swiper/css/navigation";
import { content } from "@/api/content";
import { motion } from "framer-motion";
import Link from "next/link";

const HomeCarousel = () => {
  return (
    <div className="relative text-white">
      <Swiper
        className="h-screen"
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        loop={true}
      >
        {carouselData.map((items, i) => (
          <SwiperSlide key={i}>
            <HomeSlideItem data={items} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-20 z-10 w-full ">
        <p className="text-center text-lg italic mx-auto ">
          {content[0].carousel_text}
        </p>
      </div>
      <div className="text-3xl text-center w-full absolute bottom-0 z-10">
        <Link href={"#about"}>
        <motion.button
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{
            duration:1,
            ease:"easeIn",
            repeat:Infinity

          }}
          className=" mx-auto w-fit"
        >
          <BsChevronDown />
        </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCarousel;
