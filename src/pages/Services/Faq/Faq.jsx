import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { JSAccordion } from "../../../components";
export const Faq = ({ JAccordionData }) => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <div className="faq-content mb-md-0 mb-5 pb-mb-0 pb-5">
              <h2 className="white mb-5">FAQ</h2>
              <div className="faq-description-wrapper">
                <p className="faq-description fw-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="faq-description fw-light">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <JSAccordion JSAccordionData={JAccordionData} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
