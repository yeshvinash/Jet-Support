import React from "react";
import "./TeamCard.css";
import { SVGIcons } from "../../utils";
import { Col, Row } from "react-bootstrap";
export const TeamCard = ({ TeamCardData }) => {
  return (
    <>
      <Row className="justify-content-center gy-5">
        {TeamCardData &&
          TeamCardData.map((item, index) => (
            <Col lg="4" md="6"  key={index}>
              <div className="team-card-wrapper">
                <div className="team-card">
                  <div className="team-card-img">
                    <img src={item.img} />
                  </div>
                  <div className="team-card-content p-5 d-flex flex-column">
                    <div className="team-card-content-wrapper">
                      <h4 className="small white text-center mb-3">
                        {item.title}
                      </h4>
                      <h6 className="fw-normal text-center mb-3 team-card-subtitle">
                        {item.subtitle}
                      </h6>
                      <p className="team-card-content-description white text-center">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <div className="team-card-line mb-3"></div>
                      <div className="d-flex align-items-center justify-content-center">
                        <a
                          href="javascript:void(0)"
                          className="pe-4 team-card-icon"
                        >
                          {SVGIcons.Facebook}
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="ps-4 team-card-icon"
                        >
                          {SVGIcons.LinkedIn}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
      </Row>
    </>
  );
};
