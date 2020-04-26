import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Container, Typography } from "@material-ui/core";
import { FlightsContext } from "../context/FlightsContext";
import TextField from "@material-ui/core/TextField";

import PilotType from "../form-components/PilotType";
import SinglePilotTime from "../form-components/SinglePilotTime";
import Takeoffs from "../form-components/Takeoffs";
import Landings from "../form-components/Landings";
import ConditionTime from "../form-components/ConditionTime";
import PilotFunctionTime from "../form-components/PilotFunctionTime";
import FlightConditions from "../form-components/FlightConditions";
import Signature from "../form-components/Signature";
import CTButton from "../ct-components/CTButton";
import TimerIcon from "@material-ui/icons/Timer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import LanguageIcon from "@material-ui/icons/Language";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FlightSummary from "../components/FlightSummary";
import swal from "sweetalert";

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
  penColor: theme.secondary,
}));

export default function LogEntry({ match }) {
  const { flights, dispatch } = useContext(FlightsContext);
  const [currentFlight, setCurrentFlight] = useState({});
  const [entry, setEntry] = useState({
    actualIn: "",
    actualOut: "",
    singleEngine: "",
    multiEngine: "",
    multiPilot: "",
  });
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const flight = flights.filter((flight) => flight.id == match.params.id);
    setCurrentFlight(flight[0]);
    if (flight[0].actualDeparture) {
      setEntry({
        actualOut: flight[0].actualDeparture,
      });
    }
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
    setEntry((prev) => ({
      ...prev,
      actualOut: new Date(),
    }));
  };

  const handleInClick = () => {
    setEntry({
      ...entry,
      actualIn: new Date(),
    });
  };

  const handleOutChange = (e) => {
    let actualOut = entry.actualOut ? entry.actualOut : new Date();
    let timeString = e.target.value;
    let data = timeString.split(":");
    actualOut.setUTCHours(data[0]);
    actualOut.setUTCMinutes(data[1]);
    setEntry({
      ...entry,
      actualOut: actualOut,
    });
  };

  const handleChange = (name) => (e) => {
    setEntry({
      ...entry,
      [name]: e.target.value,
    });
  };

  const handleNumberChange = (name) => (e) => {
    setEntry({
      ...entry,
      [name]: e.target.valueAsNumber,
    });
  };

  const handleInChange = (e) => {
    let actualIn = entry.actualIn ? entry.actualIn : new Date();
    let timeString = e.target.value;
    let data = timeString.split(":");
    actualIn.setUTCHours(data[0]);
    actualIn.setUTCMinutes(data[1]);
    setEntry({
      ...entry,
      actualIn: actualIn,
    });
  };

  const sweetAlert = (e) => {
    swal({
      title: "Ready to submit this log entry?",
      icon: "info",
      buttons: ["Cancel", "Submit"],
      dangerMode: false,
    }).then((submitted) => {
      if (submitted) {
        handleSubmit(e);
        swal("Thank you, your log has been submitted!", {
          icon: "success",
        });
        history.push("/flights");
      } else {
        swal("OK, you can keep working on this log entry", {
          icon: "info",
        });
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    currentFlight.actualDeparture = entry.actualOut;
    currentFlight.actualArrival = entry.actualIn;

    dispatch({ type: "post", payload: currentFlight });
  };

  const handleSave = () => {
    currentFlight.actualDeparture = entry.actualOut;
    dispatch({ type: "save", payload: currentFlight });
    history.push("/flights");
  };

  return (
    <div>
      <h2>
        Log Entry
        {entry.actualOut && !entry.actualIn ? (
          <IconButton onClick={handleSave}>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
          </IconButton>
        ) : (
          <IconButton>
            <LanguageIcon></LanguageIcon>
          </IconButton>
        )}
      </h2>

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

        <SinglePilotTime handleChange={handleNumberChange} entry={entry} />
        <Takeoffs />
        <Landings />
        <ConditionTime />
        <PilotFunctionTime />
        <FlightConditions />

        <h2>Certify and Submit</h2>

        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={classes.fixedHeightPaper}>
              <Signature />
              <Button variant="contained" color="primary" onClick={sweetAlert}>
                Submit
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
