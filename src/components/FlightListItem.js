import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LogEntry from "../pages/LogEntry";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
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
        <Avatar>
          <CheckCircleIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={<FlightListEntry flight={flight} />} />
      <ListItemSecondaryAction>
        <Link to={`/log/${flight.id}`}>
          <IconButton edge="end" aria-label="delete">
            <ChevronRightIcon />
          </IconButton>
        </Link>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
