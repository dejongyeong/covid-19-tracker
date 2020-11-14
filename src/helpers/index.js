import React from "react";
import renderer from "react-test-renderer";
import Theme from "../theme/Theme";

/* eslint-disable */
// Theme test helpers
// Tutorial: Tutorial 1: https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b (2017)
export function renderWithTheme(component) {
  return renderer.create(<Theme>{component}</Theme>);
}