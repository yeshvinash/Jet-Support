import React from "react";
import { Col, Container, Image, Row, Nav } from "react-bootstrap";
import "./AboutUs.css";
import { SVGIcons, OurProcessInitialsSteps } from "../../utils";
import {
  ContactUs,
  CustomTab,
  JSAccordion,
  JSButton,
  Timeline,
} from "../../components";
import DevelopmentScrumImg from "../../assets/images/our-process/development-scrum.png";
import UiUxImg from "../../assets/images/our-process/ui-ux-img.png";
import InitialsStepsImg from "../../assets/images/our-process/Initials-steps.png";
import Tab from "react-bootstrap/Tab";
import LaunchImg from "../../assets/images/our-process/launch-img.png";
export const OurProcess = () => {
  const customTabData = [
    {
      title: "Development",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
    {
      title: "Quality assurance",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ",
    },
  ];

  const DevelopmentUsingScrum = [
    {
      title: "The Daily Stand-up",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      title: "The Sprint",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      title: "The Sprint Review",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
    {
      title: "The Retrospective",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori",
    },
  ];

  const ReadyToDeliver = [
    {
      title: "Launch",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Post Launch",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  return (
    <>
      {" "}
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-sm text-center">
              <h2 className="ice mb-6">
                Our <span className="gradient-text">Process</span>
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
      <section className="spacing-top-sm spacing-bottom-md">
        <Container>
          <Row>
            <Col xl={10} className="offset-2 order-1">
              <h2 className="dev-process-title mb-5 text-center">
                Initials Steps{" "}
              </h2>
            </Col>
            <Col xl={2} className="order-2 order-xl-3">
              <div className="process-ils">
                <Image src={InitialsStepsImg} alt="initials-steps-img" fluid />
              </div>
            </Col>
            <Col xl={10} className="dev-ops-process-col order-3 order-xl-2">
              <Timeline timelineData={OurProcessInitialsSteps} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="spacing-top-md spacing-bottom-md bg-offblack">
        <Container>
          <div className="d-flex give-face-app-flex align-items-center">
            <div className="give-face-app-img">
              <img src={UiUxImg} alt="ui-ux" />
            </div>
            <div>
              <h2 className="mb-5 pb-5 text-white">Give a face to the app</h2>
              <div className="mb-5">
                <div className="d-flex align-items-center mb-3">
                  <span className="h6 custom-text-circle left mb-0 custom-text offgray fw-medium white">
                    2.0
                  </span>
                  <span className="h5 mb-0 custom-text fw-medium white">
                    UI design
                  </span>
                </div>
                <p className="offgray h6 fw-normal give-face-app-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate{" "}
                </p>
              </div>
              <div>
                <div className="d-flex align-items-center mb-3">
                  <span className="h6 custom-text-circle left mb-0 custom-text offgray fw-medium white">
                    2.1
                  </span>
                  <span className="h4 mb-0 custom-text fw-medium white">
                    UI design
                  </span>
                </div>
                <p className="offgray h6 fw-normal give-face-app-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-indigo spacing-top-lg">
        <Container>
          <section className="spacing-bottom-sm">
            <div className="pb-5">
              <h2 className="white mb-6 pb-5">Adding life in app</h2>
            </div>
            <CustomTab
              customTabData={customTabData}
              customClass="md"
              stepNumber="3"
            />
          </section>
          <section className="spacing-top-sm spacing-bottom-lg">
            <div className="development-scrum-title-wrapper">
              <h2 className="text-center mb-6  white development-scrum-title mx-auto">
                Development using SCRUM®
              </h2>
              <p className="fw-normal text-center development-scrum-sub-title mx-auto white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod
              </p>
            </div>
            <div className="development-scrum-flex">
              <div className="development-scrum-img-container">
                <img
                  src={DevelopmentScrumImg}
                  alt="development-scrum"
                  className="development-scrum-img"
                />
              </div>
              <div className="card-label-wrapper">
                {DevelopmentUsingScrum.map((item, index) => (
                  <div className="card-label" key={index}>
                    <h4 className="fw-medium white mb-2">{item.title}</h4>
                    <p className="white fw-light mb-0">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Container>
      </section>
      <section className="spacing-top-md spacing-bottom-md">
        <Container>
          <div className="d-flex launch-flex">
            <div className="launch-img-container">
              <img src={LaunchImg} alt="launch" />
            </div>
            <div className="js-primary-tab ready-to-deliver-tab-wrapper d-lg-block d-none">
              <Tab.Container id="left-tabs-example" defaultActiveKey="1">
                <Nav variant="pills">
                  {ReadyToDeliver.map((item, index) => (
                    <>
                      <Nav.Item>
                        <Nav.Link eventKey={`${index}`}>
                          4.{index} {item.title}
                        </Nav.Link>
                      </Nav.Item>
                    </>
                  ))}
                </Nav>
                <Tab.Content>
                  {ReadyToDeliver.map((item, index) => (
                    <>
                      <Tab.Pane eventKey={`${index}`}>{item.content}</Tab.Pane>
                    </>
                  ))}
                </Tab.Content>
              </Tab.Container>
            </div>
            <div className="d-lg-none d-block bg-indigo px-5">
              <JSAccordion JSAccordionData={ReadyToDeliver} />
            </div>
          </div>
        </Container>
      </section>
      <section>
        <ContactUs />
      </section>
    </>
  );
};
