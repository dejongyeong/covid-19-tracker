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

const Infection = () => (
  <CountBox id="infected" className="data-box">
    <p>Infected</p>
    <h3 id="infected-num">40,975,608</h3>
    <h4>
      + <span id="today-infected">16,753</span>
    </h4>
    <p>Total active and closed cases.</p>
  </CountBox>
);

const Recovered = () => (
  <CountBox id="recovered" className="data-box">
    <p>Recovered</p>
    <h3 id="recovered-num">40,975,608</h3>
    <h4>
      + <span id="today-recovered">16,753</span>
    </h4>
    <p>Total recoveries from Covid.</p>
  </CountBox>
);

const Death = () => (
  <CountBox id="deaths" className="data-box">
    <p>Deaths</p>
    <h3 id="deaths-num">40,975,608</h3>
    <h4>
      + <span id="today-deaths">16,753</span>
    </h4>
    <p>Total death caused by Covid.</p>
  </CountBox>
);

function MobileCountTab() {
  return (
    <HomeMobileTab
      infected={<Infection />}
      recovered={<Recovered />}
      death={<Death />}
    />
  );
}

// Tutorial: https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
function CountriesDropdown({ countriesDropdown, isError, onChildChange }) {
  function handleChange(event) {
    onChildChange(event.target.value);
  }

  console.log(isError);

  return (
    <select onChange={handleChange} style={{ width: "100%" }}>
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
  const [select, setSelected] = React.useState(`${countriesDropdown[0].text}`);

  function handleChildChange(selected) {
    setSelected(selected);
  }

  return (
    <Theme>
      <Wrapper id="covid-data">
        <HeaderWrapper>
          <h3 id="country-name">{select}</h3>
          <p id="last-updated">Last updated: 20th October 2020</p>
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
              <Infection />
              <Recovered />
              <Death />
            </CountBoxWrapper>
            <MobileCountBoxWrapper>
              <MobileCountTab />
            </MobileCountBoxWrapper>
          </CountWrapper>
          <GraphWrapper>Graph</GraphWrapper>
        </DataWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Home;
