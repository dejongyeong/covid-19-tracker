import React from "react";

import { Wrapper } from "./AppStyle";

/* eslint-disable */
import { Circle1, Circle2 } from "../Shared/BackgroundCircle/BackgroundCircles";
import { Header } from "../Shared/Header/Header";

function App() {
  return (
    <Wrapper>
      <Circle1 />
      <Circle2 />
      <Header>Hello World</Header>
    </Wrapper>
  );
}

export default App;
