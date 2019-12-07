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
  font-size: 3rem;
  color: #343434;
  line-height: 1rem;
  cursor: pointer;
  &:hover {
    color: #9932cc;
    text-shadow: 3px 9px 114px -36px rgba(0, 0, 0, 1);
  }
`;

//STYLE end

export default function PageMain() {
  return (
    <PageIdentity>
      <Popup trigger={<Headline>Sascha Rissling</Headline>} position="center">
        <img src="/assets/sascharissling.png" alt="Sascha Rissling" />
      </Popup>
      <p>Web Developer & Music Producer</p>
    </PageIdentity>
  );
}
