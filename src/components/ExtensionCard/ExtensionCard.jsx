import "./ExtensionCard.css";
export const ExtensionCard = ({
  extensionImg,
  extensionImgAlt,
  backgroundColor,
  description,
  title,
}) => {
  return (
    <div className={`extension-card d-flex ${backgroundColor}`}>
      <div className="extension-card-content">
        <h2 className="small fw-bold white mb-3 extension-card-title">
          {title}
        </h2>
        <h5 className="fw-medium white mb-0 extension-card-description">
          {description}
        </h5>
      </div>
      <div className="extension-card-img-wrapper">
        <img
          src={extensionImg}
          alt={extensionImgAlt}
          className="extension-card-img"
        />
      </div>
    </div>
  );
};
