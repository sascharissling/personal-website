import React from "react";
import styled from "@emotion/styled";
import Popup from "reactjs-popup";

const Impressum = styled.div`
  position: absolute;
  bottom: 3px;

  cursor: pointer;
  color: grey;

  &:hover {
    color: #9932cc;
  }
`;

export default function ImpressumLink() {
  return (
    <Impressum>
      <Popup trigger={<p>Impressum</p>} modal>
        Impressum
      </Popup>
    </Impressum>
  );
}
