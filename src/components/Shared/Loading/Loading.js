import React from "react";
import { FaSpinner } from "react-icons/fa";
import Theme from "../../../theme/Theme";
import { Loader, Marquee, Wrapper } from "./LoadingStyle";

// Spinner tutorial: https://stackoverflow.com/questions/64508793/fontawesome-spinner-wont-spin-in-react
function Loading() {
  return (
    <Theme>
      <Wrapper id="api-error">
        <Loader>
          <FaSpinner icon="spinner" className="spinner" />
        </Loader>
        <Marquee>
          <h1>Fetching Data... Please Wait...</h1>
        </Marquee>
      </Wrapper>
    </Theme>
  );
}

export default Loading;
