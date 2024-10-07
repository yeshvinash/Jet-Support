import clsx from "clsx";
import React from "react";
import "./ServicesCard.css";
import { JSButton } from "..";
import { SVGIcons } from "./../../utils";
export const ServicesCard = ({
  serviceList,
  img,
  imgname,
  title,
  description,
  subDescription,
  link,
  variant,
  ImageSm,
  ...rest
}) => {
  return (
    <>
      <div
        className={clsx("services-card white  position-relative d-flex", {
          "services-offcyan": variant === "offcyan",
          "services-orange": variant === "orange",
          "services-offorange": variant === "offorange",
          "services-orangedark": variant === "orangedark",
          "services-green": variant === "green",
          "services-blue": variant === "blue",
          "services-offblue": variant === "offblue",
          "services-offbluelight": variant === "offbluelight",
          "services-red": variant === "red",
          "services-redlight": variant === "redlight",
          "services-offviolet": variant === "offviolet",
          "services-gray": variant === "gray",
          "services-offgray": variant === "offgray",
          "services-pink": variant === "pink",
          "services-offyellow": variant === "offyellow",
          "services-darkyellow": variant === "darkyellow",
          "services-cyan": variant === "cyan",
          "services-bluedark": variant === "bluedark",
          "services-offnavyblue": variant === "offnavyblue",
        })}
      >
        <div className="services-card-content d-flex flex-column">
          <h5 className="mb-4 white fw-medium services-card-main-title">
            {title}
          </h5>
          {serviceList && (
            <>
              <h5 className="white fw-normal services-card-sub-title mb-xl-4 mb-5">
                {description}
              </h5>
              <ul className="d-flex flex-column flex-wrap services-card-lists">
                {serviceList &&
                  serviceList.map((item, index) => (
                    <li key={index} className="fw-normal services-card-list">
                      {item}
                    </li>
                  ))}
              </ul>
            </>
          )}

          {subDescription && (
            <p className="white fw-normal">{subDescription}</p>
          )}
          {serviceList && (
            <div className="mt-auto services-card-btn">
              <JSButton
                variant={"light-bordered"}
                icon={SVGIcons.ArrowRight}
                className="js-help-card-btn"
                link={link}
              >
                Get a Quote
              </JSButton>
            </div>
          )}
        </div>
        <img
          src={img}
          alt={imgname}
          className={`services-card-img ${ImageSm && "small"}`}
        />
      </div>
    </>
  );
};
