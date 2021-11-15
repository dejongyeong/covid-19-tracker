import styled from "styled-components";

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
        padding: 0.85rem 1rem;
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
        padding: 0.85rem 1rem;
      }
    }
  }

  .search-bar {
    margin: 0.3rem auto 0.6rem auto;
    display: flex;

    input {
      width: 20rem;
      border: 2px solid #33596d !important;
      padding-right: 1.5rem;
      padding-left: 0.5rem;
      border-radius: 4px;
      height: 2rem;
      font-family: ${(props) => props.theme.font.heading} !important;
      color: ${(props) => props.theme.colors.primaryColor};
      font-size: 0.85rem !important;
      border-radius: 5px 0px 0px 5px;
      outline: none;
      border-right: none;
      box-shadow: 0 3px 6px 0 rgba(0, 48, 73, 0.1);
    }
    .searchIcon {
      width: 35px;
      height: 2rem;
      border: 2px solid #33596d !important;
      background: #33596d;
      text-align: center;
      color: #fff;
      border-radius: 0 5px 5px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 48, 73, 0.1);
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

/** Remove below */
export const Container = styled.div`
  width: auto;
  height: 100vh;
  margin: 1rem auto 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  grid-gap: 0.5rem;

  .country-list {
    border: 1px solid rgba(234, 226, 183, 1);
    box-shadow: 0 4px 8px 0 rgba(234, 226, 183, 0.2);
    border-radius: 5px;
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
