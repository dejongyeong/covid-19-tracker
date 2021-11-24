import React from "react";
import PropTypes, { string } from "prop-types";
import { Line } from "react-chartjs-2";
import { getSpecificHistorical } from "../../api/ApiCalls";
import NoDataLogo from "../../assets/icons/no-data.svg";

const NoData = ({ selectedCountry }) => {
  return (
    <div className="no-data-container">
      <img src={NoDataLogo} alt="no data" />
      <h3>
        {selectedCountry} has no historical data from Open Disease Data API.
      </h3>
    </div>
  );
};
NoData.propTypes = {
  selectedCountry: string.isRequired,
};

const RetrieveData = ({ casesTimeline, deathsTimeline, recoverTimeline }) => {
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

  // responsive legends: https://stackoverflow.com/questions/50475563/making-the-labels-responsive-in-chart-js
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
          font(context) {
            const { width } = context.chart;
            let size = 13;
            if (window.matchMedia("(max-width: 424.98px)").matches) {
              size = Math.round(width / 32);
            }
            return {
              size,
              family: `Rubik, sans-serif`,
            };
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
};
RetrieveData.propTypes = {
  casesTimeline: PropTypes.objectOf(PropTypes.number).isRequired,
  deathsTimeline: PropTypes.objectOf(PropTypes.number).isRequired,
  recoverTimeline: PropTypes.objectOf(PropTypes.number).isRequired,
};

function Historical({ selectedCountry, historyOption }) {
  const history = getSpecificHistorical(selectedCountry, historyOption);

  if (history === null) {
    return <NoData selectedCountry={selectedCountry} />;
  }

  const casesTimeline = history.timeline.cases;
  const deathsTimeline = history.timeline.deaths;
  const recoverTimeline = history.timeline.recovered;
  return (
    <RetrieveData
      casesTimeline={casesTimeline}
      deathsTimeline={deathsTimeline}
      recoverTimeline={recoverTimeline}
    />
  );
}

Historical.propTypes = {
  selectedCountry: string.isRequired,
  historyOption: string.isRequired,
};

export default Historical;
