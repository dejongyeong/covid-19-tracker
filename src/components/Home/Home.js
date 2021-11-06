import React, { useCallback } from "react";
import PropTypes, { number } from "prop-types";
import Theme from "../../theme/Theme";
// import HomeMobileTab from "./HomeMobileTab";
import { Wrapper } from "./HomeStyle";
import ApiError from "../Shared/ApiError";
import Banner from "../Banner";
import Loading from "../Shared/Loading";

// custom hooks
import { getWorldCases } from "../../api/ApiCalls";

const Dashboard = ({ worldCases }) => {
  return (
    <>
      <Banner worldCases={worldCases} />
    </>
  );
};

Dashboard.propTypes = {
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

// Tutorial: https://dev.to/spukas/moving-arguments-from-child-to-parent-component-in-react-25lp
// function CountriesDropdown({ countriesDropdown, isError, onChildChange }) {
//   function handleChanging(event) {
//     onChildChange(event.target.selectedIndex);
//   }

//   return (
//     <select
//       onChange={handleChanging}
//       style={{ width: "100%" }}
//       disabled={!!isError}
//     >
//       {countriesDropdown.map(({ text }) => (
//         <option key={text} value={text}>
//           {text}
//         </option>
//       ))}
//     </select>
//   );
// }

/* eslint-disable react/forbid-prop-types */
// CountriesDropdown.propTypes = {
//   countriesDropdown: PropTypes.array.isRequired,
//   isError: PropTypes.bool.isRequired,
//   onChildChange: PropTypes.func.isRequired,
// };

// const Dashboard = ({ countries, country, error, setSelected, cases }) => {
//   const handleChildChange = (select) => {
//     setSelected(select);
//   };

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
