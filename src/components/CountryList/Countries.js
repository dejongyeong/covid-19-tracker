import React from "react";
import PropTypes, { number, string } from "prop-types";

import { Wrapper } from "./CountriesStyle";
import { numberWithCommas } from "../../helpers";

/** Design Idea: https://www.worldometers.info/coronavirus */
function Countries({ countryCases }) {
  console.log(countryCases);
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Confirmed</th>
            <th>New Cases</th>
            <th>Deaths</th>
            <th>New Deaths</th>
            <th>Recovered</th>
            <th>New Recovered</th>
          </tr>
        </thead>
        <tbody>
          {countryCases.map((countryCase) => (
            <tr key={`${countryCase.country}_${countryCase.countryInfo.iso3}`}>
              <td>{countryCase.country}</td>
              <td>{numberWithCommas(countryCase.cases)}</td>
              <td className="todayCases">
                + {numberWithCommas(countryCase.todayCases)}
              </td>
              <td>{numberWithCommas(countryCase.deaths)}</td>
              <td className="todayDeaths">
                + {numberWithCommas(countryCase.todayDeaths)}
              </td>
              <td>{numberWithCommas(countryCase.recovered)}</td>
              <td className="todayRecover">
                + {numberWithCommas(countryCase.todayRecovered)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
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
