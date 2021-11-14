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
        padding: 0.75rem 0.95rem;
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
        :nth-child(odd) {
          background-color: #ebecf0;
        }
      }
      td {
        padding: 0.75rem 0.95rem;
      }
    }
  }
`;

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
