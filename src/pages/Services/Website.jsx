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
import CocoonHomeServices from "./../../assets/images/work-cards/cocoon-home-services.png";
import AtlantisTechnology from "./../../assets/images/work-cards/atlantis-technology.png";
import DiscoverySession from "./../../assets/images/mobile-app-development/discovery-session.png";
import "./Services.css";
import WebsiteDevelopmentProcess from "../../assets/images/website-development-services/website-development-process.png";
import { AppDevProcessSteps, WebHelp, SVGIcons } from "./../../utils";
import {
  StandOutData,
  HomeTestimonials,
  WebDevelopmentFaq,
  WebsiteDevelopmentProcessSteps,
} from "../../utils/data";
import { Faq } from "./Faq/Faq";
import { Discovery } from "./Discovery/Discovery";
import BackEndWebDevelopment from "../../assets/images/website-development-services/back-end-web-development.png";
import FrontEndWebDevelopment from "../../assets/images/website-development-services/front-end-web-development.png";
import FullStackWebDevelopment from "../../assets/images/website-development-services/full-stack-web-development.png";
import WhatWeProvideWebsiteImg from "../../assets/images/website-development-services/what-we-provide-website.jpg";
export const Website = () => {
  const WhatWeProvideWebsite = {
    img: WhatWeProvideWebsiteImg,
    description: [
      "We offer custom web design services that are specifically tailored to meet the unique needs of your business. Our expert team will work closely with you to create a powerful digital experience that aligns with your company’s brand guidelines and functionality requirements. Our fully customised WordPress websites are designed to help you build brand awareness, generate leads, and convert visitors into loyal customers.",
    ],
    list: [
      "Fully Customised Project Scope",
      "Mobile Responsive Web Design",
      "Search Engine (SEO) Friendly",
      "WordPress Training Session",
      "Google Analytics Setup",
      "Automated Email Marketing Setup",
      "Sitemap & Wireframes",
      "Designed Page Mockups",
      "Optimised for Google PageSpeed and Web Vitals",
      "Monthly Hosting, Support & Maintenance Plans",
    ],
  };
  const JSTabData = [
    {
      title: "Custom Website Design",
      content: <WhatWeProvideTab WhatWeProvideData={WhatWeProvideWebsite} />,
    },
    {
      title: "Focus on quality and security",
      content: "xyz",
    },
    {
      title: "Digital Marketing",
      content: "xyz",
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
                <span className="gradient-text">Web</span> Development
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
              Our Website Development Services
            </h2>
            <p className="fw-normal text-center mx-auto mb-0 development-services-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
          <div className="development-services-card-grid development-services-card-grid-3">
            <div className="development-services-card-1">
              <ServicesCard
                img={BackEndWebDevelopment}
                serviceList={[
                  "PHP",
                  "Node JS",
                  "Mongodb",
                  "Shopify",
                  "Laravel",
                ]}
                imgname="back-end-web-development"
                title="Back-end web development"
                description="Technologies we use:"
                variant="orange"
              />
            </div>
            <div className="development-services-card-2">
              <ServicesCard
                img={FrontEndWebDevelopment}
                serviceList={[
                  "React JS",
                  "Angular",
                  "Backbone",
                  "WordPress",
                  "Jquery",
                ]}
                imgname="front-end-web-development"
                title="Front-end web development"
                description="Technologies we use:"
                variant="blue"
              />
            </div>
            <div className="development-services-card-3">
              <ServicesCard
                img={FullStackWebDevelopment}
                serviceList={["Angular", "jQuery", "JavaScript", "ASP"]}
                imgname="full-stack-web-development"
                title="Full-stack web development"
                description="Technologies we use:"
                variant="offbluelight"
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
                Website Development Process
              </h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image
                  src={WebsiteDevelopmentProcess}
                  alt="phone with gears"
                  fluid
                />
              </div>
            </Col>
            <Col xl={10}>
              <Timeline timelineData={WebsiteDevelopmentProcessSteps} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkblue spacing-top-md spacing-bottom-md">
        <AboutYourProject
          title="Tell us a bit about your Website project"
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
              {WebHelp.map((item) => {
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

        <section className="spacing-bottom-lg">
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
          <Faq JAccordionData={WebDevelopmentFaq} />
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
            <WorkCard link="/" variant={"brown"} picture={CocoonHomeServices}>
              <h3 className="white fw-medium mb-3">
                Cocoon Home <br /> Services
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
