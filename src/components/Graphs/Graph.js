import React, { useState } from "react";
import PropTypes, { number, string } from "prop-types";
import ReactToolTip from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faHandPointer } from "@fortawesome/free-solid-svg-icons";
import { LineGraphContainer, Wrapper } from "./GraphStyle";
import WorldMap from "./WorldMap";
import Historical from "./Historical";

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
  const [content, setContent] = useState("");
  const filteredData = countryCases.map(filterData); // select only the specific data

  const [choices, setChoices] = useState("confirm");
  const handleChange = (event) => {
    setChoices(event.target.value);
  };

  const countries = filteredData.map(({ country }) => country);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <Wrapper>
      <div className="world-map">
        <div className="select-bar">
          <div className="select-icon">
            <FontAwesomeIcon icon={faHandPointer} size="sm" />
          </div>
          <select name="option" value={choices} onChange={handleChange}>
            <option value="confirm">Confirmed Cases Per One Million</option>
            <option value="recover">Recovered Cases Per One Million</option>
            <option value="deaths">Deceased Cases Per One Million</option>
            <option value="tests">
              Covid-19 Test Conducted Per One Million
            </option>
          </select>
        </div>
        <WorldMap
          setTooltip={setContent}
          filteredData={filteredData}
          choices={choices}
        />
        <ReactToolTip className="custom-tooltip">{content}</ReactToolTip>
      </div>
      <LineGraphContainer>
        <div className="select-bar">
          <div className="select-icon">
            <FontAwesomeIcon icon={faGlobe} size="sm" />
          </div>
          <select
            name="option"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
          >
            {countries.map((country, index) => (
              <option key={`${country + index}`} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <Historical selectedCountry={selectedCountry} />
      </LineGraphContainer>
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
