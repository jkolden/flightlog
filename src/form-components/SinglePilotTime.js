import React from "react";
import {
  Grid,
  Paper,
  TextField,
  FormGroup,
  FormLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    marginTop: "20",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function SinglePilotTime({ handleChange, entry }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Actual Flight Time</h3>
      <Grid container spacing={1}>
        <Grid item item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <TextField
              variant="outlined"
              id="single-engine"
              name="single-engine"
              label="Single Pilot, Single Engine"
              type="number"
              inputMode="decimal"
              onChange={handleChange("singleEngine")}
              value={entry.singleEngine}
            />
            <TextField
              variant="outlined"
              id="multi-engine"
              name="multi-engine"
              label="Single Pilot, Multi Engine"
              type="number"
              inputMode="decimal"
              onChange={handleChange("multiEngine")}
            />
            <TextField
              variant="outlined"
              id="multi-pilot"
              name="multi-pilot"
              label="Multi-Pilot"
              type="number"
              inputMode="decimal"
              onChange={handleChange("multiPilot")}
            />
            <TextField
              variant="outlined"
              id="total"
              label="Total Flight Time"
              type="decimal"
              value={entry.singleEngine + entry.multiEngine + entry.multiPilot}
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
