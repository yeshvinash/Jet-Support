import {
  JSButton,
  ExtensionCard,
  CustomAccordion,
  CustomTab,
  WorkCard,
  TestimonialCard,
  JSTestimonialCard,
} from "../../components";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { SVGIcons } from "./../../utils";
import HeroImage from "./../../assets/images/hero.png";
import AndroidAward from "./../../assets/images/icons/android-awards.png";
import AwardWinningTeam from "./../../assets/images/icons/team-avatars.png";
import PurpleEcommerceWebsite from "./../../assets/images/work-cards/purple-card.png";
import GreenEcommerceWebsite from "./../../assets/images/work-cards/green-card.png";
import CurveLine from "../../assets/images/icons/curve-line.svg";
import JessicaFilip from "../../assets/images/icons/avatar/tiffany-palmer.png";
import {
  HomeTestimonials,
  clientLogo,
  ExtensionTeamData,
  AwardWinningTeamData,
  WinningAwardsTabData,
} from "../../utils/data";
import "./Home.css";
import "swiper/css/pagination";

export function Home() {
  return (
    <>
      <section className="wave-background">
        <main className="header-spacing banner home-banner bg-offblack">
          <Container>
            <div className="banner-content text-center">
              <h1 className="ice mb-6 position-relative">
                We Build{" "}
                <span className="gradient-text" data-text="Digital">
                  Digital
                </span>{" "}
                Experience{" "}
                <img
                  src={CurveLine}
                  alt="curve-line"
                  className="curve-line-img"
                />
              </h1>

              <p className="offwhite fw-light mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>

              <JSButton variant={"primary"} icon={SVGIcons.ArrowRight}>
                Get Started
              </JSButton>
            </div>
            <div className="home-hero-apps">
              <div className="hero-app-awards android-award">
                <Image src={AndroidAward} alt="No. 1 Apps" fluid />
                <div className="team-number-wrap">
                  <h3 className="white">45+</h3>
                  <p className="p-sm fw-light">No.1 Apps</p>
                </div>
              </div>

              <Image
                src={HeroImage}
                alt="Last year's report"
                width={795}
                className="hero-app-main"
              />

              <div className="hero-app-awards team-award">
                <Image src={AwardWinningTeam} alt="Award winning team" fluid />
                <div className="team-number-wrap">
                  <h3 className="white">23+</h3>
                  <p className="p-sm fw-light">Award winning team</p>
                </div>
              </div>
            </div>
          </Container>
        </main>
      </section>
      <section className="bg-offblack spacing-top-xs spacing-bottom-xs">
        <Swiper
          className="client-swipper-slider"
          slidesPerView={5}
          grabCursor={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            575: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 18,
            },
            992: {
              spaceBetween: 20,
            },
            1280: {
              slidesPerView: 5,
              slidesPerGroup: 5,
              spaceBetween: 40,
            },
          }}
        >
          {clientLogo.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item.img}
                alt={item.name}
                className="client-logo text-center mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="spacing-top-lg">
        <Container>
          <div className="extension-content">
            <Row>
              <Col lg={6}>
                <h2 className="extension-title">
                  We work as an extension of your team
                </h2>
              </Col>
              <Col lg={6}>
                <div className="ms-lg-auto  extension-description">
                  <p className="mb-5 pb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamc
                  </p>
                  <JSButton variant={"primary"} icon={SVGIcons.ArrowTopRight}>
                    Learn More
                  </JSButton>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Swiper
              className="extension-swipper-slider"
              spaceBetween={40}
              slidesPerView={3}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              grabCursor={true}
              autoplay={{ delay: 3000 }}
              slidesPerGroup={3}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                },
                575: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 18,
                },
                992: {
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 40,
                },
              }}
            >
              {ExtensionTeamData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ExtensionCard
                    title={item.title}
                    description={item.description}
                    extensionImg={item.extensionImg}
                    extensionImgAlt={item.extensionImgAlt}
                    backgroundColor={item.backgroundColor}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </section>
      <section className="spacing-top-sm spacing-bottom-lg">
        <Container>
          <h2 className="text-center mb-6">Our Great Work</h2>

          <div className="work-grid">
            <WorkCard
              link="/"
              picture={PurpleEcommerceWebsite}
              variant={"purple"}
            >
              <h3 className="white fw-medium mb-3">
                E-commerce <br /> Mobile
              </h3>
              <p className="mb-0 p-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </WorkCard>
            <WorkCard
              link="/"
              variant={"green"}
              picture={GreenEcommerceWebsite}
            >
              <h3 className="white fw-medium mb-3">
                E-commerce <br /> Mobile
              </h3>
              <p className="mb-0 p-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </WorkCard>
          </div>

          <div className="text-center">
            <JSButton variant={"primary"} icon={SVGIcons.ArrowTopRight}>
              View All Projects
            </JSButton>
          </div>
        </Container>
      </section>
      <section className="bg-offblack spacing-top-lg spacing-bottom-md">
        <Container>
          <h2 className="text-center white fw-bold mb-5 pb-4">
            Working Process
          </h2>
          <CustomAccordion />
        </Container>
      </section>
      <section className="bg-offblack  spacing-bottom-lg">
        <Container>
          <h2 className="text-center white fw-bold mb-5 pb-5">
            Winning Awards
          </h2>
          <CustomTab customTabData={WinningAwardsTabData} />
        </Container>
      </section>
      <section className="client-testimonials spacing-top-lg bg-indigo">
        <Container>
          <div>
            <h2 className="text-center white mb-0">
              What our clients are saying
            </h2>
          </div>
          <div className="square-card-row spacing-top-sm">
            {HomeTestimonials.map((item, index) => (
              <div className="square-card-col">
                <JSTestimonialCard
                  key={item.id}
                  color={item.color}
                  name={item.name}
                  picture={item.picture}
                  review={item.review}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="award-winning-team">
        <Container>
          <h2 className="text-center fw-bold white mb-5 pb-5">
            Our Award Winning Team
          </h2>
          <div className="award-winning-team-grid">
            {AwardWinningTeamData.map((item, index) => (
              <div className="text-center" key={index}>
                <div className="award-winning-team-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <h4 className="fw-medium mb-2 small">{item.title}</h4>
                <h6 className="fw-normal offgray ">{item.description}</h6>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="spacing-top-lg spacing-bottom-xl">
        <Container>
          <div className="text-center">
            <h2 className="text-center fw-bold mb-3">
              Choosing An App Developer?
            </h2>
            <p className="fw-normal mb-5 pb-5 choosing-app-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamc
            </p>
            <JSButton variant={"primary"} icon={SVGIcons.ArrowTopRight}>
              Get in Touch
            </JSButton>
          </div>
        </Container>
      </section>
    </>
  );
}
