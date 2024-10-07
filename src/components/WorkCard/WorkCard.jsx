import clsx from "clsx"
import { Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SVGIcons } from "./../../utils"
import "./WorkCard.css"

export function WorkCard({
  link,
  picture,
  variant,
  imageAlt,
  children,
  ...rest
}) {
  return (
    <div
      className={clsx("work-card-wrap", {
        "work-green": variant === "green",
        "work-brown": variant === "brown",
        "work-purple": variant === "purple",
        "work-indigo": variant === "indigo",
      })}
      {...rest}
    >
      <div className={"work-card"}>
        {picture && (
          <Image src={picture} alt={imageAlt} className="work-card-img" fluid />
        )}
        <div className="work-card-content">{children}</div>
      </div>
      <div className="work-card-link-wrap">
        <Link to={link} className="work-card-link">
          {SVGIcons.ArrowTopRight}
        </Link>
      </div>
    </div>
  )
}
