import React, { useCallback } from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";
import Theme from "../../theme/Theme";
// import HomeMobileTab from "./HomeMobileTab";
import {
  CountBox,
  // CountBoxWrapper,
  // CountWrapper,
  // DataWrapper,
  // GraphWrapper,
  // HeaderWrapper,
  // MobileCountBoxWrapper,
  // SearchBar,
  Wrapper,
} from "./HomeStyle";
import ApiError from "../Shared/ApiError";
import Banner from "../Banner";
import Loading from "../Shared/Loading";

// custom hooks
// import getCountries from "../../data/getCountries";
// import getCases from "../../data/getCases";
import getWorldCases from "../../data/getWorldCases";

// Infection Card
const Infection = ({ infected, todayCases }) => (
  <CountBox id="infected" className="data-box">
    <p>Infected</p>
    <h3 id="infected-num">
      <CountUp end={infected} duration={3} separator="," useEasing />
    </h3>
    <h4>
      +{" "}
      <span id="today-infected">
        <CountUp start={todayCases} end={todayCases} separator="," />
      </span>
    </h4>
    <p>Total cases.</p>
  </CountBox>
);

Infection.propTypes = {
  infected: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
};

// Recovered Card
const Recovered = ({ recovered, todayCases }) => (
  <CountBox id="recovered" className="data-box">
    <p>Recovered {recovered === 0 ? "(Not Reported)" : null}</p>
    <h3 id="recovered-num">
      <CountUp end={recovered} duration={3.5} separator="," useEasing />
    </h3>
    <h4>
      +{" "}
      <span id="today-recovered">
        <CountUp start={todayCases} end={todayCases} separator="," />
      </span>{" "}
    </h4>
    <p>Total recoveries.</p>
  </CountBox>
);

Recovered.propTypes = {
  recovered: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
};

// Death Card
const Death = ({ deaths, todayCases }) => (
  <CountBox id="deaths" className="data-box">
    <p>Deaths</p>
    <h3 id="deaths-num">
      <CountUp end={deaths} duration={3} separator="," useEasing />
    </h3>
    <h4>
      +{" "}
      <span id="today-deaths">
        <CountUp start={todayCases} end={todayCases} separator="," />
      </span>
    </h4>
    <p>Total deaths.</p>
  </CountBox>
);

Death.propTypes = {
  deaths: PropTypes.number.isRequired,
  todayCases: PropTypes.number.isRequired,
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

// const Dashboard = ({ countries, country, error, setSelected, cases }) => {
//   const date = new Date(cases.updated).toISOString().split("T")[0];
//   const time = new Date(cases.updated).toISOString().split("T")[1].slice(0, -5);

//   const handleChildChange = (select) => {
//     setSelected(select);
//   };

//   // accumulated cases - API returned value might mismatch due to browser cache
//   const infect = cases.cases;
//   const recover = cases.recovered;
//   const death = cases.deaths;

//   const InfectedDom = (
//     <Infection infected={infect} todayCases={cases.todayCases} />
//   );
//   const RecoveredDom = (
//     <Recovered recovered={recover} todayCases={cases.todayRecovered} />
//   );
//   const DeathDom = <Death deaths={death} todayCases={cases.todayDeaths} />;

//   return (
//     <>
//       <Banner />
//       <HeaderWrapper>
//         <h3 id="country-name">{country}</h3>
//         <p id="last-updated">Last updated: {`${date} ${time}`}</p>
//       </HeaderWrapper>
//       <DataWrapper>
//         <CountWrapper>
//           <SearchBar>
//             <CountriesDropdown
//               countriesDropdown={countries}
//               isError={error}
//               onChildChange={handleChildChange}
//             />
//           </SearchBar>
//           <CountBoxWrapper>
//             {InfectedDom}
//             {RecoveredDom}
//             {DeathDom}
//           </CountBoxWrapper>
//           <MobileCountBoxWrapper>
//             <HomeMobileTab
//               infected={InfectedDom}
//               recovered={RecoveredDom}
//               death={DeathDom}
//             />
//           </MobileCountBoxWrapper>
//         </CountWrapper>
//         <GraphWrapper>Graph</GraphWrapper>
//       </DataWrapper>
//     </>
//   );
// };

// Dashboard.propTypes = {
//   countries: PropTypes.array.isRequired,
//   country: PropTypes.string.isRequired,
//   error: PropTypes.bool.isRequired,
//   setSelected: PropTypes.func.isRequired,
//   cases: PropTypes.object.isRequired,
// };

const Dashboard = ({ worldCases }) => {
  console.log(worldCases);
  return (
    <>
      <Banner worldCases={worldCases} />
    </>
  );
};

Dashboard.propTypes = {
  worldCases: PropTypes.object.isRequired,
};

function Home() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const gatedSetLoading = useCallback(() => {
    setLoading(false);
  }, []);
  const gatedSetError = useCallback(() => {
    setError(true);
  }, []);

  // world data
  const world = getWorldCases(gatedSetLoading, gatedSetError);

  // const [countries, countryError] = getCountries(); // retrieve all countries
  // const [selected, setSelected] = React.useState(0);

  // const gatedSetSelected = useCallback((value) => {
  //   setSelected(value);
  // }, []);

  // const country = countries[selected].text;
  // const [cases, caseError] = getCases(country, gatedSetLoading);

  let dom;
  if (error) {
    dom = <ApiError />;
  } else if (!loading) {
    dom = (
      <Dashboard worldCases={world} />
      // <Dashboard
      //   countries={countries}
      //   country={country}
      //   error={countryError}
      //   setLoading={gatedSetLoading}
      //   setError={gatedSetError}
      //   setSelected={gatedSetSelected}
      //   cases={cases}
      // />
    );
  }

  return (
    <Theme>
      <Wrapper id="covid-data">{loading ? <Loading /> : dom}</Wrapper>
    </Theme>
  );
}

export default Home;
