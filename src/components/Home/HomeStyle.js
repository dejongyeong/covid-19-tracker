import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  color: #000000;
  width: auto;
  height: 85vh;
  padding: 0 58px 0 58px;
  border: 1px solid black;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 100%;
    margin: 38px auto;
  }

  @media only screen and (orientation: portrait) {
    height: 85vh;
  }
`;