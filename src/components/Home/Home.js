import React from "react";
import Theme from "../../theme/Theme";
import Header from "../Shared/Header";

import { Wrapper } from "./HomeStyle";

function Home() {
  return (
    <Theme>
      <Header />
      <Wrapper id="covid-data">Home</Wrapper>
    </Theme>
  );
}

export default Home;
