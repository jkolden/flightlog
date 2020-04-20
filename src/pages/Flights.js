import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import FlightListItem from "../components/FlightListItem";
import { FlightsContext } from "../context/FlightsContext";

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
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
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" className={classes.title}>
            My Flights
          </Typography>

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
