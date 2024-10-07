import React from "react";
import "./OurWork.css";
import { JSButton } from "../../components";
import { Container, Nav } from "react-bootstrap";
import { SVGIcons } from "../../utils";
import ArcDigitalAgencyWebsite from "../../assets/images/work/arc-digital-agency-website.jpg";
import NFTMarketPlaceMobileApp from "../../assets/images/work/NFT-marketplace-mobile-app.jpg";
import AgencyWebsite from "../../assets/images/work/agency-website.jpg";
import RealEstateMobileApp from "../../assets/images/work/real-estate-mobile-app.jpg";
import LJBCORealEstateWebsite from "../../assets/images/work/LJB-CO-real-estate-website.jpg";
import IousWebsite from "../../assets/images/work/ious-website.jpg";
import VirtualityWebSite from "../../assets/images/work/virtuality-web-site.jpg";
import PaypalMobileApp from "../../assets/images/work/paypal-mobile-app.jpg";
import EcommerceMobileApp from "../../assets/images/work/ecommerce-mobile-app.jpg";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
// import Nav from "react-bootstrap/Nav";

export const OurWork = () => {
  const OurWorkCardData = [
    {
      img: ArcDigitalAgencyWebsite,
      title: "Arc Digital Agency - Website",
    },
    {
      img: NFTMarketPlaceMobileApp,
      title: "NFT Marketplace- Mobile App",
    },
    {
      img: AgencyWebsite,
      title: "Agency- Website",
    },
    {
      img: RealEstateMobileApp,
      title: "Real Estate - Mobile App",
    },
    {
      img: LJBCORealEstateWebsite,
      title: "LJB.CO Real Estate- Website",
    },
    {
      img: IousWebsite,
      title: "ious- Website",
    },
    {
      img: VirtualityWebSite,
      title: "Virtuality- Web Site",
    },
    {
      img: PaypalMobileApp,
      title: "Paypal - Mobile App",
    },
    {
      img: EcommerceMobileApp,
      title: "Ecommerce - Mobile App",
    },
  ];

  const MobileOurWorkCardData = [
    {
      img: NFTMarketPlaceMobileApp,
      title: "NFT Marketplace- Mobile App",
    },
    {
      img: RealEstateMobileApp,
      title: "Real Estate - Mobile App",
    },
    {
      img: PaypalMobileApp,
      title: "Paypal - Mobile App",
    },
    {
      img: EcommerceMobileApp,
      title: "Ecommerce - Mobile App",
    },
  ];

  const IosOurWorkCardData = [
    {
      img: IousWebsite,
      title: "ious- Website",
    },
  ];

  const WebsiteOurWorkCardData = [
    {
      img: ArcDigitalAgencyWebsite,
      title: "Arc Digital Agency - Website",
    },
    {
      img: AgencyWebsite,
      title: "Agency- Website",
    },
    {
      img: LJBCORealEstateWebsite,
      title: "LJB.CO Real Estate- Website",
    },
    {
      img: VirtualityWebSite,
      title: "Virtuality- Web Site",
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
                Our <span className="gradient-text">Work</span>
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
      <section className="spacing-top-md spacing-bottom-lg">
        <Container>
          <div className="js-primary-tab">
            <Tab.Container id="left-tabs-example" defaultActiveKey="1">
              <div className="d-flex align-items-center justify-content-between js-primary-tab-flex flex-sm-row flex-column gap-sm-0 gap-5">
                <div className="d-flex align-items-center">
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="1">all</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="2">Android</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="3">IOS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="4">Web</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
                <div className="our-work-select-col">
                  <Form.Select className="custom-select ms-auto">
                    <option className="custom-select-option">Industry</option>
                    <option className="custom-select-option">Industry</option>
                    <option className="custom-select-option">Industry</option>
                    <option className="custom-select-option">Industry</option>
                    <option className="custom-select-option">Industry</option>
                  </Form.Select>
                </div>
              </div>

              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <div className="our-work-grid">
                    {OurWorkCardData.map((item, index) => (
                      <a
                        href="#"
                        className="cursor-pointer text-decoration-none"
                        key={index}
                      >
                        <div className="mb-5 position-relative our-work-img-wrapper">
                          <img
                            src={item.img}
                            alt="ArcDigitalAgencyWebsite"
                            className="our-work-img"
                          />
                        </div>
                        <p className="fw-medium deepblue">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <div className="our-work-grid">
                    {MobileOurWorkCardData.map((item, index) => (
                      <a
                        href="#"
                        className="cursor-pointer text-decoration-none"
                        key={index}
                      >
                        <div className="mb-5 position-relative our-work-img-wrapper">
                          <img
                            src={item.img}
                            alt="ArcDigitalAgencyWebsite"
                            className="our-work-img"
                          />
                        </div>
                        <p className="fw-medium deepblue">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <div className="our-work-grid">
                    {IosOurWorkCardData.map((item, index) => (
                      <a
                        href="#"
                        className="cursor-pointer text-decoration-none"
                        key={index}
                      >
                        <div className="mb-5 position-relative our-work-img-wrapper">
                          <img
                            src={item.img}
                            alt="ArcDigitalAgencyWebsite"
                            className="our-work-img"
                          />
                        </div>
                        <p className="fw-medium deepblue">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="4">
                  {" "}
                  <div className="our-work-grid">
                    {WebsiteOurWorkCardData.map((item, index) => (
                      <a
                        href="#"
                        className="cursor-pointer text-decoration-none"
                        key={index}
                      >
                        <div className="mb-5 position-relative our-work-img-wrapper">
                          <img
                            src={item.img}
                            alt="ArcDigitalAgencyWebsite"
                            className="our-work-img"
                          />
                        </div>
                        <p className="fw-medium deepblue">{item.title}</p>
                      </a>
                    ))}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Container>
      </section>
    </>
  );
};
