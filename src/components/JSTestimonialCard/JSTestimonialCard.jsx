import React from "react";
import "./JSTestimonialCard.css";
export const JSTestimonialCard = ({ color, title, review, picture, name }) => {
  return (
    <>
      {/* <div className="square-card-wrapper py-5">
        <Container>
          <div className="square-card-row">
            <div className="square-card-col">
              <div className="square-card purple  rotate-left">
                <div className="square-card-content square-card-type-top-left">
                  <div className="square-card-data ">
                    <h4 className="white square-card-title fw-semibold">
                      Great Services!
                    </h4>
                    <p className="square-card-description fw-regular">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderi
                    </p>
                    <div className="d-flex">
                      <div className="square-card-img">
                        <img src={JessicaFilip} alt="jessica-filip" />
                      </div>
                      <div className="square-card-sub-title fw-semibold mb-0">
                        Jessica Filip
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="square-card-col">
              <div className="square-card purple-tint-1  rotate-right">
                <div className="square-card-content square-card-type-bottom-right">
                  <div className="square-card-data">
                    <h4 className="white square-card-title fw-semibold">
                      Good Quality work!
                    </h4>
                    <p className="square-card-description fw-regular">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure
                    </p>
                    <div className="d-flex">
                      <div className="square-card-img">
                        <img src={JessicaFilip} alt="jessica-filip" />
                      </div>
                      <div className="square-card-sub-title fw-semibold mb-0">
                        Nina Thiel
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="square-card-col">
              <div className="square-card skyblue  rotate-right">
                <div className="square-card-content square-card-type-bottom-right">
                  <div className="square-card-data">
                    <h4 className="white square-card-title fw-semibold">
                      Top Notch!
                    </h4>
                    <p className="square-card-description fw-regular">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure
                    </p>
                    <div className="d-flex">
                      <div className="square-card-img">
                        <img src={JessicaFilip} alt="jessica-filip" />
                      </div>
                      <div className="square-card-sub-title fw-semibold mb-0">
                        Wayne Douglas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="square-card-col">
              <div className="square-card green rotate-left">
                <div className="square-card-content square-card-type-bottom-left">
                  <div className="square-card-data">
                    <div>
                      <h4 className="white square-card-title fw-semibold">
                        So Expert!
                      </h4>
                      <p className="square-card-description fw-regular">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure
                      </p>
                    </div>
                    <div className="d-flex mt-auto">
                      <div className="square-card-img">
                        <img src={JessicaFilip} alt="jessica-filip" />
                      </div>
                      <div className="square-card-sub-title fw-semibold mb-0">
                        Wayne Douglas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div> */}

      <div className={`square-card ${color}`}>
        <div className="square-card-content">
          {" "}
          <div className="square-card-data">
            <div>
              <div className="white square-card-title fw-semibold">{title}</div>
              <div className="square-card-description fw-regular">{review}</div>
            </div>
            <div className="d-flex mt-auto">
              <div className="square-card-img">
                <img src={picture} alt="jessica-filip" />
              </div>
              <div className="square-card-sub-title fw-semibold mb-0">
                {name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
