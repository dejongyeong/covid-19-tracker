import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import { Card } from "./BannerStyle";

import { getIcon } from "../../helpers";

/**
 * Function that returns total confirmed cases information
 * @param {number} cases
 * @param {number} todayCases
 * @param {number} confirmPercentage
 * @returns {component} Card
 */
export function TotalConfirm({ cases, todayCases, confirmPercentage }) {
  return (
    <Card className="banner-one">
      <h5>Total Confirmed</h5>
      <h2>
        <CountUp end={cases} duration={3} separator="," useEasing />
      </h2>
      <p>
        {getIcon(confirmPercentage)} <CountUp end={todayCases} separator="," />{" "}
        / {confirmPercentage.toFixed(3)}%
      </p>
    </Card>
  );
}

TotalConfirm.propTypes = {
  cases: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
  confirmPercentage: PropTypes.number.isRequired,
};

/**
 * Function that returns total recovered information
 * @param {number} recovered
 * @param {number} todayRecovered
 * @param {number} recoveredPercentage
 * @returns {component} Card
 */
export function TotalRecovered({
  recovered,
  todayRecovered,
  recoveredPercentage,
}) {
  return (
    <Card className="banner-two">
      <h5>Total Recovered</h5>
      <h2>
        <CountUp end={recovered} duration={3} separator="," useEasing />
      </h2>
      <p>
        {getIcon(recoveredPercentage)}{" "}
        <CountUp end={todayRecovered} separator="," /> /{" "}
        {recoveredPercentage.toFixed(3)}%
      </p>
    </Card>
  );
}

TotalRecovered.propTypes = {
  recovered: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  recoveredPercentage: PropTypes.number.isRequired,
};

/**
 * Function that returns total deaths information
 * @param {number} deaths
 * @param {number} todayDeaths
 * @param {number} deathsPercentage
 * @returns {component} Card
 */
export function TotalDeaths({ deaths, todayDeaths, deathsPercentage }) {
  return (
    <Card className="banner-three">
      <h5>Total Deaths</h5>
      <h2>
        <CountUp end={deaths} duration={3} separator="," useEasing />
      </h2>
      <p>
        {getIcon(deathsPercentage)} <CountUp end={todayDeaths} separator="," />{" "}
        / {deathsPercentage.toFixed(3)}%
      </p>
    </Card>
  );
}

TotalDeaths.propTypes = {
  deaths: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  deathsPercentage: PropTypes.number.isRequired,
};

/**
 * Function that returns total covid test information
 * @param {number} tested
 * @param {number} positivityRate
 * @returns {component} Card
 */
export function TotalTested({ tested, positivityRate }) {
  return (
    <Card className="banner-four">
      <h5>Total Tested</h5>
      <h2>
        <CountUp end={tested} duration={3} separator="," useEasing />
      </h2>
      <p>Positivity Rate: {positivityRate.toFixed(3)}%</p>
    </Card>
  );
}

TotalTested.propTypes = {
  tested: PropTypes.number.isRequired,
  positivityRate: PropTypes.number.isRequired,
};
