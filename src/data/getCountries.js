import React, { useEffect } from "react";
import axios from "axios";

import { URL } from "../theme/ThemeConstant";

const COUNTRIES_URL = `${URL}/countries`;

// Tutorial: https://www.robinwieruch.de/react-hooks-fetch-data
// Tutorial: https://reactjs.org/docs/hooks-custom.html
const getCountries = () => {
  const [countries, setCountries] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  let unmounted = false; // resolve unmount of component
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const result = await axios(`${COUNTRIES_URL}`);
        if (!unmounted) {
          setCountries(result.data.countries);
        }
      } catch (error) {
        setIsError(true);
      }
    };

    fetchCountries();
    return () => {
      unmounted = true;
    };
  }, []);

  // initialize
  const countriesDropdown = [
    {
      key: "ww",
      value: "ww",
      flag: "",
      text: "Worldwide",
      indexes: 0,
    },
  ];
  countries.map((country, index) =>
    countriesDropdown.push({
      key: "iso2" in country ? country.iso2.toLowerCase() : country.name,
      value: "iso2" in country ? country.iso2.toLowerCase() : country.name,
      flag: "iso2" in country ? country.iso2.toLowerCase() : "",
      text: country.name,
      indexes: index + 1,
    })
  );

  return [countriesDropdown, isError];
};

export default getCountries;
