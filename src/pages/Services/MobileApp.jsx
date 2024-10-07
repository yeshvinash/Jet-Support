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
  AboutYourProject,
} from "../../components";
import PurpleEcommerceWebsite from "./../../assets/images/work-cards/purple-card.png";
import GreenEcommerceWebsite from "./../../assets/images/work-cards/green-card.png";
import AppDevProcess from "./../../assets/images/mobile-app-development/app-dev-process.png";
import AndroidAppDevelopment from "../../assets/images/mobile-app-development/android-app-development.png";
import MobileGameDevelopment from "../../assets/images/mobile-app-development/mobile-game-development.png";
import IosAppDevelopmentImg from "../../assets/images/mobile-app-development/ios-app-development.png";
import HybridAppDevelopment from "../../assets/images/mobile-app-development/hybrid-app-development.png";
import MobileAppMaintenance from "../../assets/images/mobile-app-development/mobile-app-maintenance.png";
import DiscoverySession from "./../../assets/images/mobile-app-development/discovery-session.png";
import { AppDevProcessSteps, MobileHelp, SVGIcons } from "./../../utils";
import {
  StandOutData,
  HomeTestimonials,
  MobileAppDevelopmentFaq,
} from "../../utils/data";
import { Faq } from "./Faq/Faq";
import { Discovery } from "./Discovery/Discovery";
import "./Services.css";
export const MobileApp = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">Mobile</span> App Development
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
          <div className="technology-services-main-title d-lg-none d-block ms-0 mb-6 pb-4">
            <h2>Our Mobile App Development Services</h2>
            <p className="fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu
            </p>
          </div>
          <div className="technology-services-flex custom-row">
            <div className="technology-services-col-1 custom-col">
              <div className="custom-col-spacing technology-services-col-flex">
                <ServicesCard
                  img={AndroidAppDevelopment}
                  serviceList={[
                    "Kotlin",
                    "Jetpack",
                    "Java",
                    "Coroutines",
                    "Fastlane",
                    "Dagger",
                  ]}
                  imgname="android-app-development"
                  title="Android App Development"
                  description="Technologies we use:"
                  variant="green"
                />
                <ServicesCard
                  img={MobileGameDevelopment}
                  serviceList={["Java", "Swift", "Unity"]}
                  imgname="mobile-game-development"
                  title="Mobile Game Development"
                  description="Technologies we use:"
                  variant="offorange"
                />
              </div>
            </div>
            <div className="technology-services-col-2 custom-col">
              <div className="technology-services-main-title d-lg-block d-none">
                <h2>Our Mobile App Development Services</h2>
                <p className="fw-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu
                </p>
              </div>
              <div className="technology-services-grid custom-row">
                <div className="technology-services-col custom-col">
                  <ServicesCard
                    img={IosAppDevelopmentImg}
                    serviceList={[
                      "Swift",
                      "SwiftUI",
                      "CocoaPods",
                      "SQLLite",
                      "Coredata",
                      "Flutter",
                      "React native",
                      "Firebase",
                      "Objective C",
                    ]}
                    imgname="iOS App Development"
                    title="Mobile Game Development"
                    description="Technologies we use:"
                    variant="gray"
                  />
                  <ServicesCard
                    img={MobileAppMaintenance}
                    serviceList={["Swift", "React", "Flutter"]}
                    imgname="iOS App Development"
                    title="iOS App Development"
                    description="Technologies we use:"
                    variant="offcyan"
                  />
                </div>
                <div className="technology-services-col custom-col">
                  <div className="custom-col-spacing">
                    <ServicesCard
                      img={HybridAppDevelopment}
                      serviceList={["Ionic", "React", "Flutter"]}
                      imgname="iOS App Development"
                      title="Hybrid App Development"
                      description="Technologies we use:"
                      variant="offblue"
                    />
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
                Application Development Process
              </h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image src={AppDevProcess} alt="phone with gears" fluid />
              </div>
            </Col>
            <Col xl={10}>
              <Timeline timelineData={AppDevProcessSteps} />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-darkblue spacing-top-md spacing-bottom-md">
        <AboutYourProject
          title="Tell us a bit about your mobile apps project"
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
              {MobileHelp.map((item) => {
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
            Our app Development clients
          </h2>
          <ImageSlider />
        </section>
        <section className="spacing-top-lg">
          <Faq JAccordionData={MobileAppDevelopmentFaq} />
        </section>
      </section>
      <section className="spacing-top-lg spacing-bottom-sm">
        <Container>
          <h2 className="text-center mb-6 pb-5">Our Latest Work</h2>
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
