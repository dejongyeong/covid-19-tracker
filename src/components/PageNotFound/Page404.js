import React from "react";
import Theme from "../../theme/Theme";
import { MainHeader, Wrapper } from "./Page404Style";

function Page404() {
  return (
    <Theme>
      <Wrapper id="page-404">
        <MainHeader>
          <h1>Oops...</h1>
        </MainHeader>
      </Wrapper>
    </Theme>
  );
}

export default Page404;
