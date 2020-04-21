import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MiltaryFormat from "../utilities/MiltaryFormat";
import DateFormat from "../utilities/DateFormat";
import CalcFlightTime from "../utilities/CalcFlightTime";

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

  let departure = flight.actualDeparture
    ? flight.actualDeparture
    : flight.scheduledDeparture;

  let arrival = flight.actualArrival
    ? flight.actualArrival
    : flight.scheduledArrival;

  let flightTime = CalcFlightTime(departure, arrival);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography variant="h6">{`${flight.flightNumber} ${flight.from}-${flight.to}`}</Typography>
          <Typography>{`${flight.aircraftId}, ${flight.aircraftType}`}</Typography>
        </Grid>
        <Grid container item xs={4} direction="row" alignItems="stretch">
          <Typography variant="body2">
            {DateFormat(flight.scheduledDeparture)}
          </Typography>
          <Typography variant="body2">{`${MiltaryFormat(
            departure
          )} - ${MiltaryFormat(arrival)}`}</Typography>
          <Typography variant="body2">{`${flight.flightTime} hrs`}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
