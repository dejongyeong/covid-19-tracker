// eslint-disable-next-line import/prefer-default-export
export const URL = "https://disease.sh/v3/covid-19";

export const WORLD_CASES_API = `${URL}/all`;
export const COUNTRIES_CASES_API = `${URL}/countries`;
export const GLOBAL_HISTORY_API = `${URL}/historical/all?lastdays=all`;
export const COUNTRY_HISTORICAL_API = `${URL}/historical`;

// for react simple map
export const GEO_URL =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
