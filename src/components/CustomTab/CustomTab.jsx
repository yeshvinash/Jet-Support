import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { JSAccordion } from "../JSAccordion/JSAccordion";
import "./CustomTab.css";

export const CustomTab = ({ customTabData, customClass, stepNumber }) => {
  return (
    <>
      <div className={`custom-tabbing ${customClass} d-lg-block d-none`}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
          <Row>
            <Col lg={4}>
              <Nav variant="pills" className="flex-column">
                {customTabData.map((item, index) => (
                  <Nav.Item key={index}>
                    <Nav.Link
                      eventKey={index}
                      className="d-flex align-items-center"
                    >
                      {item.img && (
                        <img src={item.img} alt="Bt" className="nav-img" />
                      )}
                      {stepNumber && (
                        <span className="line-height-0 step-number">
                          {stepNumber}.{index}
                        </span>
                      )}
                      <span className="ms-5 custom-tab-title mb-0">
                        {item.title}
                      </span>
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col lg={8}>
              <Tab.Content>
                {customTabData.map((item, index) => (
                  <Tab.Pane eventKey={index} key={index}>
                    <div className="custom-tab-description  fw-light">
                      {item.content}
                    </div>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div className="d-lg-none d-block">
        <JSAccordion JSAccordionData={customTabData} />
      </div>
    </>
  );
};
