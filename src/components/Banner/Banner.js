import React from "react";
import PropTypes, { number } from "prop-types";
import { Wrapper, BannerWrapper } from "./BannerStyle";
import {
  TotalConfirm,
  TotalDeaths,
  TotalRecovered,
  TotalTested,
} from "./WorldStats";
import { calIncreasePercentage, calPositivityRate } from "../../helpers";

function Banner({ worldCases }) {
  const date = new Date(worldCases.updated).toISOString().split("T")[0];
  const time = new Date(worldCases.updated)
    .toISOString()
    .split("T")[1]
    .slice(0, -5);

  const confirmPercentage = calIncreasePercentage(
    worldCases.cases,
    worldCases.todayCases
  );
  const recoveredPercentage = calIncreasePercentage(
    worldCases.recovered,
    worldCases.todayRecovered
  );
  const deathsPercentage = calIncreasePercentage(
    worldCases.deaths,
    worldCases.todayDeaths
  );
  const positivityRate = calPositivityRate(worldCases.cases, worldCases.tests);

  return (
    <Wrapper>
      <p className="time">Last Updated: {`${date} ${time}`}</p>
      <BannerWrapper>
        <TotalConfirm
          cases={worldCases.cases}
          todayCases={worldCases.todayCases}
          confirmPercentage={confirmPercentage}
        />
        <TotalRecovered
          recovered={worldCases.recovered}
          todayRecovered={worldCases.todayRecovered}
          recoveredPercentage={recoveredPercentage}
        />
        <TotalDeaths
          deaths={worldCases.deaths}
          todayDeaths={worldCases.todayDeaths}
          deathsPercentage={deathsPercentage}
        />
        <TotalTested
          tested={worldCases.tests}
          positivityRate={positivityRate}
        />
      </BannerWrapper>
    </Wrapper>
  );
}

// https://github.com/yannickcr/eslint-plugin-react/issues/2079#issuecomment-537868142
Banner.propTypes = {
  worldCases: PropTypes.shape({
    active: number,
    activePerOneMillion: number,
    affectedCountries: number,
    cases: number,
    casesPerOneMillion: number,
    critical: number,
    criticalPerOneMillion: number,
    deaths: number,
    deathsPerOneMillion: number,
    population: number,
    recovered: number,
    recoveredPerOneMillion: number,
    tests: number,
    testsPerOneMillion: number,
    todayCases: number,
    todayDeaths: number,
    todayRecovered: number,
    updated: number,
  }).isRequired,
};

export default Banner;
