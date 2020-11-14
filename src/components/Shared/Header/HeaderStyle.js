import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  height: 80px;
  background-color: transparent;
  color: #2e585b;
  padding: 20px 10px 20px 40px;
  display: flex;
  align-items: center;
  border: 1px solid black;
`;

export const Image = styled.div`
  flex-grow: 0;
`;

export const Nav = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding-right: 30px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: 1rem;
  height: auto;
`;

export const NavButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondaryColor};
  border-radius: 20px;
  color: ${(props) => props.theme.colors.secondaryLight};
  padding: 9px 20px;
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  margin-left: 32px;
  border: none;
  cursor: pointer;
  :focus {
    outline: 0 !important;
  }
`;
