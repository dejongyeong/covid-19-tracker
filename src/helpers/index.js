import React from "react";
import renderer from "react-test-renderer";
import Theme from "../theme/Theme";

/* eslint-disable */
// Theme test helpers
export function renderWithTheme(component) {
  return renderer.create(<Theme>{component}</Theme>);
}