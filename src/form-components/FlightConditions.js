import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { green, blue, yellow } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid, Paper } from "@material-ui/core";

import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import AvTimerIcon from "@material-ui/icons/AvTimer";

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

const GreenCheckbox = withStyles({
  root: {
    color: "default",
    "&$checked": {
      color: green[500],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const BlueCheckbox = withStyles({
  root: {
    color: "default",
    "&$checked": {
      color: blue[500],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const YellowCheckbox = withStyles({
  root: {
    color: "default",
    "&$checked": {
      color: yellow[700],
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
  const classes = useStyles();

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <h3>Flight Conditions</h3>
      <Grid container spacing={1}>
        <Grid item item xs={12} md={4} lg={3}>
          <Paper className={classes.paper}>
            <FormGroup>
              <FormControlLabel
                control={
                  <YellowCheckbox
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
                  <BlueCheckbox
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
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
