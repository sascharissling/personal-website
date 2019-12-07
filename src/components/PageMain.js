import React from "react";
import Popup from "reactjs-popup";

//STYLE imports
import styled from "@emotion/styled";

//STYLE start

const PageIdentity = styled.main`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  align-content: center;

  margin: 20px;
`;

const Headline = styled.h1`
  font-size: 5rem;
  color: #343434;
  line-height: 1rem;
  font-family: "Merriweather", serif;

  cursor: pointer;

  &:hover {
    color: #9932cc;
  }
`;

const JobPopup = styled.p`
  cursor: pointer;

  color: #9932cc;

  font-size: 1.5rem;

  &:hover {
    color: #343434;
  }
`;

const ProfessionalSkills = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-content: center;
  align-items: center;
  justify-content: space-around;
  width: 60%;
`;

const Divider = styled.p`
  font-size: 1.7rem;
`;

//STYLE end

export default function PageMain() {
  return (
    <PageIdentity>
      <Popup
        trigger={<Headline>Sascha Rissling</Headline>}
        position="right center"
      >
        <img src="#" alt="Sascha Rissling" />
      </Popup>
      <ProfessionalSkills>
        <Popup
          trigger={<JobPopup>Web Developer</JobPopup>}
          position="left center"
        ></Popup>
        <Divider>/</Divider>
        <JobPopup>Music Producer</JobPopup>
      </ProfessionalSkills>
    </PageIdentity>
  );
}
