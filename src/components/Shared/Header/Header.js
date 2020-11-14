import React from "react";
import { withRouter } from "react-router-dom";
import Theme from "../../../theme/Theme";
import { Container, Image, Nav, NavButton } from "./HeaderStyle";

import Logo from "../../../assets/icons/logo.svg";

const Header = () => {
  return (
    <Theme>
      <Container>
        <Image>
          <img src={Logo} alt="Logo" />
        </Image>
        <Nav>
          <a href="/">Home</a>
          <NavButton>
            <a href="/info">Information</a>
          </NavButton>
        </Nav>
      </Container>
    </Theme>
  );
};

export default withRouter(Header);
