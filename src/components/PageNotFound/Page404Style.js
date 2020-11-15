import styled from "styled-components";

export const Wrapper = styled.div`
  color: #000000;
  width: auto;
  height: 100vh;
  padding: 0 58px 0 58px;
  text-align: center;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// css clamp: MIN, VAL, MAX
export const MainHeader = styled.div`
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.heading};
  font-size: clamp(3rem, 50vw, 5rem);
  background: -webkit-linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid black;
`;
