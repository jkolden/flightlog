import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container, Typography } from "@material-ui/core";
import { FlightsContext } from "../context/FlightsContext";
import TextField from "@material-ui/core/TextField";

import PilotType from "../form-components/PilotType";
import FlightConditions from "../form-components/FlightConditions";
import Signature from "../form-components/Signature";
import CTButton from "../ct-components/CTButton";
import TimerIcon from "@material-ui/icons/Timer";

import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
  fixedHeightPaper: {
    marginTop: "20",
    height: 300,
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
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

export default function LogEntry({ match }) {
  const [time, setTime] = useState({ in: "", out: "" });
  const { flights, dispatch } = useContext(FlightsContext);
  const [currentFlight, setCurrentFlight] = useState({});
  const [entry, setEntry] = useState({});
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const flight = flights.filter((flight) => flight.id == match.params.id);
    setCurrentFlight(flight[0]);
  }, []);

  const zeroPad = (num, places) => String(num).padStart(places, "0");

  const formatTime = (localDate) => {
    if (localDate) {
      let hours = localDate.getUTCHours();
      let minutes = localDate.getUTCMinutes();
      return `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}`;
    }
    return "";
  };

  const handleOutClick = () => {
    let localTime = new Date();

    setEntry((prev) => ({
      ...prev,
      actualOut: localTime,
    }));
  };

  const handleInClick = () => {
    let localTime = new Date();

    setEntry({
      ...entry,
      actualIn: localTime,
    });
  };

  const handleOutChange = (e) => {
    let currentDate = entry.actualOut;
    let timeString = e.target.value;
    let data = timeString.split(":");
    currentDate.setUTCHours(data[0]);
    currentDate.setUTCMinutes(data[1]);
    setEntry({
      ...entry,
      actualOut: currentDate,
    });
  };

  const handleChange = (name) => (e) => {
    setEntry({
      ...entry,
      [name]: e.target.value,
    });
  };

  const handleInChange = (e) => {
    let currentDate = entry.actualIn;
    let timeString = e.target.value;
    let data = timeString.split(":");
    currentDate.setUTCHours(data[0]);
    currentDate.setUTCMinutes(data[1]);
    setEntry({
      ...entry,
      actualIn: currentDate,
    });
  };

  const handleSubmit = () => {
    dispatch({ type: "post", payload: currentFlight });
    history.push("/flights");
  };

  return (
    <div>
      <h2>Log Entry</h2>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <FlightTakeoffIcon fontSize="large" />
              <h1>{currentFlight.from}</h1>
              <TextField
                variant="outlined"
                id="outTime"
                label="UTC Out"
                type="time"
                onChange={handleOutChange}
                value={formatTime(entry.actualOut)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 3000, // 5 min
                }}
              />
              <CTButton color="primary" size="lg" onClick={handleOutClick}>
                <TimerIcon />
                Set OUT Time
              </CTButton>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <FlightLandIcon fontSize="large" />
              <h1>{currentFlight.to}</h1>
              <TextField
                variant="outlined"
                id="inTime"
                label="UTC In"
                type="time"
                onChange={handleInChange}
                value={formatTime(entry.actualIn)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 3000, // 5 min
                }}
              />
              <CTButton color="primary" size="lg" onClick={handleInClick}>
                <TimerIcon />
                Set IN Time
              </CTButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <PilotType handleChange={handleChange} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.paper}>
              <FlightConditions />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <h2>Flight Summary</h2>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <TextField
                id="actual-depart"
                label="Local Depart Time"
                className={classes.textField}
                value={time.out}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="actual-arrival"
                label="Local Arrival Time"
                className={classes.textField}
                value={time.in}
                InputLabelProps={{
                  shrink: true,
                }}
              />

              <TextField
                id="actual-time"
                label="Actual Flight Time"
                value={`${((time.in - time.out) / 3600000).toFixed(0)} + ${(
                  ((time.in - time.out) % 3600000) /
                  60000
                ).toFixed(2)} `}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <h2>Certify and Submit</h2>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <Signature />
              <CTButton color="primary" size="lg" onClick={handleSubmit}>
                Submit Log Entry
              </CTButton>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
