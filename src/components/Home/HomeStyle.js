import styled from "styled-components";

/** Main Wrapper */
export const Wrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 15px 32px;
  margin: 10px auto 20px auto;

  .info-tag {
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 0.7rem;
    font-family: ${(props) => props.theme.font.heading};
    margin-top: 1rem;
    text-align: right;
  }

  @media only screen and (orientation: portrait) and (min-height: 1024.98px) {
    height: 100%;
  }

  @media only screen and (orientation: portrait) and (max-height: 767.98px) {
    height: 100%;
    margin: 2% auto;
    padding: 15px 22px;
  }
`;

export const Container = styled.div`
  width: auto;
  height: 100%;
  max-height: 100%;
  margin: 1rem auto 0 auto;
  display: grid;
  grid-template-columns: 2fr 2fr;
  grid-gap: 0.9rem;

  .country-list {
    border: 1px solid rgba(234, 226, 183, 0.5);
    box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.5);
    border-radius: 5px;
    overflow: auto;
    width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
