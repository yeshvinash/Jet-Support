import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { SVGIcons } from "../../utils";
import "./JSSwiper.css";
import "swiper/css";
import "swiper/css/navigation";

export const JSSwiper = ({ JSSwiperData }) => {
  return (
    <>
      <Swiper
        navigation={{
          prevEl: ".js-prev",
          nextEl: ".js-next",
        }}
        modules={[Navigation]}
        className="js-swipper"
      >
        {JSSwiperData.map((item, index) => (
          <SwiperSlide key={index}>
            <h5 className="js-swipper-description small white fw-light mb-0">
              {item.description}
            </h5>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="d-flex">
        <div className="js-prev me-5">{SVGIcons.ArrowRight}</div>
        <div className="js-next">{SVGIcons.ArrowRight}</div>
      </div>
    </>
  );
};
