import React from "react";
import { Container, Image,} from "react-bootstrap";
import {
  JSButton,
  CustomSlider,
  ContactUs,
  TeamCard,
  CustomTab,
} from "../../components";
import {
  SVGIcons,
  TeamCardData,
  PartnerList,
} from "../../utils";
import {
  HomeTestimonials,
  AboutTabData,
} from "../../utils/data";
import Mission from "../../assets/images/icons/mission.png";
import Vision from "../../assets/images/icons/vision.png";
import MissionIcon from "../../assets/images/icons/mission-icon.svg";
import VisionIcon from "../../assets/images/icons/vision-icon.svg";
import WhoWeAre from "../../assets/images/team/6.jpg";
import "./AboutUs.css";

export const AboutUs = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content md spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">About</span> Us
              </h2>

              <p className="offwhite fw-light mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <JSButton variant={"primary-bordered"} icon={SVGIcons.ArrowRight}>
                Get Started
              </JSButton>
            </div>
          </Container>
        </main>
      </section>
      <section className="spacing-bottom-lg spacing-top-md mt-4 ">
        <Container>
          <div className="d-flex flex-wrap flex-lg-nowrap">
            <div className="who-we-are-content-wrap mt-5 order-2 order-lg-1">
              <h2 className="deepblue mb-4 pb-2">Who we Are</h2>
              <p className="gray fw-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </p>
              <div className="who-we-are-container">
                <div className="who-we-are-container-inner">
                  <div className="who-we-are-card-wrap deepblue">
                    <span className="d-block fw-regular number-wrap">320+</span>
                    <span className="d-block fw-light label-title-wrap">Employees</span>
                  </div>
                  <div className="who-we-are-card-wrap  deepblue">
                    <span className="d-block fw-regular number-wrap">440+</span>
                    <span className="d-block fw-light label-title-wrap">
                      Mobile Application Completed
                    </span>
                  </div>
                  <div className="who-we-are-card-wrap deepblue">
                    <span className="d-block fw-regular number-wrap">54+</span>
                    <span className="d-block fw-light label-title-wrap">
                      International Awards
                    </span>
                  </div>
                  <div className="who-we-are-card-wrap deepblue">
                    <span className="d-block fw-regular number-wrap">645+</span>
                    <span className="d-block fw-light label-title-wrap">Websites Complete</span>
                  </div>
                  <div className="who-we-are-card-wrap deepblue">
                    <span className="d-block fw-regular number-wrap">236+</span>
                    <span className="d-block fw-light label-title-wrap">Happy Clients</span>
                  </div>
                  <div className="who-we-are-card-wrap deepblue">
                    <span className="d-block fw-regular number-wrap">10+</span>
                    <span className="d-block fw-light label-title-wrap">
                      Countries Clients Served
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="who-we-are-img-wrap order-1 order-lg-2">
              <Image src={WhoWeAre} alt="WhoWeAre" />
            </div>
          </div>
        </Container>
      </section>
      <section className="spacing-bottom-lg">
        <Container>
          <div className="mission-content-wrap text-center">
            <h2 className="deepblue text-center mb-4 pb-2">Mission & Vision</h2>
            <p className="gray fw-regular mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate
            </p>
          </div>
          <div className="mission-card-box">
            <div className="mission-card white green position-relative">
              <div className="mission-card-header-title d-flex align-items-center">
                <div className="mission-card-icon">
                  <Image src={MissionIcon} alt="mission" />
                </div>
                <div>
                  <span className="d-block h3 small white fw-600 mb-0">
                    Our Mission
                  </span>
                </div>
              </div>
              <p className="mb-0 fw-regular mt-5 pt-1">
                At Allied Technologies, our main goal is to help businesses of
                all sizes achieve business growth. We believe that sustainable
                growth starts with a strong digital presence and the right
                marketing strategies. Having this in mind, we work closely with
                our customers to understand their goals and needs, enabling us
                to build the right products and campaigns tailor-fitted to their
                brand requirements.
              </p>
              <Image src={Mission} alt="Mission" className="mission-card-img" />
            </div>
            <div className="mission-card white purple position-relative">
              <div className="mission-card-header-title d-flex align-items-center">
                <div className="mission-card-icon">
                  <Image src={VisionIcon} alt="mission" />
                </div>
                <div>
                  <span className="d-block h3 small white fw-600 mb-0">
                    Our Vision
                  </span>
                </div>
              </div>
              <p className="mb-0 fw-regular mt-5 pt-1">
                Our vision is to become the leading all-in-one web agency that
                will drive growth and success for businesses around the world.
                Through our end-to-end web and digital solutions, we aim to
                transform our clients’ vision into reality, be it a start-up
                company or an enterprise. We believe that if we’re able to do
                this, we’re doing everything right.
              </p>
              <Image src={Vision} alt="Mission" className="mission-card-img" />
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-offblack spacing-top-lg spacing-bottom-lg">
        <section className="bg-offblack">
          <section className="spacing-bottom-lg">
            <Container>
              <h2 className="text-center white fw-bold mb-5 pb-5">
                Winning Awards
              </h2>
              <CustomTab customTabData={AboutTabData} />
            </Container>
          </section>
          <section>
            <Container>
              <div className="d-flex justify-content-between  spacing-bottom-sm mb-4">
                <h2 className="white mb-0">Our Partners</h2>
                <JSButton variant={"primary-bordered"}>View More</JSButton>
              </div>
              <div className="our-clients-wrap justify-content-center">
                {PartnerList.map((partnerItem, index) => {
                  return (
                    <div key={index}>
                      <div className="our-clients-item-box">
                        <img src={partnerItem.img} alt={partnerItem.alt} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        </section>
      </section>
      <section className="bg-indigo spacing-top-lg spacing-bottom-lg">
        <section className="spacing-bottom-lg">
          <Container>
            <h2 className="white text-center team-heading">
              Our award winning team
            </h2>
            <div className="team-card-main-wrapper">
              <TeamCard TeamCardData={TeamCardData} />
            </div>
          </Container>
        </section>
        <section>
          <h2 className="text-center fw-bold mb-5 pb-5 white text-capitalize">
            What our clients are saying
          </h2>
          <div>
            <Container>
              <CustomSlider customSliderData={HomeTestimonials} />
            </Container>
          </div>
        </section>
      </section>
      <ContactUs />
    </>
  );
};
