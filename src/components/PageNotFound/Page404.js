import React from "react";
import { NavLink } from "react-router-dom";
import Theme from "../../theme/Theme";
import {
  MainHeader,
  Wrapper,
  SubHeader,
  Content,
  PageNotFoundButton,
} from "./Page404Style";
import { Logo404 } from "../../assets/images/logo-404";

// Logo 404 from https://undraw.co/search
function Page404() {
  return (
    <Theme>
      <Wrapper id="page-404">
        <MainHeader>
          <Logo404 />
        </MainHeader>
        <SubHeader>Page Not Found</SubHeader>
        <Content>
          We&apos;re sorry, the page you&apos;re looking for could not be found.
          Let&apos;s head back to home.
        </Content>
        <NavLink
          className="home-link"
          exact
          to="/"
          activeStyle={{
            color: "#d62828",
          }}
          isActive={(match) => {
            return !!match;
          }}
        >
          <PageNotFoundButton>Return Home</PageNotFoundButton>
        </NavLink>
      </Wrapper>
    </Theme>
  );
}

export default Page404;
