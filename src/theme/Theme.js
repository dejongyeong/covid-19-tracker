import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import { theme } from "./ThemeConstant";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
