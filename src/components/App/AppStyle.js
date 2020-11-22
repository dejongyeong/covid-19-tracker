import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  color: #ffffff;
  width: auto;
  height: 100%;
  position: relative;
  overflow: hidden;

  @media only screen and ${(props) => props.theme.breakpoints.lg} and (orientation: portrait) {
    overflow: none
  }
`;
