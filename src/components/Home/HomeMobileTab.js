/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tabs, Tab, Box, withStyles } from "@material-ui/core";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box style={{ padding: "1% 4%" }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    "& .infected-tab": {
      backgroundColor: "#d62828",
      color: "#eae2b7",
      borderBottom: "unset",
    },
    "& .infected-panel": {
      "& h3, h4": {
        color: "#d62828",
      },
    },
    "& .recovered-tab": {
      backgroundColor: "#026a41",
      color: "#eae2b7",
      borderBottom: "unset",
    },
    "& .recovered-panel": {
      "& h3, h4": {
        color: "#026a41",
      },
    },
    "& .deaths-tab": {
      backgroundColor: "#3e3e3e",
      color: "#eae2b7",
      borderBottom: "unset",
    },
    "& .deaths-panel": {
      "& h3, h4": {
        color: "#3e3e3e",
      },
    },
  },
  default: {
    backgroundColor: "transparent",
    color: "#003049",
    borderBottom: "1px solid #f0f0f0",
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const CustomAppBar = withStyles(() => ({
  root: {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
}))(AppBar);

const CustomTab = withStyles((theme) => ({
  root: {
    fontFamily: "Rubik, sans-serif",
    fontWeight: "600",
    fontSize: "0.85rem",
    [theme.breakpoints.down("299.98")]: {
      fontSize: "0.73rem",
    },
  },
}))(Tab);

const HomeMobileTab = ({ infected, recovered, death }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderBorderStyle = (param) => {
    switch (param) {
      case 1:
        return "2px solid #026a41";
      case 2:
        return "2px solid #3e3e3e";
      default:
        return "2px solid #d62828";
    }
  };

  return (
    <div className={classes.root} style={{ border: renderBorderStyle(value) }}>
      <CustomAppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          TabIndicatorProps={{ style: { background: "none" } }}
        >
          <CustomTab
            label="Infected"
            wrapped
            className={value === 0 ? "infected-tab" : classes.default}
            {...a11yProps(0)}
          />
          <CustomTab
            label="Recovered"
            wrapped
            className={value === 1 ? "recovered-tab" : classes.default}
            {...a11yProps(1)}
          />
          <CustomTab
            label="Deaths"
            wrapped
            className={value === 2 ? "deaths-tab" : classes.default}
            {...a11yProps(2)}
          />
        </Tabs>
      </CustomAppBar>
      <TabPanel
        value={value}
        index={0}
        className={value === 0 ? "infected-panel" : ""}
      >
        {infected}
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        className={value === 1 ? "recovered-panel" : ""}
      >
        {recovered}
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        className={value === 2 ? "deaths-panel" : ""}
      >
        {death}
      </TabPanel>
    </div>
  );
};

/* eslint-disable react/forbid-prop-types */
HomeMobileTab.propTypes = {
  infected: PropTypes.object.isRequired,
  recovered: PropTypes.object.isRequired,
  death: PropTypes.object.isRequired,
};

export default HomeMobileTab;
