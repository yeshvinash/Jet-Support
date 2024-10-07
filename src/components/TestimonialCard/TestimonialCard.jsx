import clsx from "clsx";
import { Image } from "react-bootstrap";
import "./TestimonialCard.css";

export function TestimonialCard({ color, picture, name, children }) {
  return (
    <div
      className={clsx("testimonial-card", {
        "card-indigo": color === "indigo",
        "card-purple": color === "purple",
        "card-green": color === "green",
        "card-cyan": color === "cyan",
      })}
    >
      <div className="testimonial-inner">
        <div className="testimonial-content">{children}</div>
        <div className="testimonial-by">
          <Image src={picture} className="object-fit-cover" fluid />
          <div>{name}</div>
        </div>
      </div>
    </div>
  );
}
