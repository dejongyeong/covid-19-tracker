import React from "react";
import { cleanup } from "@testing-library/react";
import "jest-styled-components";
import { renderWithTheme } from "../../helpers";

import { InfoCard, InfoWrapper } from "./InfoStyle";

afterEach(cleanup);

test("<InfoCard> test", () => {
  const tree = renderWithTheme(<InfoCard />).toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveStyleRule("transition", "transform 0.3s ease-out", {
    media: `only screen and (min-width:1200px)`,
  });
});

test("<InfoWrapper> test", () => {
  const tree = renderWithTheme(<InfoWrapper />).toJSON();
  expect(tree).toMatchSnapshot();

  expect(tree).toHaveStyleRule("flex-direction", "column", {
    media: `only screen and (max-width: 807.98px)`,
  });

  expect(tree).toHaveStyleRule("align-items", "center", {
    media: `only screen and (max-width: 807.98px)`,
  });

  expect(tree).toHaveStyleRule("justify-content", "center", {
    media: `only screen and (max-width: 807.98px)`,
  });
});
