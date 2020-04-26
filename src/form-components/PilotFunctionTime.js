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

export default function PilotFunctionTime() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Pilot Function Time</h3>
      <Grid container spacing={1}>
        <Grid item item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <TextField
              variant="outlined"
              id="pic"
              label="Pilot in Command"
              type="decimal"
            />
            <TextField
              variant="outlined"
              id="copilot"
              label="Co-Pilot"
              type="decimal"
            />
            <TextField
              variant="outlined"
              id="dual"
              label="Dual"
              type="decimal"
            />
            <TextField
              variant="outlined"
              id="instructor"
              label="Instructor"
              type="decimal"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
