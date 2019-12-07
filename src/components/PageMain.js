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
  justify-content: center;
  text-align: center;

  margin: 20px;
`;

const Headline = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.secondary};
  font-family: "Merriweather", serif;

  cursor: pointer;

  span {
    color: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.secondary};
    }
  }
`;

const JobPopup = styled.p`
  cursor: pointer;
  color: ${props => props.theme.primary};
  font-size: 1rem;

  &:hover {
    color: ${props => props.theme.secondary};
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
  height: 30vh;

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
        Hello, I am <span>Sascha</span>.
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
