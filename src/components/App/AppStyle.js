import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  color: #ffffff;
  width: auto;
  height: 100vh;
  position: relative;
  overflow: hidden;

  @media only screen and ${(props) => props.theme.breakpoints.sm} and (orientation: portrait) {
    height: 100%;
    overflow: none
  }
`;
