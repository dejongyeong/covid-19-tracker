import styled from "styled-components";

export const Wrapper = styled.div`
  height: 81vh;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #d62828;
  font-family: ${(props) => props.theme.font.heading};
  font-size: 1.25rem;

  img {
    height: auto;
    width: 100%;
    max-width: 350px;
    margin-bottom: 1.9rem;
    -webkit-animation: upDown 1s infinite alternate;
    animation: upDown 1s infinite alternate;
  }
  @keyframes upDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }
  @-webkit-keyframes upDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-15px);
    }
  }

  p {
    margin-bottom: 20px;
    line-height: 1.9rem;
    color: #3e3e3e;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const ToInformationButton = styled.button`
  background: ${(props) => props.theme.colors.primaryColor};
  border-radius: 20px;
  padding: 9px 20px;
  font-family: ${(props) => props.theme.font.heading};
  border: none;
  cursor: pointer;
  color: #f2f2fb;
  font-weight: 500;
  font-size: 1rem;
  width: auto;
  height: 40px;
  :focus {
    outline: 0 !important;
  }
  :hover {
    color: ${(props) => props.theme.colors.primaryColor};
    background: #f2f2fb;
  }
  transition: background 0.25s ease-in-out;
  -webkit-transition: background 0.25s ease-in-out;
  -moz-transition: background 0.25s ease-in-out;
  text-transform: uppercase;
  margin-left: 0;
  margin-right: 0;
  margin-top: 12px;
`;
