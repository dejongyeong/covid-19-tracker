import React from "react";
import { string } from "prop-types";
import { Line } from "react-chartjs-2";
import { getSpecificHistorical } from "../../api/ApiCalls";
import NoDataLogo from "../../assets/icons/no-data.svg";

function Historical({ selectedCountry, historyOption }) {
  const history = getSpecificHistorical(selectedCountry, historyOption);

  if (history === null) {
    return (
      <div className="no-data-container">
        <img src={NoDataLogo} alt="no data" />
        <h3>
          {selectedCountry} has no historical data from Open Disease Data API.
        </h3>
      </div>
    );
  }

  const casesTimeline = history.timeline.cases;
  const deathsTimeline = history.timeline.deaths;
  const recoverTimeline = history.timeline.recovered;

  const data = {
    labels: Array.from(Object.keys(casesTimeline)),
    datasets: [
      {
        label: "Confirm Cases",
        data: Array.from(Object.values(casesTimeline)),
        fill: false,
        borderColor: "#d62828",
      },
      {
        label: "Recovered Cases *",
        data: Array.from(Object.values(recoverTimeline)),
        fill: false,
        borderColor: "#026a41",
      },
      {
        label: "Death Cases",
        data: Array.from(Object.values(deathsTimeline)),
        fill: false,
        borderColor: "#303030",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 2,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: "#003049",
          font: {
            family: `Rubik, sans-serif`,
            size: 13,
          },
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

Historical.propTypes = {
  selectedCountry: string.isRequired,
  historyOption: string.isRequired,
};

export default Historical;
