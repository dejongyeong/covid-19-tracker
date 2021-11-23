import React from "react";
import { func, string } from "prop-types";
import { getSpecificHistorical } from "../../api/ApiCalls";

// eslint-disable-next-line no-unused-vars
function Historical({ selectedCountry, gatedSetError }) {
  const history = getSpecificHistorical(selectedCountry, gatedSetError);
  if (history === null) {
    return null;
  }
  return (
    <div>
      <h2>Graph</h2>
    </div>
  );
}

Historical.propTypes = {
  selectedCountry: string.isRequired,
  gatedSetError: func.isRequired,
};

// Historical.propTypes = {
//   countryHistory: PropTypes.shape({
//     country: string,
//     province: PropTypes.arrayOf(string),
//     timeline: PropTypes.shape({
//       cases: PropTypes.objectOf(number),
//       deaths: PropTypes.objectOf(number),
//       recovered: PropTypes.objectOf(number),
//     }).isRequired,
//   }).isRequired,

// };

export default Historical;
