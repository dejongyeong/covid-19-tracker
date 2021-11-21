import React from "react";
import PropTypes, { number, string } from "prop-types";
import ReactToolTip from "react-tooltip";

import { Wrapper } from "./GraphStyle";
import WorldMap from "./WorldMap";

// reference: https://levelup.gitconnected.com/how-to-select-specific-properties-from-an-array-of-objects-bd9f6c15dbd0
const filterData = (data) => {
  const {
    country,
    countryInfo,
    casesPerOneMillion,
    deathsPerOneMillion,
    testsPerOneMillion,
    recoveredPerOneMillion,
    activePerOneMillion,
    criticalPerOneMillion,
  } = data;

  return {
    country,
    countryInfo,
    casesPerOneMillion,
    deathsPerOneMillion,
    testsPerOneMillion,
    recoveredPerOneMillion,
    activePerOneMillion,
    criticalPerOneMillion,
  };
};

function Graph({ countryCases }) {
  const [content, setContent] = React.useState("");
  const filteredData = countryCases.map(filterData); // select only the specific data

  return (
    <Wrapper>
      <div className="world-map">
        <div className="title">
          <h3>Confirmed Covid-19 Cases Per One Million</h3>
        </div>
        <WorldMap setTooltip={setContent} filteredData={filteredData} />
        <ReactToolTip className="custom-tooltip">{content}</ReactToolTip>
      </div>
    </Wrapper>
  );
}

Graph.propTypes = {
  countryCases: PropTypes.arrayOf(
    PropTypes.shape({
      countryCases: PropTypes.shape({
        updated: number,
        country: string,
        countryInfo: PropTypes.shape({
          _id: number,
          iso2: string,
          iso3: string,
          lat: number,
          long: number,
          flag: string,
        }),
        cases: number,
        todayCases: number,
        deaths: number,
        todayDeaths: number,
        recovered: number,
        todayRecovered: number,
        active: number,
        critical: number,
        casesPerOneMillion: number,
        deathsPerOneMillion: number,
        tests: number,
        testsPerOneMillion: number,
        population: number,
        continent: string,
        oneCasePerPeople: number,
        oneDeathPerPeople: number,
        oneTestPerPeople: number,
        activePerOneMillion: number,
        recoveredPerOneMillion: number,
        criticalPerOneMillion: number,
      }),
    })
  ).isRequired,
};

export default Graph;
