import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100%;
  color: black;

  .world-map {
    border: 1px solid rgba(234, 226, 183, 0.3);
    box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.2);

    .title {
      font-family: ${(props) => props.theme.font.heading};
      text-align: center;
      font-size: 0.75rem;
      margin-top: 0.4rem;
      margin-bottom: 0.15rem;
      color: #33596d;
    }

    .map-chart {
      display: grid;
      grid-template-columns: 4.5fr 1.5fr;
      grid-gap: 0.47rem;

      .map-info {
        border: 1px solid pink;
      }

      @media only screen and (max-width: 1440px) {
        grid-template-columns: 1fr;
        grid-gap: 0.3rem;
      }
    }
  }

  .custom-tooltip {
    border-radius: 1rem;
    font-size: 0.75rem !important;
    font-family: ${(props) => props.theme.font.heading};
  }
`;
