import React, { useCallback } from "react";
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
  LoadingDiv,
  ApiErrorDiv,
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

const Loading = () => {
  return (
    <LoadingDiv>
      <h1 style={{ color: "black" }}>Loading</h1>
    </LoadingDiv>
  );
};

const ApiError = () => {
  return (
    <ApiErrorDiv>
      <h1>API Error</h1>
    </ApiErrorDiv>
  );
};

const Dashboard = ({ countries, country, error, setSelected, cases }) => {
  const date = new Date(cases.lastUpdate).toISOString().split("T")[0];
  const time = new Date(cases.lastUpdate)
    .toISOString()
    .split("T")[1]
    .slice(0, -5);

  const formatNumber = (number) => {
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleChildChange = (select) => {
    setSelected(select);
  };

  const infected = cases.confirmed.value;
  const recovered = cases.recovered.value;
  const deaths = cases.deaths.value;

  const InfectedDom = <Infection infected={formatNumber(infected)} />;
  const RecoveredDom = (
    <Recovered recovered={recovered === 0 ? "-" : formatNumber(recovered)} />
  );
  const DeathDom = <Death deaths={formatNumber(deaths)} />;

  return (
    <>
      <HeaderWrapper>
        <h3 id="country-name">{country}</h3>
        <p id="last-updated">Last updated: {`${date} ${time}`}</p>
      </HeaderWrapper>
      <DataWrapper>
        <CountWrapper>
          <SearchBar>
            <CountriesDropdown
              countriesDropdown={countries}
              isError={error}
              onChildChange={handleChildChange}
            />
          </SearchBar>
          <CountBoxWrapper>
            {InfectedDom}
            {RecoveredDom}
            {DeathDom}
          </CountBoxWrapper>
          <MobileCountBoxWrapper>
            <HomeMobileTab
              infected={InfectedDom}
              recovered={RecoveredDom}
              death={DeathDom}
            />
          </MobileCountBoxWrapper>
        </CountWrapper>
        <GraphWrapper>Graph</GraphWrapper>
      </DataWrapper>
    </>
  );
};

Dashboard.propTypes = {
  countries: PropTypes.array.isRequired,
  country: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  setSelected: PropTypes.func.isRequired,
  cases: PropTypes.object.isRequired,
};

function Home() {
  const [countries, countryError] = getCountries(); // retrieve all countries
  const [selected, setSelected] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const gatedSetLoading = useCallback(() => {
    setLoading(false);
  }, []);

  const gatedSetSelected = useCallback((value) => {
    setSelected(value);
  }, []);

  const country = countries[selected].text;

  const [cases, caseError] = getCases(country, gatedSetLoading);

  let dom;
  if (countryError && caseError) {
    dom = <ApiError />;
  } else if (!loading) {
    dom = (
      <Dashboard
        countries={countries}
        country={country}
        error={countryError}
        setLoading={gatedSetLoading}
        setSelected={gatedSetSelected}
        cases={cases}
      />
    );
  }

  return (
    <Theme>
      <Wrapper id="covid-data">{loading ? <Loading /> : dom}</Wrapper>
    </Theme>
  );

  // // eslint-disable-next-line no-unused-vars
  // const [cases, error] = getCases(selectedCountry);

  // let infected = 0;
  // if (!cases) {
  //   console.log("loading");
  // } else {
  //   infected = cases.confirmed.value;
  // }

  // // const infected = covidCases.confirmed.value;
  // // const recovered = covidCases.recovered.value;
  // // const deaths = covidCases.deaths.value;
  // // const lastUpdated = covidCases.lastUpdate;

  // // const date = new Date(lastUpdated).toISOString().split("T")[0];
  // // const time = new Date(lastUpdated).toISOString().split("T")[1].slice(0, -5);
}

export default Home;
