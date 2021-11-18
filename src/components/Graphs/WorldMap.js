import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import { GEO_URL } from "../../api/ApiConstant";

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
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      const { NAME } = geo.properties;
                      setTooltip(`${NAME}`);
                    }}
                    onMouseLeave={() => {
                      setTooltip("");
                    }}
                    style={{
                      default: {
                        fill: "#D6D6DA",
                        outline: "none",
                      },
                      hover: {
                        fill: "#F53",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#E42",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <div className="map-info">
        <p>Info</p>
      </div>
    </div>
  );
}

WorldMap.propTypes = {
  setTooltip: PropTypes.func.isRequired,
};

export default memo(WorldMap);
