import React from "react";
import Theme from "../../theme/Theme";

import {
  CountBox,
  CountBoxWrapper,
  CountWrapper,
  DataWrapper,
  GraphWrapper,
  HeaderWrapper,
  SearchBar,
  Wrapper,
} from "./HomeStyle";

function Home() {
  return (
    <Theme>
      <Wrapper id="covid-data">
        <HeaderWrapper>
          <h3 id="country-name">Congo, the Democratic Republic of the</h3>
          <p id="last-updated">Last updated: 20th October 2020</p>
        </HeaderWrapper>
        <DataWrapper>
          <CountWrapper>
            <SearchBar>Search</SearchBar>
            <CountBoxWrapper>
              <CountBox id="infected" className="data-box">
                <p>Infected</p>
                <h3 id="infected-num">40,975,608</h3>
                <h4>
                  + <span id="today-infected">16,753</span>
                </h4>
                <p>Total active and closed cases</p>
              </CountBox>

              <CountBox id="recovered" className="data-box">
                <p>Recovered</p>
                <h3 id="recovered-num">40,975,608</h3>
                <h4>
                  + <span id="today-recovered">16,753</span>
                </h4>
                <p>Total recoveries from Covid</p>
              </CountBox>

              <CountBox id="deaths" className="data-box">
                <p>Deaths</p>
                <h3 id="deaths-num">40,975,608</h3>
                <h4>
                  + <span id="today-deaths">16,753</span>
                </h4>
                <p>Total death caused by Covid</p>
              </CountBox>
            </CountBoxWrapper>
          </CountWrapper>
          <GraphWrapper>Graph</GraphWrapper>
        </DataWrapper>
      </Wrapper>
    </Theme>
  );
}

export default Home;
