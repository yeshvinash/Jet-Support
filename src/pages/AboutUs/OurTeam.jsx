import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { JSButton, TeamCard } from "../../components";
import { SVGIcons, TeamCardData, CoreTeamData } from "../../utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import TeamImg from "../../assets/images/team/team.jpg";
import TeamImg1 from "../../assets/images/team/core-team/member-1.jpg";
import RobinWilliams from "../../assets/images/team/robin-williams.jpg";
import OurTeamImg2 from "../../assets/images/team/our-team-img-2.jpg";
export const OurTeam = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-sm text-center">
              <h2 className="ice mb-6">
                Our <span className="gradient-text">Team</span>
              </h2>
              <p className="offwhite fw-light mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <JSButton variant={"primary-bordered"} icon={SVGIcons.ArrowRight}>
                Get Started
              </JSButton>
            </div>
            <div className="out-team-hero-img">
              <img src={TeamImg} alt="team" className="d-block" />
            </div>
          </Container>
        </main>
      </section>
      <section className="our-team-about spacing-top-lg spacing-bottom-lg">
        <Container>
          <Row>
            <Col lg="6" className="our-team-img-col">
              <Row>
                <Col lg="6">
                  <div className="d-flex d-lg-block flex-column flex-sm-row mb-md-0 mb-6 pb-md-0 pb-5 ">
                    <div className="our-team-about-img-wrapper">
                      <div className="mb-5 pb-3">
                        <div className="our-team-about-container">
                          <img src={RobinWilliams} alt="robin-williams" />
                        </div>
                      </div>
                      <h6 className="fw-normal d-none d-lg-block">
                        Robin Williams
                      </h6>
                    </div>
                    <div className="our-team-about-content d-block d-lg-none">
                      <div className="d-flex align-items-center mb-3 flex-column flex-lg-row">
                        <span className="h4 mb-2 custom-text fw-medium d-block w-100 text-start">
                          {" "}
                          Robin Williams
                        </span>
                        <span className="h6 custom-text-circle mb-0 custom-text offgray fw-medium w-100 text-start d-block">
                          CEO & Founder
                        </span>
                      </div>
                      <p className="offgray fw-normal mb-5 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate{" "}
                      </p>
                      <div className="d-flex align-items-center">
                        <a
                          href="javascript:void(0)"
                          className="pe-5 line-height-0 link-gray social-icon-md"
                        >
                          {SVGIcons.Facebook}
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="pe-5 line-height-0 link-gray social-icon-md"
                        >
                          {SVGIcons.LinkedIn}
                        </a>
                        <span className="horizontal-line line-height-0"></span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg="6">
                  <div className="d-flex d-lg-block flex-column flex-sm-row">
                    <div className="our-team-about-img-wrapper our-team-about-spacing">
                      <div className="mb-5 pb-3">
                        <div className="our-team-about-container">
                          <img src={OurTeamImg2} alt="our-team-img-2" />
                        </div>
                      </div>
                      <h6 className="fw-normal d-none d-lg-block">
                        Morris Mcdonald
                      </h6>
                    </div>
                    <div className="our-team-about-content d-block d-lg-none">
                      <div className="d-flex align-items-center mb-3 flex-column flex-lg-row">
                        <span className="h4 mb-2 custom-text fw-medium d-block w-100 text-start">
                          {" "}
                          Morris Mcdonald
                        </span>
                        <span className="h6 custom-text-circle mb-0 custom-text offgray fw-medium w-100 text-start d-block">
                          Director & Founder
                        </span>
                      </div>
                      <p className="offgray fw-normal mb-5 pb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate
                      </p>
                      <div className="d-flex align-items-center">
                        <a
                          href="javascript:void(0)"
                          className="pe-5 line-height-0 link-gray social-icon-md"
                        >
                          {SVGIcons.Facebook}
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="pe-5 line-height-0 link-gray social-icon-md"
                        >
                          {SVGIcons.LinkedIn}
                        </a>
                        <span className="horizontal-line line-height-0"></span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col
              md="6"
              className="d-none d-lg-flex flex-column  our-team-about-gap"
            >
              <div className="our-team-about-content-flex our-team-about-spacing ">
                <div className="our-team-about-content">
                  <div className="d-flex align-items-center mb-3">
                    <span className="h4 mb-0 custom-text fw-medium">
                      {" "}
                      Robin Williams
                    </span>
                    <span className="h6 custom-text-circle mb-0 custom-text offgray fw-medium">
                      CEO & Founder
                    </span>
                  </div>
                  <p className="offgray fw-normal mb-5 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate{" "}
                  </p>
                  <div className="d-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="pe-5 line-height-0 link-gray social-icon-md"
                    >
                      {SVGIcons.Facebook}
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="pe-5 line-height-0 link-gray social-icon-md"
                    >
                      {SVGIcons.LinkedIn}
                    </a>
                    <span className="horizontal-line line-height-0"></span>
                  </div>
                </div>
              </div>
              <div className="our-team-about-content-flex">
                <div className="our-team-about-content">
                  <div className="d-flex align-items-center mb-3">
                    <span className="h4 mb-0 custom-text fw-medium">
                      {" "}
                      Morris Mcdonald
                    </span>
                    <span className="h6 custom-text-circle mb-0 custom-text offgray fw-medium">
                      Director & Founder
                    </span>
                  </div>
                  <p className="offgray fw-normal mb-5 pb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate
                  </p>
                  <div className="d-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="pe-5 line-height-0 link-gray social-icon-md"
                    >
                      {SVGIcons.Facebook}
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="pe-5 line-height-0 link-gray social-icon-md"
                    >
                      {SVGIcons.LinkedIn}
                    </a>
                    <span className="horizontal-line line-height-0"></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-indigo">
        <section className="spacing-top-lg spacing-bottom-sm">
          <Container>
            <h2 className="white text-center team-heading">
              Our Leadership Team
            </h2>
            <div className="team-card-main-wrapper">
              <TeamCard TeamCardData={TeamCardData} />
            </div>
          </Container>
        </section>
        <section className="spacing-bottom-lg spacing-top-sm">
          <h2 className="white text-center team-heading">Our core Team</h2>
          <div className="core-team-wrapper">
            <Swiper
              className=""
              slidesPerView={8}
              grabCursor={true}
              speed={1000}
              autoplay={true}
              spaceBetween={9}
              pagination={false}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
                },
                1280: {
                  slidesPerView: 8,
                },
              }}
            >
              {CoreTeamData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="core-team-img-container">
                    <img
                      src={item.img}
                      className="img-fluid d-block core-team-img"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </section>
    </>
  );
};
