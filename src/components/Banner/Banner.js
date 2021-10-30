import React from "react";
import PropTypes, { number } from "prop-types";
import { Wrapper, BannerWrapper, Card } from "./BannerStyle";

function Banner({ worldCases }) {
  const date = new Date(worldCases.updated).toISOString().split("T")[0];
  const time = new Date(worldCases.updated)
    .toISOString()
    .split("T")[1]
    .slice(0, -5);

  console.log(worldCases);

  return (
    <Wrapper>
      <p className="time">Last Updated: {date + time}</p>
      <BannerWrapper>
        <Card className="banner-one">
          <h5>Total Confirmed</h5>
        </Card>
        <Card className="banner-two">
          <h5>Total Recovered</h5>
        </Card>
        <Card className="banner-three">
          <h5>Total Deaths</h5>
        </Card>
        <Card className="banner-four">
          <h5>Total Tested</h5>
        </Card>
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
