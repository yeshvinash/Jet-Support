import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import EmpoweredMotherHood from "../../assets/images/icons/client/empowered-mother-hood.svg";
import Snewpit from "../../assets/images/icons/client/snewpit.svg";
import Beforepay from "../../assets/images/icons/client/beforepay.svg";
import NewsCrop from "../../assets/images/icons/client/news-crop.svg";
import CoPosit from "../../assets/images/icons/client/co-posit.svg";
import { Container } from "react-bootstrap";
import "./ImageSlider.css";
export const ImageSlider = () => {
  const clientLogo = [
    {
      img: EmpoweredMotherHood,
      name: "empowered-mother-hood",
    },
    {
      img: Snewpit,
      name: "snewpit",
    },
    {
      img: Beforepay,
      name: "beforepay",
    },
    {
      img: NewsCrop,
      name: "news-crop",
    },
    {
      img: CoPosit,
      name: "co-posit",
    },
    {
      img: EmpoweredMotherHood,
      name: "empowered-mother-hood",
    },
    {
      img: Snewpit,
      name: "snewpit",
    },
  ];
  return (
    <div className="img-slider-wrapper">
      <Container>
        <Swiper
          navigation={false}
          className="img-slider"
          slidesPerView={3}
          grabCursor={true}
          autoplay={{ delay: 3000 }}
          slidesPerGroup={1}
          spaceBetween={40}
          pagination={false}
          autoHeight={true}
          breakpoints={{
            320: {
              slidesPerView: 1.5,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 18,
            },
            992: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 3,
              slidesPerGroup: 2,
              spaceBetween: 40,
            },
          }}
        >
          {clientLogo.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt={`${item.name}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};
