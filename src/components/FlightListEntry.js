import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "left",
    color: theme.palette.text.primary,
  },
}));

export default function FlightListEntry({ flight }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h6">{`${flight.flightNumber} ${flight.from}-${flight.to}`}</Typography>
          <Typography>{`${flight.aircraftId}, ${flight.aircraftType}`}</Typography>
        </Grid>
        <Grid container item xs={4} direction="row" alignItems="stretch">
          <Grid item xs={12}>
            <Typography variant="body2">{flight.departDate}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{`${flight.departTime} - ${flight.arriveTime}`}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2">{`${flight.flightTime} hrs`}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
