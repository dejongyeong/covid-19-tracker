import React from "react";
import Theme from "../../theme/Theme";
import { Wrapper } from "./AppStyle";
import { Circle1, Circle2 } from "../Shared/BackgroundCircle/BackgroundCircles";

import Header from "../Shared/Header";

function App() {
  return (
    <Theme>
      <Wrapper>
        <Circle1 />
        <Circle2 />
        <Header />
      </Wrapper>
    </Theme>
  );
}

export default App;
