import "./Timeline.css";

export function Timeline({ timelineData }) {
  return (
    <div className="js-timeline">
      {timelineData.map((data, index) => {
        return (
          <div
            key={data.id}
            className={`js-tl-row ${
              index % 2 === 0 ? "tl-row-odd" : "tl-row-even"
            }`}
          >
            <div className="js-tl-item">
              <h4 className="fw-500">
                {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}{" "}
                {data.title}
              </h4>
              <p className="">{data.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
