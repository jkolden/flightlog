import React from "react";
import { Link } from "react-router-dom";
/* import mobiscroll */
import {
  BottomNavigation,
  BottomNavigationAction,
  Badge,
} from "@material-ui/core";
import "@mobiscroll/react-lite/dist/css/mobiscroll.min.css";

/* Icons */

import Settings from "@material-ui/icons/Settings";
import PieChartIcon from "@material-ui/icons/PieChart";
import Home from "@material-ui/icons/Home";
import FlightIcon from "@material-ui/icons/Flight";

function BottomNav({ val, onChange }) {
  return (
    <BottomNavigation value={val} onChange={(e, tab) => onChange(tab)}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<Home />}
      />
      <BottomNavigationAction
        component={Link}
        to="/flights"
        label="Flights"
        icon={
          <Badge badgeContent={2} color="secondary">
            <FlightIcon />
          </Badge>
        }
      />

      <BottomNavigationAction
        component={Link}
        to="/analytics"
        label="Analytics"
        icon={<PieChartIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/settings"
        label="Settings"
        icon={<Settings />}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
