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
} from "../../../components";
import PurpleEcommerceWebsite from "../../../assets/images/work-cards/purple-card.png";
import GreenEcommerceWebsite from "../../../assets/images/work-cards/green-card.png";
import { Discovery } from "../../../pages/Services/Discovery/Discovery";
import { IosAppDevHelp, SVGIcons } from "../../../utils";
import Firebase from "../../../assets/images/technology/icons/firebase.svg";
import Flutter from "../../../assets/images/technology/icons/flutter.svg";
import FlutterBlock from "../../../assets/images/technology/icons/flutter-block.svg";
import ObjectiveC from "../../../assets/images/technology/icons/objective-c.svg";
import Dart from "../../../assets/images/technology/icons/dart.svg";
import Riverpod from "../../../assets/images/technology/icons/riverpod.svg";
import Fastlane from "../../../assets/images/technology/icons/fastlane.svg";
import MasonCLI from "../../../assets/images/technology/icons/mason-cli.svg";
import FlutterAppDev from "../../../assets/images/technology/flutter-app-development.png";
import DiscoverySession from "../../../assets/images/mobile-app-development/discovery-session.png";
import ReactNative from "../../../assets/images/technology/icons/react-native.svg";
import {
  IosAppDevProcess,
  StandOutData,
  HomeTestimonials,
} from "../../../utils/data";
import "./Technology.css";
export const FlutterAppDevelopment = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content md spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">Flutter App </span> Development
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

      <section className="ios-app-developement-wrap spacing-top-lg spacing-bottom-lg">
        <Container>
          <div className="mb-6 pb-5 text-center ios-app-development-title-wrapper mx-auto">
            <h2 className="mb-3 ios-app-development-title text-center mx-auto text-capitalize">
            Our Flutter App Development Services
            </h2>
            <p className="mb-0 ios-app-development-description mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
          <div>
            <div className="d-flex expertise-flex expertise-flex-3">
              <div className="expertise-content-wrapper">
                <div className="expertise-content">
                  <h4 className="small mb-2 fw-medium">Flutter App Development</h4>
                  <p className="fw-normal mb-5 expertise-description">
                    We have all the expertise you need to produce fully-fledged,
                    stable, and scalable mobile applications.
                  </p>
                  <ul className="custom-lists  grid">
                    <li className="custom-list">Hybrid Mobile App Development</li>
                    <li className="custom-list"> Hybrid Tablet App Development</li>
                    <li className="custom-list">Hybrid TV App Development</li>
                  </ul>
                </div>
              </div>
              <div className="expertise-logo-main-wrapper">
                <div className="expertise-logo-wrapper">
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Flutter}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Flutter</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={FlutterBlock}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Flutter block</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Dart}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Dart</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Riverpod}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Riverpod</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Firebase}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Firebase</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={Fastlane}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Fastlane</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={ReactNative}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">React native</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={MasonCLI}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Mason CLI</div>
                  </div>
                  <div className="expertise-logo">
                    <div className="mb-2">
                      <img
                        src={ObjectiveC}
                        className="d-block text-center mx-auto"
                      />
                    </div>
                    <div className="p mb-0 text-center">Objective C</div>
                  </div>
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
              Flutter App Development Process
              </h2>
            </Col>
            <Col xl={2}>
              <div className="process-ils">
                <Image src={FlutterAppDev} alt="ios-app-process" fluid />
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
              <h2 className="white mb-3 text-capitalize">How can we help with your Flutter app?</h2>
              <p className="fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            <div className="how-we-help-wrap">
              {IosAppDevHelp.map((item) => {
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

      <section className="bg-indigo spacing-top-lg spacing-bottom-lg">
        <section className="spacing-bottom-lg">
          <Container>
            <h2 className="white mb-5 pb-5 text-center text-capitalize">Why we stand out</h2>
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
          Our Flutter App Development clients
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
}
