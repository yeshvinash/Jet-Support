import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { TestimonialCard } from "../TestimonialCard/TestimonialCard";
import { JSTestimonialCard } from "../JSTestimonialCard/JSTestimonialCard";
import "./CustomSlider.css";

import ArrowIcon from "../../assets/images/icons/arrow-small-right.svg";
export const CustomSlider = ({ customSliderData }) => {
  return (
    <>
      <div className="position-relative custom-swiper-wrapper">
        <div className="custom-prev">
          <img src={ArrowIcon} />
        </div>
        <Swiper
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Pagination, Navigation]}
          className="custom-slider"
          slidesPerView={2}
          grabCursor={true}
          speed={1000}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          slidesPerGroup={2}
          spaceBetween={70}
          pagination={{ clickable: true }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 1.3,
              slidesPerGroup: 1,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 40,
            },
          }}
        >
          {customSliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <JSTestimonialCard
                key={item.id}
                color={item.color}
                name={item.name}
                picture={item.picture}
                review={item.review}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-next">
          <img src={ArrowIcon} />
        </div>
      </div>
    </>
  );
};
