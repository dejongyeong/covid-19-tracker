import React from "react";
import Theme from "../../../theme/Theme";
import { Wrapper } from "./LoadingStyle";

function Loading() {
  return (
    <Theme>
      <Wrapper id="api-error">
        <h1>Loading</h1>
      </Wrapper>
    </Theme>
  );
}

export default Loading;
