import React from "react";
import Theme from "../../../theme/Theme";
import { Wrapper } from "./FooterStyle";

function Footer() {
  return (
    <Theme>
      <Wrapper id="footer">
        <p>
          Design and Built by De Jong Yeong &#169; {new Date().getFullYear()} |
          Data Source: <a href="https://disease.sh/">Open Disease Data API</a>
        </p>
      </Wrapper>
    </Theme>
  );
}

export default Footer;
