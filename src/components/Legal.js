import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

//STYLE start

const LegalBar = styled.div`
  @media (min-width: 600px) {
    position: absolute;
    bottom: 15px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImpressumLink = styled(Link)`
  -webkit-appearance: none;
  text-decoration: none;
  color: ${props => props.theme.secondary};
  opacity: 50%;
`;
//STYLE end

export default function Legal() {
  return (
    <LegalBar>
      <ImpressumLink to="/impressum">Impressum</ImpressumLink>
    </LegalBar>
  );
}
