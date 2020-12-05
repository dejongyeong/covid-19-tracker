import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Home from "./Home";

// Tutorial 1: https://reactrouter.com/web/guides/testing
// Tutorial 2: https://testing-library.com/docs/example-react-router/
test("Home renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
