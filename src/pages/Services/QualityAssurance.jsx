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
  JSTab,
  AboutYourProject,
  WhatWeProvideTab,
} from "../../components";
import GreenCard from "./../../assets/images/work-cards/green-card.png";
import AtlantisTechnology from "./../../assets/images/work-cards/atlantis-technology.png";
import DiscoverySession from "./../../assets/images/mobile-app-development/discovery-session.png";
import "./Services.css";
import QualityAssuranceProcess from "../../assets/images/quality-assurance/quality-assurance-process.png";
import { SVGIcons } from "./../../utils";
import {
  StandOutData,
  HomeTestimonials,
  QualityAssuranceProcessSteps,
  QualityAssuranceFaq,
  QualityAssuranceHelp,
} from "../../utils/data";
import { Faq } from "./Faq/Faq";
import { Discovery } from "./Discovery/Discovery";
import SecurityTestingImg from "../../assets/images/quality-assurance/security-testing.png";
import AutomationTestingImg from "../../assets/images/quality-assurance/automation-testing.png";
import MobileTestingImg from "../../assets/images/quality-assurance/mobile-testing.png";
import PerformanceTestingImg from "../../assets/images/quality-assurance/performance-testing.png";
import QualityImg from "../../assets/images/quality-assurance/what-we-provide-quality.jpg";
import Zephyr from "../../assets/images/quality-assurance/expertise/zephyr.svg";
import Selenium from "../../assets/images/quality-assurance/expertise/selenium.svg";
import Appium from "../../assets/images/quality-assurance/expertise/appium.svg";
import Postman from "../../assets/images/quality-assurance/expertise/postman.svg";
import Jmeter from "../../assets/images/quality-assurance/expertise/jmeter.svg";
import Apollo from "../../assets/images/quality-assurance/expertise/apollo.svg";
import Playground from "../../assets/images/quality-assurance/expertise/playground.svg";
import JiraRTM from "../../assets/images/quality-assurance/expertise/jira-RTM.svg";
export const QualityAssurance = () => {
  const WhatWeProvideDevOps = {
    img: QualityImg,
    description: [
      "Automated testing is an important part of our quality assurance process, and we use a variety of tools to get the job done. We have a suite of tools that we use for different purposes, and we use them all to make sure that our software is of the highest quality.",
    ],
    list: [
      "Implementing a continuous integration system",
      "Generating test cases and an automated test configuration",
      "Regression test coverage",
      "Establishing a local device matrix and granting test devices access round-the-clock for test automation",
    ],
  };

  const JSTabData = [
    {
      title: "Automated testing using industry leading tools",
      content: <WhatWeProvideTab WhatWeProvideData={WhatWeProvideDevOps} />,
    },
    {
      title: "Manual testing on various devices",
      content: ".....",
    },
    {
      title: "Functional testing",
      content: "...",
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
                <span className="gradient-text">Quality</span> Assurance
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
      <section className="spacing-top-lg spacing-bottom-md">
        <Container>
          <div className="technology-services-flex custom-row technology-services-md">
            <div className="technology-services-col-2 custom-col">
              <div className="technology-services-main-title QA-technology-services-main-title">
                <h2 className="mb-3"> Our Quality Assurance Services</h2>
                <p className="fw-normal mb-5 pb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu
                </p>

                <JSButton variant={"primary"} icon={SVGIcons.ArrowTopRight}>
                  Get a Quote
                </JSButton>
              </div>
              <div className="technology-services-grid custom-row">
                <div className="technology-services-col custom-col">
                  <div className="custom-col-spacing">
                    <ServicesCard
                      img={SecurityTestingImg}
                      imgname="back-end-web-development"
                      title="Security Testing"
                      subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                      variant="red"
                      ImageSm
                    />
                  </div>
                </div>
                <div className="technology-services-col custom-col">
                  <ServicesCard
                    img={AutomationTestingImg}
                    imgname="front-end-web-development"
                    title="Automation Testing"
                    subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                    variant="offbluelight"
                    ImageSm
                  />
                </div>
              </div>
            </div>
            <div className="technology-services-col-1 custom-col technology-services-md-col">
              <ServicesCard
                img={MobileTestingImg}
                imgname="full-stack-web-development"
                title="Mobile Testing"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offcyan"
                ImageSm
              />
              <ServicesCard
                img={PerformanceTestingImg}
                imgname="full-stack-web-development"
                title="Performance Testing"
                subDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori"
                variant="offviolet"
                ImageSm
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="spacing-bottom-sm">
        <Container>
          <h2 className="mb-5  pb-5 text-center expertise-main-title text-center">
            Our expertise with major quality assurance technologies
          </h2>
          <div className="mb-5 pb-5">
            <div className="d-flex expertise-flex">
              <div className="expertise-content-wrapper">
                <div className="expertise-content">
                  <h4 className="small mb-2 fw-medium">Test Management</h4>
                  <p className="fw-normal mb-5 expertise-description">
                    We use industry-standard technologies in test case
                    management to produce test cases with maximum coverage,
                    scope and traceability.
                  </p>
                  <ul className="custom-lists  pb-5 grid">
                    <li className="custom-list">Requirement management</li>
                    <li className="custom-list">Test plan</li>
                    <li className="custom-list">Test Cases</li>
                    <li className="custom-list">Traceability</li>
                    <li className="custom-list">Test Execution</li>
                    <li className="custom-list">Test Reporting</li>
                  </ul>
                </div>
              </div>
              <div className="expertise-logo-main-wrapper">
                <div className="expertise-logo-wrapper">
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={JiraRTM}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">JiraRTM</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Zephyr}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Zephyr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 pb-5">
            <div className="d-flex expertise-flex">
              <div className="expertise-content-wrapper">
                <div className="expertise-content">
                  <h4 className="small mb-2 fw-medium">Automation Testing</h4>
                  <p className="fw-normal mb-5 expertise-description">
                    Using latest technology , we help business by automating the
                    application testing and covering all the testing boundaries.
                  </p>
                  <ul className="custom-lists  pb-5 custom-lists-col">
                    <li className="custom-list">
                      Mobile application Automation testing
                    </li>
                    <li className="custom-list">
                      Web application Automation testing
                    </li>
                  </ul>
                </div>
              </div>
              <div className="expertise-logo-main-wrapper">
                <div className="expertise-logo-wrapper">
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Selenium}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">JiraRTM</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Appium}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Zephyr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="d-flex expertise-flex expertise-flex-2">
              <div className="expertise-content-wrapper">
                <div className="expertise-content">
                  <h4 className="small mb-2 fw-medium">Tools</h4>
                  <p className="fw-normal mb-5 expertise-description">
                    Get top-notch mobile applications that run on multiple
                    platforms costs while providing your users with an app that
                    fits their OS. Use this alternative to reduce costs and
                    time-to-market and to reach more users without loss of
                    quality, including:.
                  </p>
                  <ul className="custom-lists  grid">
                    <li className="custom-list">Manual testing</li>
                    <li className="custom-list"> Rest API testing</li>
                    <li className="custom-list">GQL Testing</li>
                    <li className="custom-list">Load/Performance testing</li>
                  </ul>
                </div>
              </div>
              <div className="expertise-logo-main-wrapper">
                <div className="expertise-logo-wrapper">
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Apollo}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">JiraRTM</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Postman}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Zephyr</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Jmeter}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">JiraRTM</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Playground}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Zephyr</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="spacing-top-sm spacing-bottom-md">
        <Container>
          <Row>
            <Col xl={10} className="offset-2">
              <h2 className="dev-process-title mb-5">
                Quality Assurance Process
              </h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image
                  src={QualityAssuranceProcess}
                  alt="quality-assurance-process"
                  fluid
                />
              </div>
            </Col>
            <Col xl={10}>
              <Timeline timelineData={QualityAssuranceProcessSteps} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkblue spacing-top-md spacing-bottom-md">
        <AboutYourProject
          title="Tell us a bit about your QA project"
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
              {QualityAssuranceHelp.map((item) => {
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
          <h2 className="mb-5 pb-5 white text-center">Our QA clients</h2>
          <ImageSlider />
        </section>
        <section className="spacing-top-lg">
          <Faq JAccordionData={QualityAssuranceFaq} />
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
