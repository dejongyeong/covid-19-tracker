import React from "react";
import Theme from "../../../theme/Theme";
import { Wrapper } from "./ApiErrorStyle";

function ApiError() {
  return (
    <Theme>
      <Wrapper id="api-error">
        <h1>API Call Error</h1>
      </Wrapper>
    </Theme>
  );
}

export default ApiError;
