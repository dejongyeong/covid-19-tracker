import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 300;
  font-size: clamp(.6rem, 4vw, .9rem);
  width: 100%;
  height: 64px;
  padding: 24px 0;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  line-height: 17px;

  @media ${(props) => props.theme.breakpoints.sm} and (orientation: portrait) {
    height: 30px;
    padding: 0;
    position: relative
  }
`;