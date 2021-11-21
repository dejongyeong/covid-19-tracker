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

// resolve d3 jest issue: https://stackoverflow.com/questions/69075510/jest-tests-failing-on-d3-import

// eslint-disable-next-line no-unused-vars
function WorldMap({ setTooltip, filteredData }) {
  const mapWidth = 800;
  const mapHeight = 410;

  const casesPerMillion = filteredData.map(
    ({ casesPerOneMillion }) => casesPerOneMillion
  );

  const minVal = Math.min(...casesPerMillion);
  const maxVal = Math.max(...casesPerMillion);

  const colorScale = scaleLinear()
    .domain([minVal, maxVal])
    .range(["#ff8c8c", "#d62828"]);

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
                      fill={d ? colorScale(d.casesPerOneMillion) : "#F5F4F6"}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setTooltip(
                          `${NAME}: ${
                            d ? d.casesPerOneMillion.toLocaleString() : ""
                          }`
                        );
                      }}
                      onClick={() => {
                        const { NAME } = geo.properties;
                        setTooltip(
                          `${NAME}: ${
                            d ? d.casesPerOneMillion.toLocaleString() : ""
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
          <span>{minVal}</span>
          <span className="empty-display" />
          <span className="max-value">{maxVal.toLocaleString()}</span>
        </div>
        <div className="box-gradient" />
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
};

export default memo(WorldMap);
