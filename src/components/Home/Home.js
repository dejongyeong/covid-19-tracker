import React, { useCallback } from "react";
import Theme from "../../theme/Theme";
import ApiError from "../Shared/ApiError";
import Banner from "../Banner";
import Countries from "../CountryList/Countries";
import Graph from "../Graphs/Graph";
import Loading from "../Shared/Loading";
import { Container, Wrapper } from "./HomeStyle";
import {
  getCountriesCases,
  getGlobalHistorical,
  getWorldCases,
} from "../../api/ApiCalls";

function Home() {
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
  const globalHistory = getGlobalHistorical(gatedSetError);

  let dom;
  if (error) {
    dom = <ApiError />;
  } else if (!loading) {
    dom = (
      <>
        <Banner worldCases={worldCases} globalHistory={globalHistory} />
        <Container>
          <div className="country-list">
            <Countries countryCases={countryCases} />
          </div>
          <div className="graph-section">
            <Graph countryCases={countryCases} />
          </div>
        </Container>
        <div className="info-tag">
          <p>
            * Global recovered cases in Open Disease Data API not updated since
            August 5, 2021.
          </p>
        </div>
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
