import React, { memo } from "react";
import PropTypes, { number, string } from "prop-types";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { GEO_URL } from "../../api/ApiConstant";

// functional methods to filter only the specific element/key
const options = (choices, filteredData) => {
  switch (choices) {
    case "recover":
      return [
        filteredData.map(
          ({ recoveredPerOneMillion }) => recoveredPerOneMillion
        ),
        ["#7dc9ab", "#026a41"],
      ];
    case "deaths":
      return [
        filteredData.map(({ deathsPerOneMillion }) => deathsPerOneMillion),
        ["#b0b0b0", "#303030"],
      ];
    case "tests":
      return [
        filteredData.map(({ testsPerOneMillion }) => testsPerOneMillion),
        ["#ccb399", "#9c5000"],
      ];
    default:
      return [
        filteredData.map(({ casesPerOneMillion }) => casesPerOneMillion),
        ["#ff8c8c", "#d62828"],
      ];
  }
};

// functional methods to calculate the color range
const selectedColor = (minVal, maxVal, colors, selectedOption, data) => {
  const colorScale = scaleLinear().domain([minVal, maxVal]).range(colors);

  switch (selectedOption) {
    case "recover":
      return colorScale(data.recoveredPerOneMillion);
    case "deaths":
      return colorScale(data.deathsPerOneMillion);
    case "tests":
      return colorScale(data.testsPerOneMillion);
    default:
      return colorScale(data.casesPerOneMillion);
  }
};

// functional methods to retrieve the ... per one million value
const casesValue = (selectedOption, data) => {
  switch (selectedOption) {
    case "recover":
      return data.recoveredPerOneMillion;
    case "deaths":
      return data.deathsPerOneMillion;
    case "tests":
      return data.testsPerOneMillion;
    default:
      return data.casesPerOneMillion;
  }
};

// functional methods to style the legend
const legendStyle = (selectedOption) => {
  switch (selectedOption) {
    case "recover":
      return `box-gradient-recover`;
    case "deaths":
      return `box-gradient-deaths`;
    case "tests":
      return `box-gradient-tests`;
    default:
      return `box-gradient-cases`;
  }
};

// const colorScaleStyle = (color) => {};

// resolve d3 jest issue: https://stackoverflow.com/questions/69075510/jest-tests-failing-on-d3-import
function WorldMap({ setTooltip, filteredData, choices }) {
  const mapWidth = 800;
  const mapHeight = 410;

  const selectedValues = options(choices, filteredData);
  const minVal = Math.min(...selectedValues[0]);
  const maxVal = Math.max(...selectedValues[0]);

  return (
    <div className="map-chart">
      <div className="maps">
        <ComposableMap
          projectionConfig={{ scale: 140 }}
          height={mapHeight}
          width={mapWidth}
          data-tip=""
        >
          <ZoomableGroup
            minZoom={1}
            maxZoom={5}
            translateExtent={[
              [0, -mapHeight],
              [mapWidth, mapHeight],
            ]}
          >
            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  const d = filteredData.find(
                    (s) => s.countryInfo.iso3 === geo.properties.ISO_A3
                  );

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={
                        d
                          ? selectedColor(
                              minVal,
                              maxVal,
                              selectedValues[1],
                              choices,
                              d
                            )
                          : "#F5F4F6"
                      }
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setTooltip(
                          `${NAME}: ${
                            d ? casesValue(choices, d).toLocaleString() : ""
                          }`
                        );
                      }}
                      onClick={() => {
                        const { NAME } = geo.properties;
                        setTooltip(
                          `${NAME}: ${
                            d ? casesValue(choices, d).toLocaleString() : ""
                          }`
                        );
                      }}
                      onMouseLeave={() => {
                        setTooltip("");
                      }}
                      style={{
                        default: { outline: "none" },
                        hover: { outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className="map-info">
        <div className="box">
          <span>{Math.ceil(minVal).toLocaleString()}</span>
          <span className="empty-display" />
          <span className="max-value">
            {Math.ceil(maxVal).toLocaleString()}
          </span>
        </div>
        <div className={legendStyle(choices)} />
      </div>
    </div>
  );
}

WorldMap.propTypes = {
  setTooltip: PropTypes.func.isRequired,
  filteredData: PropTypes.arrayOf(
    PropTypes.shape({
      countryCases: PropTypes.shape({
        country: string,
        countryInfo: PropTypes.shape({
          _id: number,
          iso2: string,
          iso3: string,
          lat: number,
          long: number,
          flag: string,
        }),
        casesPerOneMillion: number,
        deathsPerOneMillion: number,
        testsPerOneMillion: number,
        activePerOneMillion: number,
        recoveredPerOneMillion: number,
        criticalPerOneMillion: number,
      }),
    })
  ).isRequired,
  choices: string.isRequired,
};

export default memo(WorldMap);
