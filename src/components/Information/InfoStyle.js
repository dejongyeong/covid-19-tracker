import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000000;
  width: 95%;
  height: 100vh;
  padding: 15px 58px 0 0;
  margin: 0 auto;

  @media only screen and (orientation: portrait) and ${(props) =>
      props.theme.breakpoints.sm} {
    height: 100%;
    margin: 30px auto;
  }
`;

export const Header = styled.div`
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 600;
  width: 100%;
  text-transform: uppercase;
  font-size: clamp(2rem, 20vw, 5rem);
  margin-top: 5px;
`;

export const Content = styled.div`
  width: 45%;
  padding: 5px 5px 5px 4px;
  font-family: ${(props) => props.theme.font.paragraph};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  margin: 15px 0 20px 0;
  color: ${(props) => props.theme.colors.primaryColor};

  span {
    color: ${(props) => props.theme.colors.secondaryColor};
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.tertiaryColor};

    :hover {
      color: ${(props) => props.theme.colors.primaryColor};
      text-decoration: underline;
    }
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: row;
  margin: 20px 0;

  .card:nth-child(2) {
    margin: 0 60px;
  }

  @media only screen and (orientation: portrait) and ${(props) =>
      props.theme.breakpoints.sm} {
    flex-direction: column;
    .card:nth-child(2) {
      margin: 0;
    }
  }
`;

export const InfoCard = styled.div`
  background-color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.font.heading};
  color: ${(props) => props.theme.colors.secondaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 403px;
  height: auto;
  max-height: 463px;
  border-radius: 15px;
  padding: 35px 20px;
  transition: transform 0.3s ease-out;

  :hover {
    transform: translate(0, -10px);
    -webkit-transform: translate(0, -10px);
  }
`;

export const InfoCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    color: ${(props) => props.theme.colors.secondaryColor};
    width: 100%;
    max-width: 84px;
    height: auto;
  }
  h2 {
    margin-top: 12px;
  }
  h4 {
    margin-top: 5px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: normal;
    font-size: 0.85rem;
    line-height: 25px;
  }
`;

export const InfoCardContent = styled.div`
  color: ${(props) => props.theme.colors.primaryLight};
  text-align: center;
  margin-top: 45px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5rem;
  li {
    list-style: none;
    line-height: 2rem;
  }
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 25px;
    color: ${(props) => props.theme.colors.tertiaryColor};
  }
`;
