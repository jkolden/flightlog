import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { green } from "@material-ui/core/colors";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
}));

export default function Flights({ flight }) {
  const classes = useStyles();

  return (
    <ListItem divider>
      <ListItemAvatar>
        {flight.status === "complete" ? (
          <CheckCircleIcon style={{ color: green[500] }} />
        ) : (
          <FlightTakeoffIcon />
        )}
      </ListItemAvatar>
      <ListItemText primary={<FlightListEntry flight={flight} />} />
      <ListItemSecondaryAction>
        <Link to={`/log/${flight.id}`}>
          <IconButton edge="end" aria-label="delete">
            {flight.status !== "complete" ? <ChevronRightIcon /> : ""}
          </IconButton>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
