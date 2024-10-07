import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SVGIcons } from "../../utils";
import { JSButton } from "..";
export const AboutYourProject = ({ title, description }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <h2 className="white mb-lg-0 mb-5">{title}</h2>
          </Col>
          <Col lg={6}>
            <p className="fw-300 mb-6 pb-lg-0 pb-5">{description}</p>
            <JSButton
              link="/contact-us"
              variant={"light"}
              icon={SVGIcons.ArrowTopRight}
            >
              Contact Now
            </JSButton>
          </Col>
        </Row>
      </Container>
    </>
  );
};
