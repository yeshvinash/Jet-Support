import { Col, Container, Row } from "react-bootstrap";
import { ContactUs, CustomSlider, JSButton, StandOutCard, VerticalSlider } from "../../../components";
import {
  BrandingList,
  BrandCard,
  BrandingFeaturProject,
  SVGIcons,
} from "../../../utils";
import { StandOutData, HomeTestimonials } from "../../../utils/data";
import BrnadingHero from "../../../assets/images/branding/branding-hero.png";

import "./Design.css";

export const Branding = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content md spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">Branding</span>
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

      <section className="spacing-top-md spacing-bottom-xl branding-agency">
        <Container>
          <Row className="justify-content-between g-lg-0 gy-5">
            <Col lg={6}>
              <h2 className="text-capitalize">
                A branding agency that defines your awesomeness
              </h2>
              <ul className="branding-list-wrap">
                {BrandingList.map((listItem, index) => {
                  return (
                    <li className="d-flex align-items-baseline" key={index}>
                      <span className="branding-list-icon me-5 d-flex align-items-start justify-content-start">
                        {SVGIcons.ArrowRight}
                      </span>
                      <span className="branding-list-text p">
                        {listItem.description}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col lg={6}>
              <div className="branding-hero-img-wrap">
                <div className="branding-hero-img">
                  <img src={BrnadingHero} alt="brand-agency" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand-strategy spacing-bottom-lg">
        <Container>
          <h2 className="text-center">
            Full Brand Strategy, Implementation and Management
          </h2>
          <p className="brand-strategy-tagline text-center">
            Our brand experts at EB Pearls can develop and nurture a consistent
            brand presence, engaging your consumers at a deep emotional level as
            a full-service national and Sydney branding agency. We may provide
            you with the entire range of expert branding services – including
            strategy, naming, design, and ongoing brand management – in a
            package to fit you
          </p>
          <div className="brand-strategy-card-container">
            {BrandCard.map((cardItem, index) => {
              return (
                <div
                  className="brand-strategy-card text-center d-flex flex-column align-items-center justify-content-center"
                  key={index}
                >
                  <div
                    className="brand-icon-wrap d-flex align-items-center justify-content-center"
                    style={{ backgroundColor: cardItem.bg }}
                  >
                    <img src={cardItem.icon} alt="icon" />
                  </div>
                  <h6 className="mb-3">{cardItem.title}</h6>
                  <p className="mb-0">{cardItem.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="featured-project bg-offblack spacing-top-lg spacing-bottom-lg">
        <Container>
          <h2 className="text-white text-center">Featured Project</h2>
          <VerticalSlider verticalSliderData={BrandingFeaturProject} />
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
