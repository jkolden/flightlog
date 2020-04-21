import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { green } from "@material-ui/core/colors";
import ScaleLoader from "react-spinners/ScaleLoader";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SearchIcon from "@material-ui/icons/Search";
import CheckIcon from "@material-ui/icons/Check";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightListEntry from "../components/FlightListEntry";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  green: {
    color: theme.palette.getContrastText(green[300]),
    backgroundColor: green[300],
  },
}));

export default function Flights({ flight }) {
  const classes = useStyles();

  return (
    <ListItem divider>
      <ListItemAvatar>
        {flight.status === "enroute" ? (
          <ScaleLoader />
        ) : (
          <Avatar className={flight.status == "complete" ? classes.green : ""}>
            {flight.status === "complete" ? (
              <CheckIcon />
            ) : (
              <FlightTakeoffIcon />
            )}
          </Avatar>
        )}
      </ListItemAvatar>
      <ListItemText primary={<FlightListEntry flight={flight} />} />
      <ListItemSecondaryAction>
        {flight.status !== "complete" ? (
          <Link to={`/log/${flight.id}`}>
            <IconButton edge="end" aria-label="details">
              <ChevronRightIcon />
            </IconButton>
          </Link>
        ) : (
          <Link to={`/flights/${flight.id}`}>
            <IconButton edge="end" aria-label="view">
              <SearchIcon />
            </IconButton>
          </Link>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}
