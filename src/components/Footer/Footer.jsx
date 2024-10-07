import "./Footer.css";
import Logo from "../../assets/images/icons/jet-support-dark.svg";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { SVGIcons } from "./../../utils";
export function Footer() {
  return (
    <footer>
      <div className="spacing-top-xs spacing-bottom-sm bg-icewhite">
        <Container>
          <div className="d-flex justify-content-between footer-top-flex mx-auto">
            <div className="">
              <NavLink to="/" className="mb-5 pb-5 d-block logo-bottom">
                <img src={Logo} alt="jet-support" />
              </NavLink>
              <h6 className="p fw-medium mb-5">Develop Your App With Jet</h6>
              <ul className="social-links">
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Our Design and Development Process
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Happiness Guarantee
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="links-wrap">
              <h6 className="p fw-medium mb-5 pb-1">Quick Links</h6>
              <ul className="social-links quick-links">
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Our Work
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Expertise
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="social-link fw-normal">
                    Contact Form
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="p fw-medium mb-5 pb-5">Follow us on</h6>
              <ul className="social-icons d-flex align-items-center">
                <li>
                  <a href="#" className="social-icon">
                    {SVGIcons.Facebook}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    {SVGIcons.Instagram}
                  </a>
                </li>
                <li>
                  <a href="#" className="social-icon">
                    {SVGIcons.Twitter}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-bottom">
        <Container>
          <p className="p-xxs text-center fw-normal mb-0 py-4">
            ©2023 by Jet Support Pty Ltd ABN 89 090 381 196
          </p>
        </Container>
      </div>
    </footer>
  );
}
