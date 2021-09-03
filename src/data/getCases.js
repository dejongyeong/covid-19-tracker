import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { URL } from "../api/ApiConstant";

// Tutorial: https://www.robinwieruch.de/react-hooks-fetch-covidCasea
// Tutorial: https://reactjs.org/docs/hooks-custom.html
// Tutorial: https://www.carlrippon.com/drop-down-data-binding-with-react-hooks/
const getCases = (countryName, loadingCallback) => {
  const [covidCases, setCovidCases] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

  let url = `${URL}/all`;
  if (countryName.trim().toLowerCase() !== "worldwide") {
    const country = countryName.replaceAll(" ", "%20").trim();
    url = `${URL}/countries/${country}`;
  }

  let unmounted = false; // resolve unmounted
  useEffect(() => {
    const fetchCases = async () => {
      axios({
        method: "GET",
        url,
      })
        .then((response) => {
          if (!unmounted) {
            setCovidCases(response.data);
            loadingCallback(false);
          }
        })
        .catch(() => {
          setIsError(true);
        });
    };

    fetchCases();
    return () => {
      unmounted = true;
    };
  }, [url]);

  // another method
  // const fetchData = React.useCallback(() => {
  //   axios({
  //     method: "GET",
  //     url,
  //   })
  //     .then((response) => {
  //       setCovidCases(response.data);
  //     })
  //     .catch(() => {
  //       setIsError(true);
  //     });
  // });

  // React.useEffect(() => {
  //   fetchData();
  // }, [url]);

  return [covidCases, isError];
};

getCases.propTypes = {
  countryName: PropTypes.number.isRequired,
  loadingCallback: PropTypes.func.isRequired,
};

export default getCases;
