import { Container } from "react-bootstrap";
import { JSButton } from "../../components";
import { SVGIcons } from "../../utils";
import "./ContactForm.css";
import Melbourne from "../../assets/images/contact-us/melbourne.png";
import Kathmandu from "../../assets/images/contact-us/kathmandu.png";
import Brisbane from "../../assets/images/contact-us/brisbane.png";
import Sydney from "../../assets/images/contact-us/sydney.png";
import LineImg from "../../assets/images/contact-us/line.png";

export const ContactForm = () => {
  return (
    <>
      <section className="wave-background">
        <main className="banner services-banner bg-offblack">
          <Container>
            <div className="banner-content spacing-top-md spacing-bottom-md text-center">
              <h2 className="ice mb-6">
                <span className="gradient-text">Contact Us</span>
              </h2>
              <p className="offwhite fw-light mb-6">
                We can't wait to discuss your app idea with you. Confidentiality is assured and we're always happy to sign a confidentiality agreement before getting started
              </p>
              <JSButton variant={"primary-bordered"} icon={SVGIcons.ArrowRight}>
                Get Started
              </JSButton>
            </div>
          </Container>
        </main>
      </section>

      <section className="spacing-bottom-lg contact-form-container-wrap">
        <Container>
          <section className="contact-form-container">
            <div className="contact-form-left">
              <div className="contact-info-container position-relative">
                  <img src={LineImg} alt="line" className="position-absolute line-vector" />
                <h5 className="small fw-medium text-white mb-3 custom-text">Contact Information</h5>
                <p className="fw-light contact-info-des">Feel free to contact us directly if you have any inquiries regarding accommodation. We would love to have you stay with us!</p>
                <div className="contact-info-list-wrap">
                  <a href="tel:(684) 555-0102" className="contact-info-list">
                    <div className="contact-icon-wrap">
                      {SVGIcons.Call}
                    </div>
                    <span>(684) 555-0102</span>
                  </a>
                  <a href="mailto:Cameron Williamson@gmail.com" className="contact-info-list">
                    <div className="contact-icon-wrap">
                      {SVGIcons.Email}
                    </div>
                    <span>Cameron Williamson@gmail.com</span>
                  </a>
                  <a href="https://goo.gl/maps/F4NRkcfEiFmm6YCe6" target="_blank" className="contact-info-list">
                    <div className="contact-icon-wrap">
                      {SVGIcons.Location}
                    </div>
                    <span>6391 Elgin St. Celina, Delaware 10299</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form-right">
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
            </div>
          </section>
        </Container>
      </section>

      <section className="spacing-bottom-lg branch">
        <Container>
          <div className="branch-title-wrap text-center">
            <h2>Our Branch</h2>
            <p className="mb-0">EB Pearls collaborates remotely with businesses across the world. Please reach out to one of our offices and development center for your software design and development requirements.</p>
          </div>
          <div className="brnach-location-wrap">
            <div className="melbourne-wrap branch-location position-relative">
              <img src={Melbourne} alt="Melbourne" className="branch-img" />
              <div className="branch-content-wrap">
                <p>Melbourne</p>
                <a href="https://goo.gl/maps/wtCgBf4nCiBx1ven9" target="_blank" className="d-flex align-items-center">
                  {SVGIcons.Map}
                  <span>2972 Westheimer Rd. Santa Ana, Illinois 85486</span>
                </a>
              </div>
            </div>
            <div className="kathmandu-wrap branch-location position-relative">
              <img src={Kathmandu} alt="Kathmandu" className="branch-img" />
              <div className="branch-content-wrap">
                <p>Kathmandu</p>
                <a href="https://goo.gl/maps/958ukdHNNQP92zwj8" target="_blank" className="d-flex align-items-center">
                  {SVGIcons.Map}
                  <span>4140 Parker Rd. Allentown, New Mexico 31134</span>
                </a>
              </div>
            </div>
            <div className="brisbone-wrap branch-location position-relative">
              <img src={Brisbane} alt="Brisbane" className="branch-img" />
              <div className="branch-content-wrap">
                <p>Brisbone</p>
                <a href="https://goo.gl/maps/Vux8x2ydbbto8hJv5" target="_blank" className="d-flex align-items-center">
                  {SVGIcons.Map}
                  <span>6391 Elgin St. Celina, Delaware 10299</span>
                </a>
              </div>
            </div>
            <div className="sydney-wrap branch-location position-relative">
              <img src={Sydney} alt="Sydney" className="branch-img" />
              <div className="branch-content-wrap">
                <p>Sydney</p>
                <a href="https://goo.gl/maps/xaVzvjjCHZC1gVBn7" target="_blank" className="d-flex align-items-center">
                  {SVGIcons.Map}
                  <span>6391 Elgin St. Celina, Delaware 10299</span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
