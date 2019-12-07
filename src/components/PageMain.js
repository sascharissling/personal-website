import React from "react";
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
`;

//STYLE end

export default function PageMain() {
  return (
    <PageIdentity>
      <Headline>Sascha Rissling</Headline>
      <p>Web Developer & Music Producer</p>
    </PageIdentity>
  );
}
