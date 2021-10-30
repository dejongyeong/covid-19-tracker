import styled from "styled-components";

/** Main Wrapper */
export const Wrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 15px 45px;
  margin: 10px auto 20px auto;

  @media only screen and (min-width: 1920.02px) {
    height: 100vh;
  }

  @media only screen and (orientation: portrait) and (min-height: 1024.98px) {
    height: 89.4vh;
  }

  @media only screen and (orientation: portrait) and ${(props) =>
      props.theme.breakpoints.md} {
    height: 100%;
    margin: 2% auto;
    padding: 15px 18px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.primaryColor};
  h3 {
    font-family: ${(props) => props.theme.font.heading};
    font-style: normal;
    font-weight: 600;
    line-height: 50px;
    font-size: 3.5rem;

    @media only screen and ${(props) => props.theme.breakpoints.sm} {
      font-size: 2.6rem;
      line-height: 44px;
    }
  }
  p {
    margin-top: 1.5rem;
    font-family: ${(props) => props.theme.font.paragraph};
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 15px;
    padding-left: 5px;

    @media only screen and ${(props) => props.theme.breakpoints.sm} {
      font-size: 0.95rem;
    }
  }
`;

export const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  padding: 10px 0px;

  @media only screen and ${(props) => props.theme.breakpoints.lg} {
    flex-direction: column;
    margin-top: 5%;
    padding: 5px;
  }

  @media only screen and ${(props) => props.theme.breakpoints.sm} {
    margin-top: 8%;
  }
`;

export const CountWrapper = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  flex-direction: column;
`;

export const SearchBar = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto 25px auto;
  color: ${(props) => props.theme.colors.primaryColor};
  position: relative;

  @media only screen and (max-width: 937.98px) {
    margin: 15px auto 25px auto;
  }

  select {
    height: 2.7em;
    padding-left: 9px;
    cursor: pointer;
    font-family: Rubik, sans-serif;
    color: #003049;
    border-radius: 0.7em;
    -webkit-appearance: none;
    appearance: none;
  }

  ::after {
    content: "▼";
    font-size: 0.8rem;
    top: 9px;
    right: 12px;
    position: absolute;
  }
`;

export const CountBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  .data-box:nth-child(1) {
    box-shadow: inset 0px 5px 0px
      ${(props) => props.theme.colors.secondaryColor};
    border: 1px solid ${(props) => props.theme.colors.secondaryColor};
    color: ${(props) => props.theme.colors.secondaryColor};
    font-family: ${(props) => props.theme.font.heading};
    font-style: normal;
    font-weight: 500;
  }

  .data-box:nth-child(2) {
    margin: 15px auto;
    box-shadow: inset 0px 5px 0px #026a41;
    border: 1px solid #026a41;
    color: #026a41;
    font-family: ${(props) => props.theme.font.heading};
    font-style: normal;
    font-weight: 500;
  }

  .data-box:nth-child(3) {
    box-shadow: inset 0px 5px 0px #3e3e3e;
    border: 1px solid #3e3e3e;
    color: #3e3e3e;
    font-family: ${(props) => props.theme.font.heading};
    font-style: normal;
    font-weight: 500;
  }

  @media only screen and ${(props) => props.theme.breakpoints.lg} {
    flex-direction: row;
    .data-box:nth-child(2) {
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 937.98px) {
    display: none;
  }
`;

// Mobile Count Box Wrapper - hide data
export const MobileCountBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: none;
  margin-top: 13px;

  @media only screen and (max-width: 937.98px) {
    display: unset;
    margin-top: 0;
    .data-box {
      width: 100%;
      min-width: unset;
      max-width: unset;
      height: auto;
      min-height: unset;
      max-height: unset;
      margin-bottom: 1em;
      padding: unset;
      justify-content: flex-start;
      p:nth-child(1) {
        display: none;
      }
    }
  }
`;

export const CountBox = styled.div`
  min-width: 275px;
  max-width: 275px;
  min-height: 220px;
  max-height: 220px;
  background: transparent;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 0 15px 29px;
  h3 {
    margin: 20px 0 5px 0;
    font-size: clamp(1.6rem, 32px, 4rem);
    line-height: 43px;
  }
  h4 {
    margin-bottom: 25px;
    font-size: clamp(1.2rem, 22px, 2rem);
    line-height: 28px;
  }
  p {
    color: #7e7e7e;
    font-family: ${(props) => props.theme.font.paragraph};
    font-size: 0.99rem;
    line-height: 1.3em;
  }

  @media only screen and (max-height: 949.98px) and (min-height: 812px) {
    max-width: 230px;
    width: 100%;
    min-height: 220px;
    max-height: 220px;
    padding: 15px 29px;
  }
`;

export const GraphWrapper = styled.div`
  width: 100%;
  height: 800px;
  border: 1px solid black;
  margin-left: 2.5%;
  color: black;

  @media only screen and ${(props) => props.theme.breakpoints.lg} {
    margin: 4% auto -2% auto;
  }
`;
