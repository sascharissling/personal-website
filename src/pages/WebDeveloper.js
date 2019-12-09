import React from "react";

//STYLE imports
import styled from "@emotion/styled";
import GoBackIcon from "../icons/GoBackIcon";

//STYLE start
const WebDevelopment = styled.div`
  width: 80vw;
  max-width: 500px;
`;
//STYLE end

export default function WebDeveloper() {
  return (
    <WebDevelopment>
      <GoBackIcon />
      <h3>Web Development</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
        dolorem debitis distinctio maxime molestias illo repudiandae quae dolore
        cum temporibus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        necessitatibus quidem itaque quos impedit minus officia suscipit
        commodi, rem modi excepturi minima incidunt reprehenderit, aliquam iusto
        dolorum vel tenetur! Maiores distinctio illum nobis eos officiis
        corrupti, expedita voluptate minus voluptatum excepturi ipsa ut? Aperiam
        molestias, est esse error delectus tempore?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
        temporibus, natus nulla nemo dolor tempore, impedit, vero repellat vel
        expedita numquam necessitatibus sed consequatur quidem inventore ipsam
        corporis placeat optio! Ut aspernatur maxime laborum.
      </p>
    </WebDevelopment>
  );
}
