import { forwardRef, useEffect, useRef, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import JSLogo from "@images/icons/jet-support.svg";
import {
  SVGIcons,
  IndustryLinkData,
  DesignLinkData,
  TechnologyLinkData,
  ServicesLinkData,
} from "../../utils";
import { JSButton } from "../../components";
import clsx from "clsx";
import "./Header.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import ChevronDropDwn from "../../assets/images/icons/chevron-drop-down.svg";

export function Header() {
  const ref = useRef(null);
  const activeRef = useRef(null);
  const { pathname } = useLocation();
  const [isScrollled, setIsScrollled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(null);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const paths = ["/"];
    paths.includes(pathname) ? setIsTransparent(true) : setIsTransparent(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      setHeaderHeight(ref.current.offsetHeight.toString() + "px");
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [headerHeight]);

  useEffect(() => {
    const width = screen.width;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      scrollPosition > 15 ? setIsScrollled(true) : setIsScrollled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const CustomDropdownToggle = forwardRef(
    ({ children, onClick, className }, ref) => {
      return (
        <button
          ref={ref}
          className={className}
          style={{ backgroundColor: "transparent", border: "none" }}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </button>
      );
    }
  );

  const CustomDropdownMenu = forwardRef(
    ({ children, style, className, labeledBy }, ref) => {
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          {children}
        </div>
      );
    }
  );

  const body = document.getElementsByTagName("body");
  const handleToggle = () => {
    body[0].classList.toggle("show");
  };

  useEffect(() => {
    const container = document.querySelector(".container");
    document.querySelector(".side-bar-list").style.paddingLeft =
      (container.offsetLeft + 12).toString() + "px";
  }, [1]);

  return (
    <>
      <header
        className={clsx("main-header", {
          "header-transparent": isTransparent,
          scrolled: isScrollled,
        })}
        ref={ref}
      >
        <Container className="h-100">
          <div className="inner-header h-100">
            <Link to="/" className="logo">
              <Image src={JSLogo} alt="Jet Support" />
            </Link>

            <nav className="nav list-unstyled h-100 side-bar-list header-left">
              <li className="h-100">
                <NavLink to={"/"} className="link h-100">
                  Home
                </NavLink>
               </li>
              <li className="h-100">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger
                    className="link h-100"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <span className="line-height-1 d-inline-flex">
                      Services
                    </span>
                    <span className="drop-icon line-height-1 d-inline-flex">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00011 4.97656L10.1251 0.851562L11.3034 2.0299L6.00011 7.33323L0.696777 2.0299L1.87511 0.851562L6.00011 4.97656Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal
                    container={document.querySelector("header")}
                  >
                    <DropdownMenu.Content className="dropdown-content">
                      <DropdownMenu.Arrow className="DropdownMenuArrow" />
                      <DropdownMenu.Item className="drop-down-item">
                        {ServicesLinkData.map((item, index) => (
                          <NavLink
                            to={item.link}
                            className="drop-down-item-link"
                            key={index}
                          >
                            <div className="d-flex drop-item-flex">
                              <div
                                className={`drop-item-icon rounded-circle ${item.bg}`}
                              >
                                {item.img}
                              </div>
                              <div>
                                <span className="dropdown-content-title mb-2 fw-medium">
                                  {item.name}
                                </span>
                                <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </NavLink>
                        ))}
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </li>
              <li className="h-100">
                <NavLink to={"/our-work"} className="link h-100">
                  Our Work
                </NavLink>
              </li>
              <li className="h-100">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger
                    className="link h-100"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <span className="line-height-1 d-inline-flex">About</span>
                    <span className="drop-icon line-height-1 d-inline-flex">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00011 4.97656L10.1251 0.851562L11.3034 2.0299L6.00011 7.33323L0.696777 2.0299L1.87511 0.851562L6.00011 4.97656Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal
                    container={document.querySelector("header")}
                  >
                    <DropdownMenu.Content className="dropdown-content lg">
                      <DropdownMenu.Arrow className="DropdownMenuArrow" />
                      <DropdownMenu.Item className="drop-down-item drop-down-item-grid">
                        <NavLink
                          to="/about-us/about"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-accent">
                              {SVGIcons.JSText}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                About Us
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                Learn about jet support story and mission
                                statement.
                              </p>
                            </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/about-us/blog"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-offviolet">
                              {SVGIcons.Blog}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                Blog
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                The latest industry news, updates and
                                interesting articles.
                              </p>
                            </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/about-us/our-team"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-offcyan">
                              {SVGIcons.OurTeam}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                Our Team
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                Jet Support is a Sydney-based agency with a
                                passion for innovation
                              </p>
                            </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/about-us/our-process"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-orange">
                              {SVGIcons.OurProcess}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                Our Process
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                Learn about web and mobile app development
                                process
                              </p>
                            </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/about-us/our-clients"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-yellow">
                              {SVGIcons.OurClients}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                Our Clients
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                High quality testing as a service(Taas)
                              </p>
                            </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/about-us/tech-stack"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-offred">
                              {SVGIcons.TechnologyStack}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                Our technology stack
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                Technologies that we have used for mobile and
                                web development
                              </p>
                            </div>
                          </div>
                        </NavLink>
                        <NavLink
                          to="/about-us/testimonials"
                          className="drop-down-item-link"
                        >
                          <div className="d-flex drop-item-flex">
                            <div className="drop-item-icon rounded-circle bg-green-light">
                              {SVGIcons.Testimonial}
                            </div>
                            <div>
                              <span className="dropdown-content-title mb-2 fw-medium">
                                Testimonial
                              </span>
                              <p className="offgray fw-regular mb-0 dropdown-content-sub-title fw-normal">
                                Learn how our customer making big changes to
                                their stack
                              </p>
                            </div>
                          </div>
                        </NavLink>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </li>
              <li className="h-100">
                <DropdownMenu.Root>
                  <DropdownMenu.Trigger
                    className="link h-100"
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                  >
                    <span className="line-height-1 d-inline-flex">
                      Expertise
                    </span>
                    <span className="drop-icon line-height-1 d-inline-flex">
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00011 4.97656L10.1251 0.851562L11.3034 2.0299L6.00011 7.33323L0.696777 2.0299L1.87511 0.851562L6.00011 4.97656Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal
                    container={document.querySelector("header")}
                  >
                    <DropdownMenu.Content className="dropdown-content dropdown-content-md md">
                      <DropdownMenu.Arrow className="DropdownMenuArrow" />
                      <DropdownMenu.Item>
                        <Row className="gy-sm-0 gy-5 dropdown-content-row">
                          <Col sm={4}>
                            <div className="dropdown-content-border">
                              <div className="dropdown-content-title-main d-flex mb-5">
                                <div className="drop-item-icon rounded-circle bg-green-light me-4">
                                  {SVGIcons.Design}
                                </div>
                                Design
                              </div>
                              {DesignLinkData.map((item, index) => (
                                <NavLink
                                  to={item.link}
                                  className="drop-down-item-link py-3 dropdown-content-title fw-medium"
                                  key={index}
                                >
                                  {item.name}
                                </NavLink>
                              ))}
                            </div>
                          </Col>
                          <Col sm={4}>
                            <div className="dropdown-content-border">
                              <div className="dropdown-content-title-main d-flex mb-5">
                                <div className="drop-item-icon rounded-circle bg-offviolet me-4">
                                  {SVGIcons.Technology}
                                </div>
                                Technology
                              </div>
                              {TechnologyLinkData.map((item, index) => (
                                <NavLink
                                  to={item.link}
                                  className="drop-down-item-link py-3 dropdown-content-title fw-medium"
                                  key={index}
                                >
                                  {item.name}
                                </NavLink>
                              ))}
                            </div>
                          </Col>
                          <Col sm={4}>
                            <div>
                              <div className="dropdown-content-title-main d-flex mb-5">
                                <div className="drop-item-icon rounded-circle  bg-accent me-4">
                                  {SVGIcons.Industry}
                                </div>
                                Industry
                              </div>
                              {IndustryLinkData.map((item, index) => (
                                <NavLink
                                  to={item.link}
                                  className="drop-down-item-link py-3 dropdown-content-title fw-medium"
                                  key={index}
                                >
                                  {item.name}
                                </NavLink>
                              ))}
                            </div>
                          </Col>
                        </Row>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </li>
              <li className="h-100">
                <NavLink to="/contact-us" className="link h-100">
                  Contact Form
                </NavLink>
              </li>
              <li className="h-100 d-md-none d-block">
                <JSButton
                  variant={"dark"}
                  size="small"
                  className="p-sm flex-shrink-0 btn-md"
                >
                  Free Consultation
                </JSButton>
              </li>
            </nav>

            <div className="header-right">
              <a
                href="tel:9283928191"
                className="link white d-flex align-items-center icon-btn"
              >
                <span className="me-sm-3 d-flex">{SVGIcons.Dialer}</span>
                <span className="d-lg-inline-flex d-none">9283928191</span>
              </a>

              <JSButton
                variant={"dark"}
                size="small"
                className="p-sm flex-shrink-0 btn-md d-md-inline-flex d-none"
              >
                Free Consultation
              </JSButton>

              <div className="d-lg-none d-flex position-relative navbar-toggler-wrapper">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={handleToggle}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {!isTransparent && (
        <div className="header-space" style={{ height: headerHeight }}></div>
      )}
    </>
  );
}
