import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { JSButton } from "../../../components";
import "./Discovery.css";
export const Discovery = ({ discoveryHeroImg }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg={5}>
            <div className="pe-5 me-5">
              <h2 className="white mb-5 pb-5">
                Here’s what’s included in your FREE 1-hour Discovery Session
              </h2>
              <div className="d-lg-block d-none">
                <JSButton variant={"primary"}>Book A Session</JSButton>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <p className="fw-light  discovery-decription">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              r
            </p>
            <div className="d-lg-none d-block">
              <JSButton variant={"primary"}>Book A Session</JSButton>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <div className="discovery-session-img-wrapper">
              <div className="discovery-session-img ms-auto">
                <img src={discoveryHeroImg} alt="discovery" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <ul className="m-0 discovery-lists">
              <li className="discovery-list">
                <h5 className="white fw-medium mb-2">Value Proposition</h5>
                <p className="fw-light mb-0">
                  customer’s pains and gains using our value proposition canvas.
                </p>
              </li>
              <li className="discovery-list">
                <h5 className="white fw-medium mb-2">Cost & Timeframe</h5>
                <p className="fw-light mb-0">
                  Next, let’s see if your project is commercially and
                  technically viable using our business model canvas.
                </p>
              </li>
              <li className="discovery-list">
                <h5 className="white fw-medium mb-2">Market Potential</h5>
                <p className="fw-light mb-0">
                  Get a detailed proposal with our full analysis of the work and
                  effort required to make your app brilliant.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
