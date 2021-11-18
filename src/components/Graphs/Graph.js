import React from "react";
import ReactToolTip from "react-tooltip";
import { Wrapper } from "./GraphStyle";
import WorldMap from "./WorldMap";

function Graph() {
  const [content, setContent] = React.useState("");

  return (
    <Wrapper>
      <div className="world-map">
        <div className="title">
          <h3>Confirmed Covid-19 Cases Per One Million</h3>
        </div>
        <WorldMap setTooltip={setContent} />
        <ReactToolTip className="custom-tooltip">{content}</ReactToolTip>
      </div>
    </Wrapper>
  );
}

export default Graph;
