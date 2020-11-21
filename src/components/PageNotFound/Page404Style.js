import styled from "styled-components";

export const Wrapper = styled.div`
  width: auto;
  height: 85vh;
  padding: 0 58px 0 58px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;

  @media only screen and (orientation: portrait) and ${(props) =>
      props.theme.breakpoints.sm} {
    height: 100vh;
  }

  @media only screen and (orientation: portrait) and (min-width: 540px) and (max-width: 540px) {
    height: 70vh;
  }
`;

//  Could use svgator but require webpack
// Tutorial: https://codepen.io/wvyeun/pen/QRNwGW
// Tutorial: https://www.w3schools.com/cssref/css3_pr_animation-keyframes.asp
export const MainHeader = styled.div`
  svg {
    -webkit-animation: upDown 1s infinite alternate;
    animation: upDown 1s infinite alternate;
    width: 100%;
    height: auto;
  }
  @keyframes upDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
  @-webkit-keyframes upDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
`;

export const SubHeader = styled.div`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.heading};
  font-size: clamp(1.5rem, 15vw, 4rem);
  font-weight: 600;
  color: ${(props) => props.theme.colors.primaryColor};
  letter-spacing: 0.1rem;
  margin: 30px auto 10px auto;
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Content = styled.div`
  width: auto;
  font-family: ${(props) => props.theme.font.heading};
  font-size: 1.1rem;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  line-height: 28px;
  margin-bottom: 25px;
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const PageNotFoundButton = styled.button`
  background: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 20px;
  padding: 9px 20px;
  font-family: ${(props) => props.theme.font.heading};
  border: none;
  cursor: pointer;
  color: #f2f2fb;
  font-weight: 500;
  font-size: 1rem;
  width: auto;
  height: 40px;
  :focus {
    outline: 0 !important;
  }
  :hover {
    background: ${(props) => props.theme.colors.primaryColor};
  }
  transition: background 0.5s ease-in-out;
  -webkit-transition: background 0.5s ease-in-out;
  -moz-transition: background 0.5s ease-in-out;
  text-transform: uppercase;
  margin-left: 0;
  margin-right: 0;
  margin-top: 12px;
`;
