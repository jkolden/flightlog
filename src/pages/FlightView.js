import React, { useState, useEffect, useContext } from "react";
import { FlightsContext } from "../context/FlightsContext";
import CalcFlightTime from "../utilities/CalcFlightTime";

import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Paper,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  paper: {
    marginTop: "20",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    marginBottom: theme.spacing(4),
  },
}));

export default function FlightView({ match }) {
  const [currentFlight, setCurrentFlight] = useState({});
  const { flights, dispatch } = useContext(FlightsContext);

  const classes = useStyles();

  useEffect(() => {
    const flight = flights.filter((flight) => flight.id == match.params.id);
    setCurrentFlight(flight[0]);
  }, []);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography variant="h5" gutterBottom>
        {`Flight ${currentFlight.flightNumber}`}
      </Typography>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <TextField
                id="sch-dep"
                label="Scheduled UTC Departure"
                className={classes.textField}
                value={currentFlight.scheduledDeparture}
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
              />
              <TextField
                id="sch-arr"
                label="Scheduled UTC Arrival"
                className={classes.textField}
                value={currentFlight.scheduledArrival}
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
              />
              <TextField
                id="sch-time"
                label="Scheduled Flight Time"
                className={classes.textField}
                value={CalcFlightTime(
                  currentFlight.scheduledDeparture,
                  currentFlight.scheduledArrival
                )}
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Paper className={classes.paper}>
              <TextField
                id="act-dep"
                label="Actual UTC Departure"
                className={classes.textField}
                value={currentFlight.actualDeparture}
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
              />
              <TextField
                id="act-arr"
                label="Actual UTC Arrival"
                className={classes.textField}
                value={currentFlight.actualArrival}
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
              />
              <TextField
                id="act-time"
                label="Actual Flight Time"
                className={classes.textField}
                value={CalcFlightTime(
                  currentFlight.actualDeparture,
                  currentFlight.actualArrival
                )}
                InputLabelProps={{
                  shrink: true,
                  readOnly: true,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
