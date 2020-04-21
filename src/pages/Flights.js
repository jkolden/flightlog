import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FlightListItem from "../components/FlightListItem";
import { FlightsContext } from "../context/FlightsContext";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "calc(100vh - 112px)",
    overflow: "auto",
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function Flights() {
  const classes = useStyles();
  const { flights, dispatch } = useContext(FlightsContext);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Typography variant="h5" gutterBottom>
        My Flights
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <div className={classes.demo}>
            <List>
              {flights
                .sort(function (a, b) {
                  return a.id - b.id;
                })
                .map((flight) => (
                  <FlightListItem key={flight.id} flight={flight} />
                ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
