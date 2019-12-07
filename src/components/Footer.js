import React from "react";
import styled from "@emotion/styled";

//ICON import
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

//STYLE start

const FooterBar = styled.footer`
  width: 20vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
`;

//STYLE end

export default function Footer() {
  return (
    <FooterBar>
      <MailOutlineIcon />
      <PhoneIcon />
      <InstagramIcon />
      <LinkedInIcon />
    </FooterBar>
  );
}
