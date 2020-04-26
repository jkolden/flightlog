import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CalcFlightTime from "../utilities/CalcFlightTime";

import { Grid, Paper, Container, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

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

export default function FlightSummary({ entry }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <h2>Flight Summary</h2>

      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.fixedHeightPaper}>
            <TextField
              id="actual-depart"
              label="Local Depart Time"
              className={classes.textField}
              value={entry.actualOut}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="actual-arrival"
              label="Local Arrival Time"
              className={classes.textField}
              value={entry.actualIn}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
