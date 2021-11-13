import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 45px;
  margin: 0 auto;

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

export const Header = styled.div`
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 600;
  width: 100%;
  text-transform: uppercase;
  font-size: clamp(3rem, 20vw, 5rem);
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

  /* ts-ignore */
  @media only screen and ${(props) => props.theme.breakpoints.lg} {
    width: 100%;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  margin: 40px 0 20px 0;
  .card:nth-child(2) {
    margin: 0 60px;
  }

  /* ts-ignore */
  @media only screen and ${(props) => props.theme.breakpoints.lg} {
    .card:nth-child(2) {
      margin: 0 20px;
    }
  }

  @media only screen and (max-width: 807.98px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .card:nth-child(2) {
      margin: 20px auto;
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
  max-width: 430px;
  height: 463px;
  max-height: 463px;
  border-radius: 15px;
  padding: 40px 20px 30px 20px;

  @media only screen and ${(props) => props.theme.breakpoints.xl} {
    transition: transform 0.3s ease-out;
    :hover {
      transform: translate(0, -10px);
      -webkit-transform: translate(0, -10px);
    }
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
