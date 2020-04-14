import React from "react";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const PilotType = ({ handleChange }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="pilot-type">Pilot Experience Type</InputLabel>
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
      <FormHelperText></FormHelperText>
    </FormControl>
  );
};

export default PilotType;
