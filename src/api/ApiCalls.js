import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import {
  COUNTRIES,
  COUNTRIES_CASES_API,
  COUNTRY_HISTORICAL_API,
  GLOBAL_HISTORY_API,
  WORLD_CASES_API,
} from "./ApiConstant";

/**
 * Function that returns worldwide covid cases
 * @param {function} loadingCallback
 * @param {function} errorCallback
 * @returns {json} worldCases      World Cases
 */
export const getWorldCases = (loadingCallback, errorCallback) => {
  const [worldCases, setWorldCases] = React.useState(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const result = await axios(`${WORLD_CASES_API}`);
        setWorldCases(result.data);
        loadingCallback(false);
      } catch (error) {
        errorCallback(true);
      }
    };
    const timer = setTimeout(() => {
      fetchCases();
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return worldCases;
};

getWorldCases.propTypes = {
  loadingCallback: PropTypes.func.isRequired,
  errorCallback: PropTypes.func.isRequired,
};

export const getCountriesCases = (errorCallback) => {
  const [countriesCases, setCountriesCases] = React.useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await axios(`${COUNTRIES_CASES_API}`);
        setCountriesCases(result.data);
      } catch (error) {
        errorCallback(true);
      }
    };
    fetchCountries();
  }, []);

  return countriesCases;
};

getCountriesCases.PropTypes = {
  errorCallback: PropTypes.func.isRequired,
};

export const getGlobalHistorical = (errorCallback) => {
  const [global, setGlobal] = React.useState(null);

  useEffect(() => {
    const fetchGlobalHistory = async () => {
      try {
        const result = await axios(`${GLOBAL_HISTORY_API}`);
        setGlobal(result.data);
      } catch (error) {
        errorCallback(true);
      }
    };
    fetchGlobalHistory();
  }, []);

  return global;
};

export const getSpecificHistorical = (country, errorCallback) => {
  const [history, setHistory] = React.useState(null);
  React.useMemo(() => {
    let unmounted = false;
    const fetchHistoricalData = async () => {
      try {
        if (!unmounted) {
          const result = await axios(`${COUNTRY_HISTORICAL_API}/${country}`);
          setHistory(result.data);
        }
      } catch (error) {
        errorCallback(true);
      }
    };
    fetchHistoricalData();
    return () => {
      unmounted = true;
    };
  }, [country]);

  return history;
};

// ****************** remove below *************************

/**
 * Function that returns a list of countries
 * Tutorial: https://www.robinwieruch.de/react-hooks-fetch-data and https://reactjs.org/docs/hooks-custom.html
 * @returns {array} countries
 */
export const getCountries = () => {
  const [countries, setCountries] = React.useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = React.useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await axios(`${COUNTRIES}`);
        setCountries(result);
        console.log(result);
      } catch (error) {
        setIsError(true);
      }
    };
    fetchCountries();
  }, []);

  return countries;
};

/**
 * Function that returns covid cases of a specific country
 * @param {string} countryName
 * @param {function} loadingCallback
 * @returns {json} covidCases
 */
export const getCases = (countryName, loadingCallback) => {
  const [covidCases, setCovidCases] = React.useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isError, setIsError] = React.useState(false);

  let url = `${URL}/all`;
  if (countryName.trim().toLowerCase() !== "worldwide") {
    const country = countryName.replaceAll(" ", "%20").trim();
    url = `${URL}/countries/${country}`;
  }

  useEffect(() => {
    const fetchCases = async () => {
      axios({
        method: "GET",
        url,
      })
        .then((response) => {
          setCovidCases(response.data);
          loadingCallback(false);
        })
        .catch(() => {
          setIsError(true);
        });
    };
    fetchCases();
  }, []);

  return covidCases;
};

getCases.propTypes = {
  countryName: PropTypes.number.isRequired,
  loadingCallback: PropTypes.func.isRequired,
};
