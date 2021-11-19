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
      margin-bottom: 0.4rem;
      color: #33596d;
      h3 {
        margin-top: 0.7rem;
      }
    }

    .map-chart {
      display: grid;
      grid-template-columns: 9fr 1fr;
      grid-gap: 0.47rem;

      .map-info {
        width: 90%;
        margin: -8px auto 0.9rem auto;

        .box {
          display: flex;
          font-family: ${(props) => props.theme.font.heading};
          font-size: 0.8rem;

          .empty-display {
            flex: 1;
          }
        }

        .box-gradient {
          background: linear-gradient(to right, #ff8c8c, #d62828);
          height: 15px;
          width: 100%;
        }
      }

      @media only screen and (max-width: 1440px) {
        grid-template-columns: 1fr;
        grid-gap: 0.3rem;
      }

      @media only screen and (min-width: 1440px) {
        .map-info {
          margin: 1.5rem auto 0.9rem auto;

          .box {
            height: 99%;
            flex-direction: column !important;
            float: left;
            margin-left: 22px;
          }

          .box-gradient {
            height: 99%;
            width: 15px;
            background: linear-gradient(#ff8c8c, #d62828);
          }
        }
      }
    }
  }

  .custom-tooltip {
    border-radius: 1rem;
    font-size: 0.75rem !important;
    font-family: ${(props) => props.theme.font.heading};
  }
`;
