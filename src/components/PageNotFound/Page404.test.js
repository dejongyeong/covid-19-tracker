import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "jest-styled-components";

import Page404 from "./Page404";
import { Wrapper } from "./Page404Style";
import { renderWithTheme } from "../../helpers";

// Tutorial: https://medium.com/@the_teacher/how-to-test-a-react-components-css-styles-with-react-testing-library-rtl-styled-components-43f744334528
test("<Wrapper> height", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);
  render(
    <MemoryRouter>
      <Page404 />
    </MemoryRouter>,
    root
  );

  // medium to large
  expect(
    window.getComputedStyle(document.getElementById("page-404")).height
  ).toEqual("85vh");
});

test("<Wrapper> in smaller devices", () => {
  const tree = renderWithTheme(<Wrapper />).toJSON();
  expect(tree).toHaveStyleRule("height", "100vh", {
    media: `only screen and (orientation: portrait) and (max-width:calc(480px - 0.02px))`,
  });
  expect(tree).toHaveStyleRule("height", "70vh", {
    media: `only screen and (orientation: portrait) and (min-width: 540px) and (max-width: 540px)`,
  });
});
