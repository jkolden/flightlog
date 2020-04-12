import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import FlightListItem from "../components/FlightListItem";

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

const flights = [
  {
    id: 1,
    flightNumber: "4092",
    to: "KORD",
    from: "KDBQ",
    aircraftId: "N68174",
    aircraftType: "ERJ-145",
    departDate: "31-May-20",
    departTime: "0600",
    arriveTime: "0730",
    flightTime: "1.5",
  },
  {
    id: 2,
    flightNumber: "4179",
    to: "KSAW",
    from: "KORD",
    aircraftId: "N641AE",
    aircraftType: "ERJ-145",
    departDate: "01-Jun-20",
    departTime: "0900",
    arriveTime: "1050",
    flightTime: "1.75",
  },
];

export default function Flights() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            My Flights
          </Typography>
          <div className={classes.demo}>
            <List>
              {flights.map((flight) => (
                <FlightListItem key={flight.id} flight={flight} />
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
