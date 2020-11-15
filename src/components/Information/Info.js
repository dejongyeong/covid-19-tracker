import React from "react";
import Theme from "../../theme/Theme";
import { Wrapper } from "./InfoStyle";
import Header from "../Shared/Header";

function Info() {
  return (
    <Theme>
      <Header />
      <Wrapper id="covid-info">Information</Wrapper>
    </Theme>
  );
}

export default Info;
