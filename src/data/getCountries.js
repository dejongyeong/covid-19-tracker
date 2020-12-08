import React, { useEffect } from "react";
import axios from "axios";

import { COUNTRIES_URL } from "../theme/ThemeConstant";

// Tutorial: https://www.robinwieruch.de/react-hooks-fetch-data
// Tutorial: https://reactjs.org/docs/hooks-custom.html
const getCountries = () => {
  const [countries, setCountries] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      setIsError(false);
      try {
        const result = await axios(`${COUNTRIES_URL}`);
        setCountries(result.data);
      } catch (error) {
        setIsError(true);
      }
    };

    fetchCountries();
  }, []);

  // initialize
  const countriesDropdown = [
    {
      key: "ww",
      value: "ww",
      flag: "",
      text: "Worldwide",
    },
  ];
  countries.map((country) =>
    countriesDropdown.push({
      key: country.alpha2Code.toLowerCase(),
      value: country.alpha2Code.toLowerCase(),
      flag: country.alpha2Code.toLowerCase(),
      text: country.name,
    })
  );

  return [countriesDropdown, isError];
};

export default getCountries;
