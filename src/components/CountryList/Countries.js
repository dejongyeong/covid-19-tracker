import React from "react";
import PropTypes, { number, string } from "prop-types";

function Countries({ countryCases }) {
  console.log(countryCases);
  return (
    <div>
      <div>xxx</div>
    </div>
  );
}

Countries.propTypes = {
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
        continent: number,
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

export default Countries;
