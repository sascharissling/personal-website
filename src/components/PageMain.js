import React from "react";
import Popup from "reactjs-popup";
import sascha from "../assets/sascha.JPG";

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

const DevImage = styled.img`
  height: 80vh;

  top: 30px;
  position: absolute;

  border-radius: 15px 0px 15px 0px;

  filter: grayscale(100%);
`;

//STYLE end

export default function PageMain() {
  const [saschaIsShown, setSaschaIsShown] = React.useState(false);

  return (
    <PageIdentity>
      {saschaIsShown && <DevImage src={sascha} alt="Sascha Rissling" />}
      <Headline
        onMouseEnter={() => setSaschaIsShown(true)}
        onMouseLeave={() => setSaschaIsShown(false)}
      >
        Sascha Rissling
      </Headline>
      <ProfessionalSkills>
        <Popup trigger={<JobPopup>Web Developer</JobPopup>} modal>
          Web Developer Content
        </Popup>
        <Divider>/</Divider>
        <Popup trigger={<JobPopup>Music Producer</JobPopup>} modal>
          Music Producer Content
        </Popup>
      </ProfessionalSkills>
    </PageIdentity>
  );
}
