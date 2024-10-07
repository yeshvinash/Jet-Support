import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import {
  JSButton,
  CustomSlider,
  WorkCard,
  ImageSlider,
  Timeline,
  HelpCard,
  StandOutCard,
  ContactUs,
  VerticalSlider,
  ServicesCard,
} from "../../../components";
import {
  RealEstateAppFeaturProject,
  SVGIcons,
  IndustryAppDevelopement,
} from "../../../utils";
import MobileApplication from "../../../assets/images/industry/mobile-application.png";
import Globalisation from "../../../assets/images/industry/globalisation.png";
import SupportAndMaintenance from "../../../assets/images/industry/support-and-maintenance.png";
import ProcessAutomation from "../../../assets/images/industry/process-automation.png";
import WebsiteApplication from "../../../assets/images/industry/website-application.png";
import WebsiteDesign from "../../../assets/images/industry/website-design.png";
import Industry from "../../../assets/images/industry/industry.jpg";
import PurpleEcommerceWebsite from "../../../assets/images/work-cards/purple-card.png";
import GreenEcommerceWebsite from "../../../assets/images/work-cards/green-card.png";
import DatingAppDev from "../../../assets/images/industry/dating-app-development.png";
import {
  IosAppDevProcess,
  StandOutData,
  HomeTestimonials,
} from "../../../utils/data";
import "./Industry.css";

export const PropertyAppDevelopment = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content md spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">Property App</span> Development
              </h2>

              <p className="offwhite fw-light mb-6">
                Design, when done with the aim of creating a brand’s unique
                identity becomes more than just an exercise of creating a pretty
                combination of colours and text. Every colour, every element,
                every word, and even every dot and blank space needs to have a
                purpose to serve.
              </p>

              <JSButton variant={"primary-bordered"} icon={SVGIcons.ArrowRight}>
                Get Started
              </JSButton>
            </div>
          </Container>
        </main>
      </section>

      <section className="spacing-top-lg spacing-bottom-lg">
        <Container>
          <div className="mb-5 pb-2">
            <h2 className="text-center mb-5 development-services-title mx-auto pb-2">
              What we offer?
            </h2>
            <p className="fw-normal text-center mx-auto development-services-description mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
          <div className="development-services-card-grid">
            <div className="development-services-card-1 development-services-col">
              <ServicesCard
                img={MobileApplication}
                imgname="back-end-web-development"
                title="Mobile Application"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offbluelight"
                ImageSm
              />
              <ServicesCard
                img={ProcessAutomation}
                imgname="front-end-web-development"
                title="Process Automation"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="bluedark"
                ImageSm
              />
            </div>
            <div className="development-services-card-2 development-services-col">
              <ServicesCard
                img={Globalisation}
                imgname="full-stack-web-development"
                title="Globalisation"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offnavyblue"
                ImageSm
              />
              <ServicesCard
                img={WebsiteApplication}
                imgname="full-stack-web-development"
                title="Website Application"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="green"
                ImageSm
              />
            </div>
            <div className="development-services-card-3 development-services-col">
              <ServicesCard
                img={SupportAndMaintenance}
                imgname="full-stack-web-development"
                title="Support and Maintenance"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="orange"
                ImageSm
              />
              <ServicesCard
                img={WebsiteDesign}
                imgname="full-stack-web-development"
                title="Website design"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offgray"
                ImageSm
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="spacing-bottom-lg">
        <Container>
          <div className="mb-5 pb-5">
            <h2 className="text-center mb-5 pb-5 development-services-title mx-auto pb-2 text-capitalize">
              Proven success in Property industry
            </h2>
            <p className="fw-normal text-center mx-auto development-services-description mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
          <div className="industry-content-wrap">
            <div className="industry-content-wrap-inner">
              <div className="industry-content-img">
                <Image src={Industry} alt="Industry" />
              </div>
              <div className="industry-content-list-wrap">
                <ul className="custom-lists  grid mt-4 pt-2 mb-5 pb-4">
                  <li className="custom-list">
                    Google’s design sprint methodology
                  </li>
                  <li className="custom-list">
                    Industry partnership with integrators (corelogic, archistar
                    etc)
                  </li>
                  <li className="custom-list">
                    Design and technology research
                  </li>
                  <li className="custom-list">
                    Knowledge of regulations and compliance requirements
                  </li>
                </ul>
                <div className="mt-auto">
                  <JSButton variant={"primary"}>Book A Session</JSButton>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="spacing-bottom-lg">
        <Container>
          <Row>
            <Col xl={10} className="offset-2">
              <h2 className="dev-process-title mb-5 text-capitalize">
                Key Steps in Proptech App Development Process
              </h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image src={DatingAppDev} alt="ios-app-process" fluid />
              </div>
            </Col>
            <Col xl={10}>
              <Timeline timelineData={IosAppDevProcess} />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-offblack spacing-top-lg spacing-bottom-lg">
        <section className="ios-app-help-wrap">
          <Container>
            <div className="section-title text-center">
              <h2 className="white mb-3 text-capitalize">
                How can we help with you?
              </h2>
              <p className="fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div className="how-we-help-wrap">
              {IndustryAppDevelopement.map((item) => {
                return (
                  <HelpCard
                    key={item.id}
                    color={item.color}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                  />
                );
              })}
            </div>
          </Container>
        </section>
      </section>

      <section className="featured-project bg-offblack  spacing-bottom-lg">
        <Container>
          <h2 className="text-white text-center">Featured Project</h2>
          <VerticalSlider verticalSliderData={RealEstateAppFeaturProject} />
        </Container>
      </section>

      <section className="bg-indigo spacing-top-lg spacing-bottom-lg">
        <section className="spacing-bottom-lg">
          <Container>
            <h2 className="white mb-5 pb-5 text-center text-capitalize">
              Why we stand out
            </h2>
            <StandOutCard StandOutData={StandOutData} />
          </Container>
        </section>
        <section className="spacing-bottom-lg">
          <h2 className="text-center fw-bold mb-5 pb-5 white text-capitalize">
            What our clients are saying
          </h2>
          <div>
            <Container>
              <CustomSlider customSliderData={HomeTestimonials} />
            </Container>
          </div>
        </section>
        <section>
          <h2 className="mb-5 pb-5 white text-center text-capitalize">
            Global Leader in Mobile App Development for Construction industry
          </h2>
          <ImageSlider />
        </section>
      </section>

      <section className="spacing-top-lg spacing-bottom-sm">
        <Container>
          <h2 className="text-center mb-6">Our Latest Work</h2>
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
      <ContactUs />
    </>
  );
};
