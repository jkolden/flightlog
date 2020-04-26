import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    marginTop: "20",
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const PilotType = ({ handleChange }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={classes.paper}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="pilot-type">Pilot Function Type</InputLabel>
            <NativeSelect
              onChange={handleChange("type")}
              fullWidth
              inputProps={{
                name: "pilot-type",
                id: "pilot-type",
              }}
            >
              <option aria-label="None" value="" />
              <option value={"Solo"}>Solo</option>
              <option value={"Pilot in Command"}>Pilot in Command</option>
              <option value={"Second in Command"}>Second in Command</option>
              <option value={"Flight Simulator"}>Flight Simulator</option>
              <option value={"Training Received"}>Training Received</option>
            </NativeSelect>
          </FormControl>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PilotType;
