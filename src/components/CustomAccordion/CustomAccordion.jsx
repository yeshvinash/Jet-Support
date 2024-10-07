import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./CustomAccordion.css";
import Planning from "../../assets/images/designing-planning.jpg";
import Arrow from "../../assets/images/icons/arrow-up.svg";
export const CustomAccordion = () => {
  const workingProcessData = [
    {
      title: "Designing & Planning",
      img: Planning,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Development",
      img: Planning,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Launch & Traction",
      img: Planning,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Maintain & Iterate",
      img: Planning,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <Accordion defaultActiveKey="0" flush className="custom-accordion">
      {workingProcessData.map((item, index) => (
        <Accordion.Item eventKey={`${index}`} key={index}>
          <Accordion.Header>
            <div className="d-flex custom-accordion-title-flex align-items-center">
              <span className="h3 custom-accordion-index mb-0">
                {index + 1}
              </span>
              <span className="custom-accordion-title h4 white mb-0 fw-medium">
                {item.title}
              </span>
            </div>
            <div className="custom-accordion-drop-icon">
              <img src={Arrow} />
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <p className="fw-light mb-5">{item.description}</p>
            <div className="items-flow mb-5 pb-3">
              <span className="items-flow-content fw-medium">
                Our Discovery Workshop
              </span>
              <span className="items-flow-content fw-medium">Wireframes</span>
              <span className="items-flow-content fw-medium">
                User Stories / Sprint Planning
              </span>
              <span className="items-flow-content fw-medium">UI Design</span>
              <span className="items-flow-content fw-medium">
                Pitch / Product Deck
              </span>
              <span className="items-flow-content fw-medium">Branding</span>
              <span className="items-flow-content fw-medium">Prototype</span>
            </div>
            <div className="custom-accordion-img">
              <img src={Planning} alt="Planning " />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
