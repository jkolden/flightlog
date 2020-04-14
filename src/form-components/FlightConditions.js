import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import {
  infoColor,
  successColor,
  warningColor,
} from "../assets/ct-styles/material-kit-pro-react";

const GreenCheckbox = withStyles({
  root: {
    color: green[100],
    "&$checked": {
      color: green[500],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function FlightConditions() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormLabel component="legend">Flight Conditions</FormLabel>
      <FormControlLabel
        control={
          <GreenCheckbox
            icon={<WbSunnyIcon />}
            checkedIcon={<WbSunnyIcon />}
            name="checkedG"
            color="default"
          />
        }
        label="Day"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            icon={<Brightness2Icon />}
            checkedIcon={<Brightness2Icon />}
            name="checkedA"
          />
        }
        label="Night"
      />
      <FormControlLabel
        control={
          <GreenCheckbox
            icon={<AvTimerIcon />}
            checkedIcon={<AvTimerIcon />}
            name="checkedB"
          />
        }
        label="Instruments"
      />
    </FormGroup>
  );
}
