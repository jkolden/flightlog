import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import flights from "../assets/static/flights";
import CTButton from "../ct-components/CTButton";
import TimerIcon from "@material-ui/icons/Timer";
import {
  MuiPickersUtilsProvider,
  InlineDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(4),
    width: 200,
  },
}));

export default function LogEntry() {
  const [inTime, setInTime] = useState();
  const classes = useStyles();

  const handleInClick = (name) => {
    let logTime = new Date();
    setInTime(logTime);
  };

  const handleInTimeChange = (e) => {
    console.log(e);
    setInTime(e.target);
  };

  return (
    <div>
      <h2>Log Entry</h2>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <FlightTakeoffIcon fontSize="large" />
              <h2>KDBQ</h2>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  className={classes.textField}
                  margin="normal"
                  id="out-time"
                  label="Out Time"
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
              <CTButton color="primary">
                <TimerIcon />
                Set OUT Time
              </CTButton>
            </Paper>
          </Grid>
          <Grid item xs={6} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <FlightLandIcon fontSize="large" />
              <h2>KORD</h2>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardTimePicker
                  className={classes.textField}
                  margin="normal"
                  id="in-time"
                  label="In Time"
                  value={inTime}
                  onChange={() => handleInTimeChange()}
                  KeyboardButtonProps={{
                    "aria-label": "change time",
                  }}
                />
              </MuiPickersUtilsProvider>
              <CTButton color="primary" onClick={() => handleInClick()}>
                <TimerIcon />
                Set IN Time
              </CTButton>
            </Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <Typography>Flight Details</Typography>
              <TextField
                id="actual-time"
                label="Actual Flight Time"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
