import React from "react";
import "./TechnologiesLists.css";
import AWSServices from "../../assets/images/dev-ops-services/ExpertiseDevOps/AWS-services.svg";
import MicrosoftAzure from "../../assets/images/dev-ops-services/ExpertiseDevOps/microsoft-azure.svg";
import GoogleAppEngine from "../../assets/images/dev-ops-services/ExpertiseDevOps/google-app-engine.svg";
import Terraform from "../../assets/images/dev-ops-services/ExpertiseDevOps/terraform.svg";
import Docker from "../../assets/images/dev-ops-services/ExpertiseDevOps/docker.svg";
import Bitbucket from "../../assets/images/dev-ops-services/ExpertiseDevOps/bitbucket.svg";
import ReactNative from "../../assets/images/dev-ops-services/ExpertiseDevOps/react-native.svg";

export const TechnologiesLists = () => {
  const TechnologiesListsData = [
    {
      img: AWSServices,
      title: "AWS Services",
    },
    {
      img: MicrosoftAzure,
      title: "Microsoft Azure",
    },

    {
      img: GoogleAppEngine,
      title: "Google app engine",
    },
    {
      img: Terraform,
      title: "Terraform",
    },
    {
      img: Docker,
      title: "Docker",
    },
    {
      img: Bitbucket,
      title: "Bitbucket",
    },
    {
      img: ReactNative,
      title: "React native",
    },
  ];
  return (
    <>
      <div className="d-flex technologies-flex spacing-top-sm spacing-bottom-sm px-5 justify-content-center ">
        {TechnologiesListsData.map((item, index) => (
          <div className="d-flex flex-column technologies-content" key={index}>
            <div className="mb-3 d-block text-center">
              <img src={item.img} alt="" />
            </div>
            <div className="p fw-normal technologies-title mb-0">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
