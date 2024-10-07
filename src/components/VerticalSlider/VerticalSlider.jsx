import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Image } from "react-bootstrap";
import { JSButton } from "../JSButton/JSButton";
import ArrowIcon from "../../assets/images/icons/arrow-small-right.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./VerticalSlider.css";

export const VerticalSlider = ({ verticalSliderData }) => {
  const getDirection = () => {
    let windowWidth = window.innerWidth;
    let direction = windowWidth <= 1024 ? 'horizontal' : 'vertical';
    return direction;
  };

  const VerticalOptions = {
    direction: getDirection(),
    modules: [Pagination, Navigation],
    pagination: {
      el: ".custom-pagination",
      clickable: true,
      type: "fraction",
      formatFractionCurrent: function (number) {
        return "0" + number;
      },
      formatFractionTotal: function (number) {
        return "0" + number;
      },
    },
    navigation: { nextEl: ".custom-next", prevEl: ".custom-prev" }
  }

  return (
    <>
      <div className="featured-swiper-container">
        <div className="featured-swiper-wrap">
          <Swiper className="featureSwiper custom-vertical-swiper" onResize={(swiper) => swiper.changeDirection(getDirection())} {...VerticalOptions}>
            {verticalSliderData && verticalSliderData.map((item, index) => {
              return (
                <SwiperSlide key={index} id="hehe">
                  <div className="featured-slide-wrap">
                    <div className="featured-slide-left">
                      <div className="custom-pagination"></div>
                      <span className="featured-project-title d-block">
                        {item.title}
                      </span>
                      <p className="featured-project-des fw-light">
                        {item.description}
                      </p>
                      <JSButton variant={"primary"}>{item.btnText}</JSButton>
                    </div>
                    <div className="featured-slide-right">
                      <div className="feature-slide-img position-relative">
                        <Image src={item.picture} />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="featured-swiper-btn-wrap">
          <div className="custom-prev">
            <img src={ArrowIcon} />
          </div>
          <div className="custom-next">
            <img src={ArrowIcon} />
          </div>
        </div>
      </div >
    </>
  );
};
