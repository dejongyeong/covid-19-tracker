import React from "react";

import { Route, Switch } from "react-router-dom";
import Theme from "../../theme/Theme";
import { Wrapper } from "./AppStyle";
import { Circle1, Circle2 } from "../Shared/BackgroundCircle/BackgroundCircles";
import Header from "../Shared/Header";

import Home from "../Home/Home";
import Information from "../Information/Info";

// Routing tutorial: https://medium.com/javascript-in-plain-english/how-to-add-react-router-to-your-react-app-bf764a776122
function App() {
  return (
    <Theme>
      <Wrapper>
        <Circle1 />
        <Circle2 />
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/info" component={Information} />
        </Switch>
      </Wrapper>
    </Theme>
  );
}

export default App;
