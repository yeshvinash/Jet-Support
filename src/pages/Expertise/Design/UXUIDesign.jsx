import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";
import {
  JSButton,
  ServicesCard,
  Timeline,
  AboutYourProject,
  WorkCard,
  ContactUs,
  StandOutCard,
  JSTab,
  WhatWeProvideTab,
  CustomSlider,
} from "../../../components";
import {
  SVGIcons,
  ApplicationDevelopmentProcessSteps,
  HomeTestimonials,
  StandOutData,
} from "../../../utils";
import WebDesignImg from "../../../assets/images/uxui-design/web-design-img.png";
import AppDesignImg from "../../../assets/images/uxui-design/app-design-img.png";
import BrandingImg from "../../../assets/images/uxui-design/branding-img.png";
import DesignSystemImg from "../../../assets/images/uxui-design/design-system-img.png";
import ApplicationDevelopmentProcessStepImg from "../../../assets/images/uxui-design/application-development-process-step-img.png";
import AtlantisTechnology from "../../../assets/images/work-cards/atlantis-technology.png";
import GreenCard from "../../../assets/images/work-cards/green-card.png";
import UxuiDesignImg from "../../../assets/images/uxui-design/uxui-design-img.jpg";
export const UXUIDesign = () => {
  const WhatWeProvideDevOps = {
    img: UxuiDesignImg,
    description: [
      "   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    ],
  };

  const JSTabData = [
    {
      title: "Our UX Design process is thorough and deep",
      content: <WhatWeProvideTab WhatWeProvideData={WhatWeProvideDevOps} />,
    },
    {
      title: "Design with your real customers in mind",
      content: "...",
    },
    {
      title: "Cross device design and usability testing",
      content: "...",
    },
  ];
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">UX/UI Design</span>
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
      <section className="spacing-top-lg spacing-bottom-sm">
        <Container>
          <div className="mb-5 pb-3">
            <h2 className="text-center mb-3 development-services-title mx-auto">
              Our Website Development Services
            </h2>
            <p className="fw-normal text-center mx-auto  development-services-description mb-5 pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </p>
            <div className="text-center">
              <JSButton variant={"primary"} icon={SVGIcons.ArrowTopRight}>
                Get a Quote
              </JSButton>
            </div>
          </div>
          <div className="development-services-card-grid development-services-card-grid-4">
            <div className="development-services-card-1">
              <ServicesCard
                img={WebDesignImg}
                imgname="back-end-web-development"
                title="Web design"
                serviceBackground="bg-orange"
                subDescription="Craft user-focused website design that captivate audience, improve user experience, and drive results."
                variant="redlight"
                ImageSm
              />
            </div>
            <div className="development-services-card-2">
              <ServicesCard
                img={AppDesignImg}
                imgname="back-end-web-development"
                title="App design"
                serviceBackground="bg-orange"
                subDescription="Ensure app success with our user-focused design principles that foster loyalty and retention."
                variant="blue"
                ImageSm
              />
            </div>
            <div className="development-services-card-3">
              <ServicesCard
                img={BrandingImg}
                imgname="back-end-web-development"
                title="Branding"
                serviceBackground="bg-orange"
                subDescription="Craft a memorable brand identity to inspire trust, foster loyalty, and drive customer engagement."
                variant="cyan"
                ImageSm
              />
            </div>
            <div className="development-services-card-4">
              <ServicesCard
                img={DesignSystemImg}
                imgname="back-end-web-development"
                title="Design system"
                serviceBackground="bg-orange"
                subDescription="Solidify your design language by utilizing our experts to create tailored systems for your brand."
                variant="darkyellow"
                ImageSm
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="spacing-top-sm spacing-bottom-md">
        <Container>
          <Row>
            <Col xl={10} className="offset-2">
              <h2 className="dev-process-title mb-5">
                Application Development Process
              </h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image
                  src={ApplicationDevelopmentProcessStepImg}
                  alt="application-development-process-step-img"
                  fluid
                />
              </div>
            </Col>
            <Col xl={10}>
              <Timeline timelineData={ApplicationDevelopmentProcessSteps} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkblue spacing-top-md spacing-bottom-md">
        <AboutYourProject
          title="Tell us a bit about your Ui project"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </section>
      <section className="bg-indigo spacing-top-lg spacing-bottom-md">
        <section className="spacing-bottom-sm">
          <Container>
            <h2 className="text-center fw-bold mb-5 pb-5 white">
              What We Provide
            </h2>
            <JSTab JSTabData={JSTabData} />
          </Container>
        </section>
        <section className="spacing-top-sm">
          <h2 className="text-center fw-bold mb-5 pb-5 white">
            What our clients are saying
          </h2>
          <div>
            <Container>
              <CustomSlider customSliderData={HomeTestimonials} />
            </Container>
          </div>
        </section>
      </section>
      <section className="spacing-top-lg spacing-bottom-sm">
        <Container>
          <h2 className="text-center mb-6 pb-5">Our Latest Work</h2>
          <div className="work-grid">
            <WorkCard link="/" picture={AtlantisTechnology} variant={"indigo"}>
              <h3 className="white fw-medium mb-3">
                Atlantis <br /> Technology
              </h3>
              <p className="mb-0 p-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </WorkCard>
            <WorkCard link="/" variant={"green"} picture={GreenCard}>
              <h3 className="white fw-medium mb-3">
                E-commerce <br /> Services Mobile
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
