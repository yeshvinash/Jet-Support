import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { JSButton } from "../../components";
import { SVGIcons } from "../../utils";
import DigitalMarketingImg from "../../assets/images/blog/digital-marketing.jpg";
import WebDesignImg from "../../assets/images/blog/web-design.jpg";
import MarketingImg from "../../assets/images/blog/marketing.jpg";
import SocialMediaImg from "../../assets/images/blog/social-media.jpg";
import AppDesignImg from "../../assets/images/blog/app-design.jpg";
import LinkedInMarketingImg from "../../assets/images/blog/linked-in-marketing.jpg";
import TiffanyPalmer from "../../assets/images/icons/avatar/tiffany-palmer.png";
import "./AboutUs.css";
import Form from "react-bootstrap/Form";
import SearchImg from "../../assets/images/icons/search.svg";
export const Blog = () => {
  const BlogData = [
    {
      img: DigitalMarketingImg,
      title: "13 Things About Digital Marketing You May Not Have Known",
      username: "Tiffany Palmer",
      date: "Nov 14, 2020",
      userimg: TiffanyPalmer,
      label: "Digital Marketing",
      background: "purple",
    },
    {
      img: WebDesignImg,
      title: "How To Find A Good Website Designing Company?",
      username: "Tiffany Palmer",
      date: "Nov 14, 2020",
      userimg: TiffanyPalmer,
      label: "Digital Marketing",
      background: "blue",
    },
    {
      img: MarketingImg,
      title: "How To Increase Your Sales From Digital Marketing",
      username: "Tiffany Palmer",
      date: "Nov 14, 2020",
      userimg: TiffanyPalmer,
      label: "Digital Marketing",
      background: "purple",
    },
    {
      img: SocialMediaImg,
      title: "How To Develop An App Like Instagram By Allied Technologies",
      username: "Tiffany Palmer",
      date: "Nov 14, 2020",
      userimg: TiffanyPalmer,
      label: "Social Media",
      background: "green",
    },
    {
      img: AppDesignImg,
      title: "Why Branding is so important to App Design",
      username: "Tiffany Palmer",
      date: "Nov 14, 2020",
      userimg: TiffanyPalmer,
      label: "App design",
      background: "pink",
    },
    {
      img: LinkedInMarketingImg,
      title: "LinkedIn Marketing Lead Generation Strategy",
      username: "Tiffany Palmer",
      date: "Nov 14, 2020",
      userimg: TiffanyPalmer,
      label: "Social Media",
      background: "green",
    },
  ];
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                Our <span className="gradient-text">Blog</span>
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
      <section className="spacing-top-lg spacing-bottom-lg">
        <Container>
          <div className="blog-input-row">
            <Row className="gy-md-0 gy-5">
              <Col lg={8} sm={6}>
                {" "}
                <div className="custom-input-wrapper">
                  <div className="custom-input-icon">
                    <img src={SearchImg} alt="search" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search.."
                    className="custom-input"
                  />
                </div>
              </Col>
              <Col lg={4} sm={6}>
                <Form.Select className="custom-select ms-auto">
                  <option className="custom-select-option">Categories</option>
                  <option className="custom-select-option">
                    Digital Marketing
                  </option>
                  <option className="custom-select-option">Web Design</option>
                  <option className="custom-select-option">Social Media</option>
                  <option className="custom-select-option">App design</option>
                </Form.Select>
              </Col>
            </Row>
          </div>

          <div className="blog-card-grid">
            {BlogData.map((item, index) => (
              <div className="blog-card" key={index}>
                <div className="blog-card-body">
                  <div className="mb-5 pb-3">
                    <div className="blog-img-wrapper">
                      <img src={item.img} className="blog-img" />
                    </div>
                  </div>
                  <div
                    className={`p-sm mb-5 custom-square-label fw-medium ${item.background}`}
                  >
                    {item.label}
                  </div>
                  <h5 className="fw-semibold mb-0">{item.title}</h5>
                </div>
                <div className="blog-card-footer d-flex align-items-center">
                  <div className="blog-card-user me-md-3 me-4">
                    <img src={item.userimg} alt="TiffanyPalmer" />
                  </div>
                  <div className="h6 mb-0 fw-normal">
                    {" "}
                    By <span className="fw-medium"> {item.username}</span>
                  </div>
                  <div className="p mb-0 blog-date fw-normal">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
