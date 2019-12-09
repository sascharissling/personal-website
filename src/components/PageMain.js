import React from "react";
import Popup from "reactjs-popup";
import sascha from "../assets/sascha.png";
import { Link } from "react-router-dom";

//STYLE imports
import styled from "@emotion/styled";
import MusicProducer from "../pages/MusicProducer";
import WebDeveloper from "../pages/WebDeveloper";

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

  cursor: wait;

  span {
    color: ${props => props.theme.primary};
    &:hover {
      color: ${props => props.theme.secondary};
    }
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
  box-shadow: 6px 6px 0px ${props => props.theme.primary};
`;

const SkillNavigation = styled(Link)`
  cursor: pointer;
  color: ${props => props.theme.primary};
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.secondary};
  }
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
        <SkillNavigation to="/webdev">Web Developer</SkillNavigation>
        <Divider>/</Divider>
        <SkillNavigation to="/prod">Music Producer</SkillNavigation>
      </ProfessionalSkills>
    </PageIdentity>
  );
}
