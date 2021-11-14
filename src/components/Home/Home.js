import React, { useCallback } from "react";
import Theme from "../../theme/Theme";
import ApiError from "../Shared/ApiError";
import Banner from "../Banner";
import Countries from "../CountryList/Countries";
import Loading from "../Shared/Loading";
import { Container, Wrapper } from "./HomeStyle";

// custom hooks
import { getCountriesCases, getWorldCases } from "../../api/ApiCalls";

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const gatedSetLoading = useCallback(() => {
    setLoading(false);
  }, []);
  const gatedSetError = useCallback(() => {
    setError(true);
  }, []);

  // get data
  const worldCases = getWorldCases(gatedSetLoading, gatedSetError);
  const countryCases = getCountriesCases(gatedSetError);

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
      <>
        <Banner worldCases={worldCases} />
        <Container>
          <div className="country-list">
            <Countries countryCases={countryCases} />
          </div>
          <div className="graph-section">xxx</div>
        </Container>
      </>
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
