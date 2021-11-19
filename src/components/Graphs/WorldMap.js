import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { GEO_URL } from "../../api/ApiConstant";

// resolve d3 jest issue: https://stackoverflow.com/questions/69075510/jest-tests-failing-on-d3-import

function WorldMap({ setTooltip }) {
  const mapWidth = 800;
  const mapHeight = 410;

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
                  const pop = geographies.map(
                    ({ properties }) => properties.POP_EST
                  );

                  const colorScale = scaleLinear()
                    .domain([Math.min(...pop), Math.max(...pop)])
                    .range(["#ff8c8c", "#d62828"]);

                  const { POP_EST } = geo.properties;

                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={POP_EST ? colorScale(POP_EST) : "#F5F4F6"}
                      onMouseEnter={() => {
                        const { NAME } = geo.properties;
                        setTooltip(`${NAME}`);
                      }}
                      onMouseLeave={() => {
                        setTooltip("");
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
          <span>0</span>
          <span className="empty-display" />
          <span className="max-value">100</span>
        </div>
        <div className="box-gradient" />
      </div>
    </div>
  );
}

WorldMap.propTypes = {
  setTooltip: PropTypes.func.isRequired,
};

export default memo(WorldMap);
