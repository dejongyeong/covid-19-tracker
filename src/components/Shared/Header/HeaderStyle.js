import styled from "styled-components";
import { AppBar, withStyles, IconButton } from "@material-ui/core";

export const CustomAppBar = withStyles(() => ({
  root: {
    width: "100%",
    height: "80px",
    backgroundColor: "transparent",
    padding: "20x 10px 20px 40px",
    display: "flex",
    boxShadow: "none",
    justifyContent: "center",
  },
}))(AppBar);

export const Image = styled.div`
  flex-grow: 0;
`;

export const DesktopNav = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-family: ${(props) => props.theme.font.heading};
  font-weight: 500;
  font-style: normal;
  font-size: 1rem;
  height: auto;
  padding-right: 0px;

  a {
    text-decoration: none;
    font-family: Rubik, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 21px;
    color: ${(props) => props.theme.colors.primaryColor};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const NavButton = styled.button`
  background-color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 20px;
  padding: 9px 20px;
  font-family: ${(props) => props.theme.font.heading};
  margin-left: 32px;
  border: none;
  cursor: pointer;
  color: #f2f2fb;
  font-weight: 500;
  font-size: 1rem;
  :focus {
    outline: 0 !important;
  }
`;

export const MobileNav = styled.div`
  display: none;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    margin-left: 32px;
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

export const CustomIconButton = withStyles(() => ({
  root: {
    color: "#003049",
  },
}))(IconButton);

export const MobileDrawer = styled.div`
  width: 240px;

  .close-section {
    text-align: right;
  }
`;

export const ListWrapper = styled.div`
  font-size: 1rem;

  a {
    text-decoration: none;
  }
  svg,
  span {
    color: ${(props) => props.theme.colors.primaryColor};
    font-family: ${(props) => props.theme.font.heading};
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
`;
