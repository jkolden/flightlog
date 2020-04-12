import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LongDateFormat from "../utilities/LongDateFormat";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeightPaper: {
    marginTop: "20",
    height: 200,
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

export default function SummaryInfo() {
  const classes = useStyles();
  let mydate = new Date();
  let formattedDate = LongDateFormat(mydate);

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={classes.fixedHeightPaper}>
            <Typography variant="h6" color="textPrimary">
              Total Flight Hours
            </Typography>
            <Typography
              color="textSecondary"
              className={classes.depositContext}
            >
              {formattedDate}
            </Typography>
            <Typography variant="h3">657</Typography>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
