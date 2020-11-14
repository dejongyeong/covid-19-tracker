import React from "react";
import Theme from "../Shared/Theme/Theme";
import { Wrapper } from "./AppStyle";
import { Circle1, Circle2 } from "../Shared/BackgroundCircle/BackgroundCircles";
import { Header } from "../Shared/Header/Header";

function App() {
  return (
    <Theme>
      <Wrapper>
        <Circle1 />
        <Circle2 />
        <Header>Hello World</Header>
      </Wrapper>
    </Theme>
  );
}

export default App;
