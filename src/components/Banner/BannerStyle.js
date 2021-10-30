import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  color: black;
  .time {
    font-family: ${(props) => props.theme.font.paragraph};
    margin-bottom: 2%;
    font-size: 0.8rem;
  }
`;

export const Card = styled.div`
  height: 180px;
  text-align: center;
  padding: 0.5% 1%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid black;
  h5 {
    color: ${(props) => props.theme.colors.primaryColor};
    font-family: ${(props) => props.theme.font.heading};
    text-transform: uppercase;
    font-weight: bolder;
  }
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  ${Card} {
    flex: 22% !important;
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
      flex: 100% !important;
      :nth-child(n + 2) {
        margin-top: 1.2%;
      }
    }
  }
`;
