import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import {
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

export const getSpecificHistorical = (country, historyOption) => {
  const [history, setHistory] = React.useState(null);
  React.useMemo(() => {
    let unmounted = false;
    const fetchHistoricalData = async () => {
      try {
        if (!unmounted) {
          const result = await axios(
            `${COUNTRY_HISTORICAL_API}/${country}?lastdays=${historyOption}`
          );
          setHistory(result.data);
        }
      } catch (error) {
        setHistory(null);
      }
    };
    fetchHistoricalData();
    return () => {
      unmounted = true;
    };
  }, [country, historyOption]);

  return history;
};
