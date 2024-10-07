import React from "react";
import { JSButton } from "..";
import "./WhatWeProvideTab.css";
export const WhatWeProvideTab = ({ WhatWeProvideData }) => {
  return (
    <>
      <div className="mb-5 pb-5">
        <div className="what-we-provide-img-wrapper">
          <img src={WhatWeProvideData.img} alt=" WhatWeProvideImg" />
        </div>
      </div>
      {WhatWeProvideData.description && (
        <div className="mb-5 pb-5 what-we-provide-description-wrapper">
          {WhatWeProvideData.description.map((descriptionItem, index) => (
            <p
              className="white fw-light what-we-provide-description"
              key={index}
            >
              {descriptionItem}
            </p>
          ))}
        </div>
      )}

      {WhatWeProvideData.list && (
        <div className="d-flex what-we-provide-list-flex">
          <ul className="custom-lists mb-3 pb-5 what-we-provide-lists">
            {WhatWeProvideData.list.map((listItem, index) => {
              return (
                WhatWeProvideData.list.length / 2 > index && (
                  <li className="custom-list" key={index}>
                    {listItem}
                  </li>
                )
              );
            })}
          </ul>
          <ul className="custom-lists mb-3 pb-5 what-we-provide-lists">
            {WhatWeProvideData.list.map((listItem, index) => {
              return (
                WhatWeProvideData.list.length / 2 <= index && (
                  <li className="custom-list" key={index}>
                    {listItem}
                  </li>
                )
              );
            })}
          </ul>
        </div>
      )}
      <JSButton variant={"primary"}>Book your FREE Consultation</JSButton>
    </>
  );
};
