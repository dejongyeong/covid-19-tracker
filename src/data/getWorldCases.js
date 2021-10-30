import React, { useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import { WORLD_CASES_API } from "../api/ApiConstant";

const getWorldCases = (loadingCallback, errorCallback) => {
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

    fetchCases();
  }, []);

  return worldCases;
};

getWorldCases.propTypes = {
  loadingCallback: PropTypes.func.isRequired,
  errorCallback: PropTypes.func.isRequired,
};

export default getWorldCases;
