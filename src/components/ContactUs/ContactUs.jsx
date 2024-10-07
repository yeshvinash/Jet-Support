import { Col, Container, Row } from "react-bootstrap";
import { JSButton } from "..";
import "./ContactUs.css";

export function ContactUs() {
  return (
    <section className="spacing-top-sm spacing-bottom-lg">
      <Container>
        <div className="contact-us-wrapper">
          <Row>
            <Col lg={6}>
              <h2 className="mb=4">Contact Us</h2>
              <p className="mb-3">
                We can't wait to discuss your app idea with you.
              </p>
              <p className="mb-0">
                Confidentiality is assured and we're always happy to sign a
                confidentiality agreement before getting started
              </p>
            </Col>
            <Col lg={6}>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    id="fullName"
                    placeholder="Full Name"
                    className="lined-input"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="lined-input"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Phone Number"
                    className="lined-input"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="lined-input"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    className="lined-input"
                    rows={3}
                  ></textarea>
                </div>
                <div className="text-center">
                  <JSButton
                    variant={"primary"}
                    style={{
                      maxWidth: "350px",
                      width: "100%",
                    }}
                  >
                    Submit
                  </JSButton>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
