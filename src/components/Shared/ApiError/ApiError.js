import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Theme from "../../../theme/Theme";
import { ToInformationButton, Wrapper } from "./ApiErrorStyle";
import ApiServerError from "../../../assets/icons/api-down-undraw.svg";

function ApiError() {
  return (
    <Theme>
      <Wrapper id="api-error">
        <img src={ApiServerError} alt="API Server Error Undraw Icon" />
        <p>
          We&apos;re sorry, it seems like there is an error from the Open
          Disease Data API server.
          <br />
          Let&apos;s navigate to the information page!!
        </p>
        <NavLink className="info-link" exact to="/info">
          <ToInformationButton>To Information Page</ToInformationButton>
        </NavLink>
      </Wrapper>
    </Theme>
  );
}

export default withRouter(ApiError);
