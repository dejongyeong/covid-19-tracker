import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { Close, Home, Info, Menu } from "@material-ui/icons";
import Theme from "../../../theme/Theme";
import {
  CustomAppBar,
  CustomIconButton,
  Image,
  DesktopNav,
  MobileNav,
  MobileDrawer,
  NavButton,
  ListWrapper,
} from "./HeaderStyle";

import Logo from "../../../assets/icons/logo.svg";

const useStyles = makeStyles(() => ({
  desktopActive: {
    "& button": {
      backgroundColor: "#d62828",
    },
  },
  mobileActive: {
    "& svg, span": {
      color: "#fcbf49",
    },
  },
}));

function Header() {
  const classes = useStyles();

  // Material UI Temporary Drawer
  // https://material-ui.com/components/drawers/
  const [state, setState] = React.useState({ right: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ state, [anchor]: open });
  };

  const drawer = (
    <Drawer
      anchor="right"
      open={state.right}
      onClose={toggleDrawer("right", false)}
    >
      <MobileDrawer
        role="presentation"
        onClick={toggleDrawer("right", false)}
        onKeyDown={toggleDrawer("right", false)}
      >
        <div className="close-section">
          <CustomIconButton>
            <Close />
          </CustomIconButton>
        </div>
        <ListWrapper>
          <List>
            <NavLink
              className="home-link"
              exact
              to="/"
              activeClassName={classes.mobileActive}
              isActive={(match) => {
                return !!match;
              }}
            >
              <ListItem button>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </NavLink>
          </List>
          <List>
            <NavLink
              className="info-link"
              exact
              to="/info"
              activeClassName={classes.mobileActive}
              isActive={(match) => {
                return !!match;
              }}
            >
              <ListItem button>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText primary="Information" />
              </ListItem>
            </NavLink>
          </List>
        </ListWrapper>
      </MobileDrawer>
    </Drawer>
  );

  return (
    <Theme>
      <CustomAppBar position="static">
        <Toolbar>
          <Image>
            <img src={Logo} alt="Logo" />
          </Image>
          <DesktopNav>
            <NavLink
              className="home-link"
              exact
              to="/"
              activeStyle={{
                color: "#d62828",
              }}
              isActive={(match) => {
                return !!match;
              }}
            >
              Home
            </NavLink>
            <NavLink
              className="info-link"
              exact
              to="/info"
              isActive={(match) => {
                return !!match;
              }}
              activeClassName={classes.desktopActive}
            >
              <NavButton>Information</NavButton>
            </NavLink>
          </DesktopNav>
          <MobileNav>
            <CustomIconButton
              edge="end"
              aria-label="menu"
              onClick={toggleDrawer("right", true)}
            >
              <Menu />
            </CustomIconButton>
            {drawer}
          </MobileNav>
        </Toolbar>
      </CustomAppBar>
    </Theme>
  );
}

export default withRouter(Header);
