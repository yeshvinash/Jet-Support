import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./JSAccordion.css";

export const JSAccordion = ({ JSAccordionData }) => {
  return (
    <>
      <Accordion defaultActiveKey="1" flush className="js-accordion">
        {JSAccordionData.map((item, index) => (
          <Accordion.Item eventKey={`${index}`} key={index}>
            <Accordion.Header>
              <div className="js-accordion-drop-icon"></div>
              <div className="d-flex js-accordion-title-flex align-items-center">
                <span className="js-accordion-title h5 officewhite mb-0 fw-semibold">
                  {item.title && item.title}
                </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="description-wrapper">
                <p className="fw-light mb-0 js-accordion-description">
                  {item.description && item.description}
                  {item.content && item.content}
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};
