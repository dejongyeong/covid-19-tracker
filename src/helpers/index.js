import React from "react";
import renderer from "react-test-renderer";
import { number } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Theme from "../theme/Theme";

// Theme test helpers
// Tutorial: Tutorial 1: https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b (2017)
export function renderWithTheme(component) {
  return renderer.create(<Theme>{component}</Theme>);
}

export function calIncreasePercentage(latest, increaseValue) {
  const previous = latest - increaseValue;
  const percent = ((latest - previous) / previous) * 100;
  return percent;
}

export function getIcon(percent) {
  return percent > 0 ? (
    <FontAwesomeIcon icon={faArrowUp} />
  ) : (
    <FontAwesomeIcon icon={faArrowDown} />
  );
}

export function calPositivityRate(totalConfirm, totalTested) {
  const pr = (totalConfirm / totalTested) * 100;
  return pr;
}

export function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
numberWithCommas.propTypes = {
  num: number,
};
