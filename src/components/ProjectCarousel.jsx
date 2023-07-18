import { Swiper, SwiperSlide } from "swiper/react";

// css
import { carouselData } from "@/api/carouselData";
import "swiper/css";
import "swiper/css/mousewheel";
import { Mousewheel } from "swiper/modules";
import HomeSlideItem from "./HomeSlideItem";
const ProjectCarousel = () => {
  return (
    <Swiper
      modules={[Mousewheel]}
      slidesPerView={2}
      spaceBetween={15}
      mousewheel={true}
      className="h-32 sm:h-60 lg:h-96"
      loop={true}
    >
      {carouselData.map((items, i) => (
        <SwiperSlide key={i} onS className="h-full w-full">
          <HomeSlideItem data={items} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectCarousel;
