import styled from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  width: 100%;
  padding: 4px;

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    white-space: nowrap;
    thead {
      font-family: ${(props) => props.theme.font.heading};
      font-size: 0.8rem;
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: #ffffff;
      font-weight: normal;
      th {
        padding: 0.78rem 0.95rem;
        position: relative;
      }
      .custom-tooltip {
        font-size: 0.6rem !important;
        background-color: #33596d;
        border-radius: 1rem;
      }
    }
    tbody {
      font-family: ${(props) => props.theme.font.paragraph};
      font-size: 0.83rem;
      color: ${(props) => props.theme.colors.primaryColor};
      tr {
        .todayCases {
          color: ${(props) => props.theme.colors.secondaryColor};
          font-weight: bold;
        }
        .todayDeaths {
          color: #3e3e3e;
          font-weight: bold;
        }
        .todayRecover {
          color: #026a41;
          font-weight: bold;
        }
        :nth-child(even) {
          background-color: #ebecf0;
        }
      }
      td {
        padding: 0.65rem 0.95rem;
        position: relative;
      }
    }
  }

  .search-bar {
    margin: 0.15rem auto 0.65rem auto;
    display: flex;

    input {
      width: 20rem;
      border: 2px solid #33596d !important;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      height: 2rem;
      font-family: ${(props) => props.theme.font.heading} !important;
      color: ${(props) => props.theme.colors.primaryColor};
      font-size: 0.85rem !important;
      border-radius: 0px 5px 5px 0px;
      outline: none;
      border-left: none;
      box-shadow: 0 3px 6px 0 rgba(0, 48, 73, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      ::-webkit-search-cancel-button {
        cursor: pointer;
      }
    }
    .searchIcon {
      width: 35px;
      height: 2rem;
      border: 2px solid #33596d !important;
      background: #33596d;
      text-align: center;
      color: #fff;
      border-radius: 5px 0px 0px 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 48, 73, 0.1);
    }
  }

  .country-info {
    display: flex;
    justify-content: left;
    align-items: center;
    p {
      margin-left: 0.7rem;
    }
  }

  .pagination {
    margin: 0.85rem auto 0.7rem auto;

    button {
      size: 25px;
      background-color: ${(props) => props.theme.colors.primaryColor};
      color: #ffffff;
      border: none;
      padding: 0 6px;
      cursor: pointer;
      height: 25px;
      max-width: auto;
      min-width: 25px;
      border-radius: 4px;
      font-family: ${(props) => props.theme.font.heading};
      box-shadow: 0 3px 6px 0 rgba(0, 48, 73, 0.15);
      text-align: center;
      :nth-child(n + 2) {
        margin-left: 6px;
      }

      :hover,
      :active {
        box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);
      }
      :disabled {
        background-color: #3e3e3e;
        cursor: not-allowed;
      }
    }

    .page-info {
      font-family: ${(props) => props.theme.font.heading};
      font-size: 0.83rem;
      color: ${(props) => props.theme.colors.primaryColor};
      margin: 0 3px 0 9px;
    }
  }
`;
