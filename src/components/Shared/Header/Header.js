import React from "react";
import Theme from "../../../theme/Theme";
import { Header, Image, Nav, NavButton } from "./HeaderStyle";

import Logo from "../../../assets/icons/logo.svg";

function App() {
  return (
    <Theme>
      <Header>
        <Image>
          <img src={Logo} alt="Logo" />
        </Image>
        <Nav>
          <p>Home</p>
          <NavButton>Information</NavButton>
        </Nav>
      </Header>
    </Theme>
  );
}

export default App;
