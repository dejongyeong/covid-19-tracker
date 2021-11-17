/* eslint-disable func-names */
import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";
import { Doughnut, Line } from "react-chartjs-2";
import { Card } from "./BannerStyle";

import { getIcon } from "../../helpers";

const lineOptions = {
  plugins: {
    legend: {
      display: false,
    },
  },
  font: {
    family: `Rubik, sans-serif`,
  },
  showLine: false,
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
};

/**
 * Function that returns total confirmed cases information
 * @param {number} cases
 * @param {number} todayCases
 * @param {number} confirmPercentage
 * @param {dict} globalHistoryCases
 * @returns {component} Card
 */
export function TotalConfirm({
  cases,
  todayCases,
  confirmPercentage,
  globalHistoryCases,
}) {
  const timeline = Object.keys(globalHistoryCases);
  const dailyCases = Object.values(globalHistoryCases);

  const data = {
    labels: timeline,
    datasets: [
      {
        data: dailyCases,
        fill: false,
        backgroundColor: "rgba(214, 40, 40, 0.3)",
        borderWidth: 0,
        tension: 0,
      },
    ],
  };

  return (
    <Card className="banner-one">
      <h5>Total Confirmed</h5>
      <h2>
        <CountUp end={cases} duration={3} separator="," useEasing />
      </h2>
      <p>
        {getIcon(confirmPercentage)} <CountUp end={todayCases} separator="," />{" "}
        / {confirmPercentage.toFixed(2)}%
      </p>
      <div className="line-chart-container">
        <Line data={data} options={lineOptions} />
      </div>
    </Card>
  );
}

TotalConfirm.propTypes = {
  cases: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
  confirmPercentage: PropTypes.number.isRequired,
  globalHistoryCases: PropTypes.objectOf(PropTypes.number).isRequired,
};

/**
 * Function that returns total recovered information
 * @param {number} recovered
 * @param {number} todayRecovered
 * @param {number} recoveredPercentage
 * @param {dict} globalHistoryRecovered
 * @returns {component} Card
 */
export function TotalRecovered({
  recovered,
  todayRecovered,
  recoveredPercentage,
  globalHistoryRecovered,
}) {
  const timeline = Object.keys(globalHistoryRecovered);
  const dailyCases = Object.values(globalHistoryRecovered);

  const data = {
    labels: timeline,
    datasets: [
      {
        data: dailyCases,
        fill: false,
        backgroundColor: "rgba(2, 106, 65, 0.3)",
        borderWidth: 0,
        tension: 0,
      },
    ],
  };

  return (
    <Card className="banner-two">
      <h5>Total Recovered</h5>
      <h2>
        <CountUp end={recovered} duration={3} separator="," useEasing />
      </h2>
      <p>
        {getIcon(recoveredPercentage)}{" "}
        <CountUp end={todayRecovered} separator="," /> /{" "}
        {recoveredPercentage.toFixed(2)}%
      </p>
      <div className="line-chart-container">
        <Line data={data} options={lineOptions} />
      </div>
    </Card>
  );
}

TotalRecovered.propTypes = {
  recovered: PropTypes.number.isRequired,
  todayRecovered: PropTypes.number.isRequired,
  recoveredPercentage: PropTypes.number.isRequired,
  globalHistoryRecovered: PropTypes.objectOf(PropTypes.number).isRequired,
};

/**
 * Function that returns total deaths information
 * @param {number} deaths
 * @param {number} todayDeaths
 * @param {number} deathsPercentage
 * @param {dict} globalHistoryDeaths
 * @returns {component} Card
 */
export function TotalDeaths({
  deaths,
  todayDeaths,
  deathsPercentage,
  globalHistoryDeaths,
}) {
  const timeline = Object.keys(globalHistoryDeaths);
  const dailyCases = Object.values(globalHistoryDeaths);

  const data = {
    labels: timeline,
    datasets: [
      {
        data: dailyCases,
        fill: false,
        backgroundColor: "rgba(62, 62, 62, 0.3)",
        borderWidth: 0,
        tension: 0,
      },
    ],
  };

  return (
    <Card className="banner-three">
      <h5>Total Deaths</h5>
      <h2>
        <CountUp end={deaths} duration={3} separator="," useEasing />
      </h2>
      <p>
        {getIcon(deathsPercentage)} <CountUp end={todayDeaths} separator="," />{" "}
        / {deathsPercentage.toFixed(2)}%
      </p>
      <div className="line-chart-container">
        <Line data={data} options={lineOptions} />
      </div>
    </Card>
  );
}

TotalDeaths.propTypes = {
  deaths: PropTypes.number.isRequired,
  todayDeaths: PropTypes.number.isRequired,
  deathsPercentage: PropTypes.number.isRequired,
  globalHistoryDeaths: PropTypes.objectOf(PropTypes.number).isRequired,
};

/**
 * Function that returns total covid test information
 * @param {number} tested
 * @param {number} positivityRate
 * @returns {component} Card
 */
// eslint-disable-next-line no-unused-vars
export function ActiveCases({ active, critical }) {
  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          usePointStyle: true,
          padding: 10,
        },
      },
    },
    font: {
      family: `Rubik, sans-serif`,
    },
  };

  const roundOff = (number) => {
    return Number(`${Math.round(`${number}e2`)}e-2`);
  };
  const criticalPercentage = roundOff((critical / active) * 100);
  const mildPercentage = roundOff(((active - critical) / active) * 100);

  const data = {
    labels: ["Critical", "Mild"],
    datasets: [
      {
        label: "# of Active Cases",
        data: [criticalPercentage, mildPercentage],
        backgroundColor: ["rgba(214, 40, 40, 0.75)", "rgba(247, 127, 0, 0.75)"],
        borderColor: ["rgba(214, 40, 40, 1)", "rgba(247, 127, 0, 1)"],
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <Card className="banner-four">
      <h5>Active Cases</h5>
      <div className="pie-chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </Card>
  );
}

ActiveCases.propTypes = {
  active: PropTypes.number.isRequired,
  critical: PropTypes.number.isRequired,
};
