import React from "react";
import PropTypes from "prop-types";
import Theme from "../../theme/Theme";
import HomeMobileTab from "./HomeMobileTab";
import {
  CountBox,
  CountBoxWrapper,
  CountWrapper,
  DataWrapper,
  GraphWrapper,
  HeaderWrapper,
  MobileCountBoxWrapper,
  SearchBar,
  Wrapper,
} from "./HomeStyle";

// custom hooks
import getCountries from "../../data/getCountries";
import getCases from "../../data/getCases";

// Infection Card
const Infection = ({ infected }) => (
  <CountBox id="infected" className="data-box">
    <p>Infected</p>
    <h3 id="infected-num">{infected}</h3>
    <h4>
      + <span id="today-infected">16,753</span>
    </h4>
    <p>Total active and closed cases.</p>
  </CountBox>
);

Infection.propTypes = {
  infected: PropTypes.string.isRequired,
};

// Recovered Card
const Recovered = ({ recovered }) => (
  <CountBox id="recovered" className="data-box">
    <p>Recovered</p>
    <h3 id="recovered-num">{recovered}</h3>
    <h4>
      + <span id="today-recovered">16,753</span>
    </h4>
    <p>Total recoveries from Covid.</p>
  </CountBox>
);

Recovered.propTypes = {
  recovered: PropTypes.string.isRequired,
};

// Death Card
const Death = ({ deaths }) => (
  <CountBox id="deaths" className="data-box">
    <p>Deaths</p>
    <h3 id="deaths-num">{deaths}</h3>
    <h4>
      + <span id="today-deaths">16,753</span>
    </h4>
    <p>Total death caused by Covid.</p>
  </CountBox>
);

Death.propTypes = {
  deaths: PropTypes.string.isRequired,
};

// Tutorial: https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
function CountriesDropdown({ countriesDropdown, isError, onChildChange }) {
  function handleChanging(event) {
    onChildChange(event.target.selectedIndex);
  }

  return (
    <select
      onChange={handleChanging}
      style={{ width: "100%" }}
      disabled={!!isError}
    >
      {countriesDropdown.map(({ text }) => (
        <option key={text} value={text}>
          {text}
        </option>
      ))}
    </select>
  );
}

/* eslint-disable react/forbid-prop-types */
CountriesDropdown.propTypes = {
  countriesDropdown: PropTypes.array.isRequired,
  isError: PropTypes.bool.isRequired,
  onChildChange: PropTypes.func.isRequired,
};

function Home() {
  const [countriesDropdown, isError] = getCountries();
  const [select, setSelected] = React.useState(0);
  const selectedCountry = countriesDropdown[select].text;
  // eslint-disable-next-line no-unused-vars
  const [cases, error] = getCases(selectedCountry);

  let infected = 0;
  if (!cases) {
    console.log("loading");
  } else {
    infected = cases.confirmed.value;
  }

  function handleChildChange(selected) {
    setSelected(selected);
  }

  // const infected = covidCases.confirmed.value;
  // const recovered = covidCases.recovered.value;
  // const deaths = covidCases.deaths.value;
  // const lastUpdated = covidCases.lastUpdate;

  // const date = new Date(lastUpdated).toISOString().split("T")[0];
  // const time = new Date(lastUpdated).toISOString().split("T")[1].slice(0, -5);

  function formatNumber(number) {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <Theme>
      <Wrapper id="covid-data">
        <HeaderWrapper>
          <h3 id="country-name">{selectedCountry}</h3>
          <p id="last-updated">Last updated: {infected}</p>
        </HeaderWrapper>
        <DataWrapper>
          <CountWrapper>
            <SearchBar>
              <CountriesDropdown
                countriesDropdown={countriesDropdown}
                isError={isError}
                onChildChange={handleChildChange}
              />
            </SearchBar>
            <CountBoxWrapper>
              <Infection infected={formatNumber(123456)} />
              <Recovered recovered={formatNumber(123456)} />
              <Death deaths={formatNumber(123456)} />
            </CountBoxWrapper>
            <MobileCountBoxWrapper>
              <HomeMobileTab
                infected={<Infection infected={formatNumber(123456)} />}
                recovered={<Recovered recovered={formatNumber(123456)} />}
                death={<Death deaths={formatNumber(123456)} />}
              />
            </MobileCountBoxWrapper>
          </CountWrapper>
          <GraphWrapper>Graph</GraphWrapper>
        </DataWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Home;
