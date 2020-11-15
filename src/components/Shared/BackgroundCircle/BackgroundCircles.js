import styled from "styled-components";

export const Circle1 = styled.div`
  height: 747px;
  width: 747px;
  position: absolute;
  top: -300px;
  right: -250px;
  background-color: ${(props) => props.theme.colors.secondaryLight};
  opacity: 50%;
  transform: rotate(-46.28deg);
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  z-index: -1;

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 482.21px;
    width: 482.21px;
    transform: rotate(-63.78deg);
    top: -241.11px;
    right: -241.11px;
  }
`;

export const Circle2 = styled.div`
  height: 297.56px;
  width: 297.56px;
  position: absolute;
  bottom: -148.78px;
  left: -100px;
  background-color: ${(props) => props.theme.colors.secondaryLight};
  opacity: 50%;
  transform: rotate(-28.59deg);
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  z-index: -1;

  @media ${(props) => props.theme.breakpoints.sm} {
    bottom: -130px;
    left: -120px;
  }
`;
