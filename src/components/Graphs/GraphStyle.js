import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.primaryColor};

  .world-map {
    border: 1px solid rgba(234, 226, 183, 0.5);
    box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.5);
    border-radius: 5px;
    padding: 4px;

    .select-bar {
      display: flex;
      margin: 4px auto 6px 4px;

      .select-icon {
        width: 34px;
        height: 2rem;
        border: 2px solid #33596d !important;
        background: #33596d;
        text-align: center;
        color: #fff;
        border-radius: 5px 0px 0px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      select {
        height: 2rem !important;
        width: 20rem;
        font-family: ${(props) => props.theme.font.heading};
        color: ${(props) => props.theme.colors.primaryColor};
        font-size: 0.85rem !important;
        border: 2px solid #33596d !important;
        border-radius: 0px 5px 5px 0px;
        outline: none;
        border-left: none;
        padding-left: 0.5rem;

        @media only screen and (max-width: 424.98px) {
          width: 100%;
        }
      }
    }

    .map-chart {
      display: grid;
      grid-template-columns: 8fr 1fr;
      grid-gap: 0.47rem;

      .maps > svg {
        margin: 0 4px 0 4px;
      }

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

        .box-gradient-cases {
          height: 15px;
          width: 100%;
          background: linear-gradient(to right, #ff8c8c, #d62828);
        }
        .box-gradient-recover {
          height: 15px;
          width: 100%;
          background: linear-gradient(to right, #7dc9ab, #026a41);
        }
        .box-gradient-deaths {
          height: 15px;
          width: 100%;
          background: linear-gradient(to right, #b0b0b0, #303030);
        }
        .box-gradient-tests {
          height: 15px;
          width: 100%;
          background: linear-gradient(to right, #ccb399, #9c5000);
        }
      }

      @media only screen and (max-width: 1439.98px) {
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

          .box-gradient-cases {
            height: 99%;
            width: 15px;
            background: linear-gradient(#ff8c8c, #d62828);
          }
          .box-gradient-recover {
            height: 99%;
            width: 15px;
            background: linear-gradient(#7dc9ab, #026a41);
          }
          .box-gradient-deaths {
            height: 99%;
            width: 15px;
            background: linear-gradient(#b0b0b0, #303030);
          }
          .box-gradient-tests {
            height: 99%;
            width: 15px;
            background: linear-gradient(#ccb399, #9c5000);
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

export const LineGraphContainer = styled.div`
  margin-top: 0.8rem;
  border: 1px solid rgba(234, 226, 183, 0.5);
  box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.5);
  border-radius: 5px;
  height: 100%;
  padding: 4px;

  .select-bar {
    display: flex;

    .select-icon {
      width: 34px;
      height: 2rem;
      border: 2px solid #33596d !important;
      background: #33596d;
      text-align: center;
      color: #fff;
      border-radius: 5px 0px 0px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    select {
      height: 2rem !important;
      width: 20rem;
      border: 2px solid #33596d !important;
      border-radius: 0px 5px 5px 0px;
      outline: none;
      border-left: none;
      padding-left: 0.5rem;
      font-family: ${(props) => props.theme.font.heading};
      color: ${(props) => props.theme.colors.primaryColor};
      font-size: 0.85rem !important;

      @media only screen and (max-width: 424.98px) {
        width: 100%;
      }
    }
  }

  @media only screen and (max-width: 424.98px) {
    canvas {
      width: 100% !important;
      height: auto !important;
    }
  }

  .radio-section {
    margin-top: 14px;
    margin-bottom: 33px;
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.font.heading};
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: 0.9rem !important;

    input[type="radio"] {
      margin-left: 10px;
      margin-right: 5px;
    }

    @media only screen and (max-width: 424.98px) {
      display: block;

      .history-15,
      .history-30,
      .history-all {
        display: flex;
        flex-direction: row;
        align-items: center;

        input[type="radio"] {
          margin-left: 0;
        }
      }

      .history-15 {
        margin: 10px auto 5px auto;
      }

      .history-30 {
        margin-bottom: 5px;
      }
    }
  }

  .no-data-container {
    width: 864px;
    height: 450px;
    text-align: center;
    padding-top: 70px;
    font-family: ${(props) => props.theme.font.heading};
    color: ${(props) => props.theme.colors.primaryColor};

    img {
      height: auto;
      width: 100%;
      max-width: 200px;
      margin-bottom: 20px;
    }

    @media only screen and (max-width: 1440px) {
      width: 100%;
    }
  }
`;
