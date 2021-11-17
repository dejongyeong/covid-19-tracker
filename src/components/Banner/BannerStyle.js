import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  color: black;
  .time {
    font-family: ${(props) => props.theme.font.paragraph};
    color: #3c3c3c;
    margin-bottom: 0.95rem;
    font-size: 0.72rem;
    font-weight: bold;
  }
  @media screen and (max-width: 620px) {
    .time {
      margin-bottom: 2.5%;
    }
  }
`;

export const Card = styled.div`
  height: 190px;
  text-align: center;
  padding: 12px 1% 0.6% 1%;
  box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.2);
  border-radius: 5px;
  border: 1px solid rgba(234, 226, 183, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h5 {
    font-family: ${(props) => props.theme.font.heading};
    text-transform: uppercase;
    font-weight: bolder;
    margin-bottom: 2%;
    font-size: 0.71rem;
    color: ${(props) => props.theme.colors.primaryColor};
  }
  h2 {
    font-size: 1.91rem;
  }
  p {
    padding-top: 9px;
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 0.8rem;
    font-family: ${(props) => props.theme.font.paragraph};
  }
  canvas {
    cursor: pointer;
    width: fit-content;
  }

  .pie-chart-container {
    position: relative;
    margin-top: 0.62rem;
    height: 135px;
    width: 135px;
  }

  .line-chart-container {
    position: relative;
    margin-top: 0.75rem;
    height: 58px;
    width: 55%;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  ${Card} {
    flex: 22% !important;
    :nth-child(1) > h2 {
      color: ${(props) => props.theme.colors.secondaryColor};
    }
    :nth-child(2) > h2 {
      color: #026a41;
    }
    :nth-child(3) > h2 {
      color: #3e3e3e;
    }
  }

  /* Reference: https://www.w3schools.com/css/tryit.asp?filename=trycss_mediaqueries_flex */
  @media screen and (min-width: 992.1px) {
    ${Card} {
      :nth-child(-n + 3) {
        margin-right: 1%;
      }
    }
  }

  @media screen and (max-width: 992px) {
    ${Card} {
      flex: 48% !important;
      :nth-child(odd) {
        margin-right: 1%;
      }
      :nth-child(3),
      :nth-child(4) {
        margin-top: 1%;
      }
    }
  }

  @media screen and (max-width: 620px) {
    ${Card} {
      padding: 3% 1% 2% 1%;
      flex: 100% !important;
      :nth-child(n + 2) {
        margin-top: 1.2%;
      }
      :nth-child(odd) {
        margin-right: unset;
      }
    }
  }
`;
