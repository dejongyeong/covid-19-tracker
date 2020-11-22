import styled from "styled-components";

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
    margin: 30px auto;
    padding: 15px 20px;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  color: ${(props) => props.theme.colors.primaryColor};
  h3 {
    font-family: ${(props) => props.theme.font.heading};
    font-style: normal;
    font-weight: 500;
    line-height: 43px;
    font-size: clamp(36px, 3rem, 4rem);
  }
  p {
    margin-top: 1.5rem;
    font-family: ${(props) => props.theme.font.paragraph};
    font-style: normal;
    font-weight: normal;
    font-size: clamp(16px, 1rem, 1.1rem);
    line-height: 15px;
    padding-left: 5px;
  }
`;

export const DataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 3%;
  padding: 10px;
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
  margin: 0 auto 40px auto;
  color: ${(props) => props.theme.colors.primaryColor};
  border: 1px solid black;
`;

export const CountBoxWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 20px 0 10px 0;
    font-size: clamp(2rem, 36px, 4rem);
    line-height: 43px;
  }
  h4 {
    margin-bottom: 25px;
    font-size: clamp(1.5rem, 24px, 2rem);
    line-height: 28px;
  }

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
`;

export const CountBox = styled.div`
  min-width: 275px;
  max-width: 275px;
  min-height: 213px;
  max-height: 213px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px 0 15px 29px;
  p {
    color: #7e7e7e;
    font-family: ${(props) => props.theme.font.paragraph};
  }
`;

export const GraphWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  margin-left: 3%;
`;
