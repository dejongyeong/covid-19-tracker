import React, { useEffect } from "react";
import axios from "axios";

import { COUNTRIES } from "../api/ApiConstant";

// Tutorial: https://www.robinwieruch.de/react-hooks-fetch-data
// Tutorial: https://reactjs.org/docs/hooks-custom.html
const getCountries = () => {
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

  // initialize
  // const countriesDropdown = [
  //   {
  //     key: "ww",
  //     value: "ww",
  //     text: "Worldwide",
  //     indexes: 0,
  //   },
  // ];
  // countries.map((country, index) =>
  //   countriesDropdown.push({
  //     key: "iso2" in country ? country.iso2.toLowerCase() : country.name,
  //     value: "iso2" in country ? country.iso2.toLowerCase() : country.name,
  //     text: country.name === "Taiwan*" ? "Taiwan" : country.name,
  //     indexes: index + 1,
  //   })
  // );

  return countries;
};

export default getCountries;
