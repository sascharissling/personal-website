import React from "react";
import sascha from "../assets/sascha.jpg";
import { Link } from "react-router-dom";

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

  
  span {
    color: ${props => props.theme.primary};
    cursor: wait;
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
  
  &:hover {
    color: ${props => props.theme.secondary};
  }
  `;


const Job = styled.span`
  color: ${props => props.theme.primary};
  font-size: 1rem;
  `;

const Pill = styled.span`
  background: lightgray;
  border-radius: 0.25rem;
  min-width: 3rem;
  font-size: 0.75rem;
  padding: 0.25rem;
  color: #28282B;
`

const PillContainer = styled.div`
  width: 40vw;
  margin-top: 2rem;
  display: flex; 
  gap: 1rem;
  justify-content: center;
`

export default function PageMain() {
  const [saschaIsShown, setSaschaIsShown] = React.useState(false);

  return (
    <PageIdentity>
      {saschaIsShown && <DevImage src={sascha} alt="Sascha Rissling" />}
      <Headline
      >
        Hello, I am <span         onMouseEnter={() => setSaschaIsShown(true)}
        onMouseLeave={() => setSaschaIsShown(false)}>Sascha</span> Rissling.
      </Headline>
      <ProfessionalSkills>
        {/* <SkillNavigation to="/webdev">Frontend Developer</SkillNavigation> */}
        <Job>Frontend Developer</Job>
        {/* <Divider /> */}
        {/* <SkillNavigation to="/prod">Music Producer</SkillNavigation> */}
      </ProfessionalSkills>
        <PillContainer><Pill>React.js</Pill><Pill>Typescript</Pill></PillContainer>
    </PageIdentity>
  );
}
