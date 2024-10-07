import { Col, Container, Image, Row } from "react-bootstrap";
import {
  JSButton,
  CustomSlider,
  WorkCard,
  ImageSlider,
  Timeline,
  HelpCard,
  ContactUs,
  StandOutCard,
  ServicesCard,
  JSAccordion,
  JSTab,
  AboutYourProject,
  WhatWeProvideTab,
  TechnologiesLists,
} from "../../components";
import GreenCard from "./../../assets/images/work-cards/green-card.png";
import AtlantisTechnology from "./../../assets/images/work-cards/atlantis-technology.png";
import DiscoverySession from "./../../assets/images/mobile-app-development/discovery-session.png";
import "./Services.css";
import DevOpsProcess from "../../assets/images/dev-ops-services/dev-ops-process.png";
import { DevOpsHelp, SVGIcons } from "./../../utils";
import {
  StandOutData,
  HomeTestimonials,
  DevOpsFaq,
  DevOpsProcessSteps,
} from "../../utils/data";
import { Faq } from "./Faq/Faq";
import { Discovery } from "./Discovery/Discovery";
import CIConfiguration from "../../assets/images/dev-ops-services/CI-Configuration.png";
import ContainerPlatforms from "../../assets/images/dev-ops-services/container-platforms.png";
import ComputingStorage from "../../assets/images/dev-ops-services/computing-storage.png";
import AutomatedTesting from "../../assets/images/dev-ops-services/automated-testing.png";
import Alert from "../../assets/images/dev-ops-services/alert.png";
import SourceCodeControl from "../../assets/images/dev-ops-services/source-code-control.png";
import DevOpsImg from "../../assets/images/dev-ops-services/dev-ops.jpg";

export const DevOps = () => {
  const WhatWeProvideDevOps = {
    img: DevOpsImg,
    description: [
      "Development and operations, or DevOps, combines two IT specialities. It is a way of thinking and a methods for boosting cooperation, communication, and speed.",
      "DevOps combines development methods with operations disciplines to improve software development and deployment, as well as IT infrastructure automation. Agile in practise is fundamentally based on DevOps principles. Teams can leverage agile techniques to shorten delivery timelines with DevOps at every level of a project, while also enhancing security and scalability as they progress through the development phases.",
    ],
  };

  const JSTabData = [
    {
      title: "What is DevOps?",
      content: <WhatWeProvideTab WhatWeProvideData={WhatWeProvideDevOps} />,
    },
    {
      title: "Real DevOps results",
      content: "hello",
    },
    {
      title: "The matrix of DevOps",
      content: "hy",
    },
  ];

  return (
    <>
      {" "}
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">DevOps</span>
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
          </Container>
        </main>
      </section>
      <section className="spacing-top-lg spacing-bottom-sm">
        <Container>
          <div className="mb-5 pb-3">
            <h2 className="text-center mb-3 development-services-title mx-auto">
              Our DevOps Services
            </h2>
            <p className="fw-normal text-center mx-auto development-services-description mb-5 pb-5">
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
          <div className="development-services-card-grid">
            <div className="development-services-card-1 development-services-col">
              <ServicesCard
                img={CIConfiguration}
                imgname="back-end-web-development"
                title="DevOps CI/CD & Configuration"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offblue"
                ImageSm
              />
              <ServicesCard
                img={ContainerPlatforms}
                imgname="front-end-web-development"
                title="Container Platforms"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offgray"
                ImageSm
              />
            </div>
            <div className="development-services-card-2 development-services-col">
              <ServicesCard
                img={ComputingStorage}
                imgname="full-stack-web-development"
                title="Computing & Storage"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="pink"
                ImageSm
              />
              <ServicesCard
                img={AutomatedTesting}
                imgname="full-stack-web-development"
                title="Automated Testing"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="green"
                ImageSm
              />
            </div>
            <div className="development-services-card-3 development-services-col">
              <ServicesCard
                img={Alert}
                imgname="full-stack-web-development"
                title="Monitoring, Alerting, & Incident Response"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offyellow"
                ImageSm
              />
              <ServicesCard
                img={SourceCodeControl}
                imgname="full-stack-web-development"
                title="Source Code Control"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offbluelight"
                ImageSm
              />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="mb-6 pb-5 text-center dev-ops-technologies-title-wrapper">
            <h2 className="mb-3 dev-ops-technologies-title text-center mx-auto">
              Our expertise with DevOps technologies
            </h2>
            <p className="mb-0 dev-ops-technologies-description mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud .{" "}
            </p>
          </div>
          <TechnologiesLists />
        </Container>
      </section>
      <section className="spacing-top-sm spacing-bottom-md">
        <Container>
          <Row>
            <Col xl={10} className="offset-2">
              <h2 className="dev-process-title mb-5">DevOps Process</h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image src={DevOpsProcess} alt="dev-ops-process" fluid />
              </div>
            </Col>
            <Col xl={10}>
              <Timeline timelineData={DevOpsProcessSteps} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkblue spacing-top-md spacing-bottom-md">
        <AboutYourProject
          title="Tell us a bit about your DevOps project"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
      </section>
      <section className="bg-offblack spacing-top-md spacing-bottom-lg">
        <section>
          <Container>
            <div className="section-title text-center">
              <h2 className="white mb-3">How can we help you?</h2>
              <p className="fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div className="how-we-help-wrap">
              {DevOpsHelp.map((item) => {
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
        <section className="spacing-top-lg">
          <Discovery discoveryHeroImg={DiscoverySession} />
        </section>
      </section>
      <section className="bg-indigo spacing-top-lg spacing-bottom-md">
        <section className="spacing-bottom-lg">
          <Container>
            <h2 className="white mb-5 pb-5 text-center">Why we stand out</h2>
            <StandOutCard StandOutData={StandOutData} />
          </Container>
        </section>
        <section className="spacing-bottom-sm">
          <Container>
            <h2 className="text-center fw-bold mb-5 pb-5 white">
              What We Provide
            </h2>
            <JSTab JSTabData={JSTabData} />
          </Container>
        </section>
        <section className="spacing-bottom-lg spacing-top-sm">
          <h2 className="text-center fw-bold mb-5 pb-5 white">
            What our clients are saying
          </h2>
          <div>
            <Container>
              <CustomSlider customSliderData={HomeTestimonials} />
            </Container>
          </div>
        </section>

        <section>
          <h2 className="mb-5 pb-5 white text-center">
            Our Web Development clients
          </h2>
          <ImageSlider />
        </section>
        <section className="spacing-top-lg">
          <Faq JAccordionData={DevOpsFaq} />
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
