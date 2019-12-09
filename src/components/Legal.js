import React from "react";
import { Link } from "react-router-dom";

import styled from "@emotion/styled";

//STYLE start

const LegalBar = styled.div`
  position: absolute;
  bottom: 15px;
`;

const ImpressumLink = styled(Link)`
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
