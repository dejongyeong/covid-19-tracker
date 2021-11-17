import styled from "styled-components";

/* eslint-disable */
export const Wrapper = styled.div`
  color: ${(props) => props.theme.colors.primaryColor};
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 300;
  font-size: 0.75rem;
  width: 100%;
  height: 35px;
  padding: 10px 15px 20px 15px;
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
`;