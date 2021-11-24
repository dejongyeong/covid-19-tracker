import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 300;
  font-size: clamp(0.5rem, 0.7rem, 0.75rem);
  width: 100%;
  height: auto;
  padding: 5px;
  text-align: center;
  line-height: 17px;
  margin-bottom: 5px;
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondaryColor};
    
    :hover {
      color: ${(props) => props.theme.colors.tertiaryColor};
    }
  }

  @media only screen and (orientation: portrait) and (max-height: 480px) {
    margin-top: 15px;
  }
`;