import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

import Page404 from "./Page404";

test("Page 404 renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

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
