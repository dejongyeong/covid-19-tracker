import styled from "styled-components";

/** Main Wrapper */
export const Wrapper = styled.div`
  width: auto;
  height: 100%;
  padding: 15px 32px;
  margin: 10px auto 20px auto;

  @media only screen and (min-width: 1920.02px) {
    height: 100vh;
  }

  @media only screen and (orientation: portrait) and (min-height: 1024.98px) {
    height: 89.4vh;
  }

  @media only screen and (orientation: portrait) and (max-height: 767.98px) {
    height: 100%;
    margin: 2% auto;
    padding: 15px 22px;
  }
`;

export const Container = styled.div`
  width: auto;
  height: 100vh;
  max-height: 100vh;
  margin: 1rem auto 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1.8fr;
  grid-gap: 0.9rem;

  .country-list {
    border: 1px solid rgba(234, 226, 183, 1);
    box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.2);
    overflow: auto;
  }

  .graph-section {
    border: 1px solid rgba(234, 226, 183, 1);
    box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.2);
    border-radius: 5px;
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
