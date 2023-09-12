import React from "react";
import ServiziItem from "./serviziItem";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Mousewheel, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Others = ({ others }) => {
  console.log(others);
  return (
    <Swiper
      spaceBetween={30}
      navigation={true}
      modules={[Navigation, Mousewheel, FreeMode]}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
    >
      <div className="flex ">
        {others?.map((el, i) => (
          <SwiperSlide key={i}>
            <ServiziItem
              img={el?.img}
              name={el?.name}
              link={el?.link}
              descrizione={el?.descrizione}
            />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Others;
