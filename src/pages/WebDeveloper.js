import React from "react";

//STYLE imports
import styled from "@emotion/styled";
import GoBackIcon from "../icons/GoBackIcon";

//STYLE start
const WebDevelopment = styled.div`
  width: 80vw;
  max-width: 500px;
  span {
    color: ${props => props.theme.primary};
    font-family: "Merriweather", serif;
    text-decoration: none;
    font-size: 14px;
    a {
      color: ${props => props.theme.primary};
      font-family: "Merriweather", serif;
      text-decoration: none;
      font-size: 14px;
    }
  }
`;
//STYLE end

export default function WebDeveloper() {
  return (
    <WebDevelopment>
      <GoBackIcon />
      <h3>Web Development</h3>
      <p>
        In late 2019 I began my journey in Web Development with one of the first
        bootcamps of its kind in germany at{" "}
        <span>
          <a href="https://neuefische.de" target="_blank">
            neue fische
          </a>
        </span>
      </p>
      <p>
        This bootcamp enabled me to open a floodgate of a part of my brain I had
        never accessed before.
      </p>
      <p>
        I love building intuitive, modern and beautiful front-end applications
        in <span>React.js</span>. For projects and code please go ahead and
        visit my well-organized GitHub page just below this text. All my
        meaningful projects have detailed screenshots or deployments on zeit.co
        going with them.
      </p>
    </WebDevelopment>
  );
}
