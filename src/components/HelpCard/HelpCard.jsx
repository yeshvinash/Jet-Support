import { SVGIcons } from "../../utils";
import { JSButton } from "./../JSButton/JSButton.jsx";
import "./HelpCard.css";
import clsx from "clsx";

export function HelpCard({ icon, color, title, link, description }) {
  return (
    <div className="js-help-card">
      <div className="js-help-card-inner">
        <div
          className="js-help-card-icon"
          style={{
            backgroundColor: clsx({
              "#f66789": color === "pink",
              "#79c158": color === "green",
              "#f68949": color === "orange",
              "#8c77f7": color === "violet",
              "#f9c763": color === "yellow",
              "#73cfd5": color === "teal",
            }),
          }}
        >
          {icon}
        </div>
        <div className="js-help-card-content">
          <h5 className="fw-medium white">{title}</h5>
          <p className="offwhite fw-light">{description}</p>
        </div>

        <JSButton
          variant={"light-bordered"}
          icon={SVGIcons.ArrowRight}
          className="js-help-card-btn"
          link={link}
        >
          Start Now
        </JSButton>
      </div>
    </div>
  );
}
