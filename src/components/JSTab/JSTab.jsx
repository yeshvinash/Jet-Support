import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { JSAccordion } from "..";
import "./JSTab.css";
export const JSTab = ({ JSTabData }) => {
  return (
    <>
      {" "}
      <div className="JS-tabbing d-lg-block d-none">
        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
          <Row>
            <Col sm={4}>
              <div className="pe-5">
                <Nav variant="pills" className="flex-column">
                  {JSTabData.map((item, index) => (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={index}>
                        {item.title && item.title}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </div>
            </Col>
            <Col sm={8}>
              <Tab.Content>
                {JSTabData.map((item, index) => (
                  <Tab.Pane eventKey={index} key={index}>
                    {item.content && item.content}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <div className="d-lg-none d-block">
        <JSAccordion JSAccordionData={JSTabData} />
      </div>
    </>
  );
};
