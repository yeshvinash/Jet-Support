import React from "react";
import "./StandOutCard.css";
export const StandOutCard = ({ StandOutData }) => {
  return (
    <>
      <div className="stand-out-card-wrapper">
        {StandOutData.map((item, index) => (
          <div className="stand-out-card d-flex" key={index}>
            <div
              className={`stand-out-icon d-lg-flex d-none ${item.background}`}
            >
              <img src={item.icon} />
            </div>
            <div className="ps-lg-5">
              <div className="d-lg-block d-flex mb-lg-0 mb-5 align-items-center">
                <div
                  className={`stand-out-icon d-lg-none me-5 ${item.background}`}
                >
                  <img src={item.icon} />
                </div>
                <h5 className="white fw-medium">{item.title}</h5>
              </div>
              <p className="fw-light white">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
