import React, { useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const COVID_URL = "https://covid19.mathdro.id/api";

// Tutorial: https://www.robinwieruch.de/react-hooks-fetch-data
// Tutorial: https://reactjs.org/docs/hooks-custom.html
const getCases = (countryName) => {
  const [covidCases, setCovidCases] = React.useState(null);
  const [isError, setIsError] = React.useState(false);

  let url = COVID_URL;
  if (countryName.trim().toLowerCase() !== "worldwide") {
    url = `${COVID_URL}/countries/${countryName}`;
  }

  console.log(countryName);
  console.log(url);

  useEffect(() => {
    const fetchCovidCases = async () => {
      setIsError(false);
      try {
        const result = await axios.get(url);

        setCovidCases(result.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchCovidCases();
  }, []);

  console.log(covidCases);

  return [covidCases, isError];
};

getCases.propTypes = {
  countryName: PropTypes.number.isRequired,
};

export default getCases;
