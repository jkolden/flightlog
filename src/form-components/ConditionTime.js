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

export default function ConditionTime() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Operational Condition Time</h3>
      <Grid container spacing={1}>
        <Grid item item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <TextField
              variant="outlined"
              id="conditionNight"
              label="Night"
              type="decimal"
            />
            <TextField
              variant="outlined"
              id="conditionIfr"
              label="IFR"
              type="decimal"
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
