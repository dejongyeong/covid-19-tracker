import React from "react";
import PropTypes, { number } from "prop-types";
import { Wrapper, BannerWrapper } from "./BannerStyle";
import {
  TotalConfirm,
  TotalDeaths,
  TotalRecovered,
  ActiveCases,
} from "./WorldStats";
import { calIncreasePercentage } from "../../helpers";

function Banner({ worldCases, globalHistory }) {
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

  return (
    <Wrapper>
      <p className="time">Last Updated: {`${date} ${time}`}</p>
      <BannerWrapper>
        <TotalConfirm
          cases={worldCases.cases}
          todayCases={worldCases.todayCases}
          confirmPercentage={confirmPercentage}
          globalHistoryCases={globalHistory.cases}
        />
        <TotalRecovered
          recovered={worldCases.recovered}
          todayRecovered={worldCases.todayRecovered}
          recoveredPercentage={recoveredPercentage}
          globalHistoryRecovered={globalHistory.recovered}
        />
        <TotalDeaths
          deaths={worldCases.deaths}
          todayDeaths={worldCases.todayDeaths}
          deathsPercentage={deathsPercentage}
          globalHistoryDeaths={globalHistory.deaths}
        />
        <ActiveCases
          active={worldCases.active}
          critical={worldCases.critical}
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
  globalHistory: PropTypes.shape({
    cases: PropTypes.objectOf(PropTypes.number),
    deaths: PropTypes.objectOf(PropTypes.number),
    recovered: PropTypes.objectOf(PropTypes.number),
  }).isRequired,
};

export default Banner;
