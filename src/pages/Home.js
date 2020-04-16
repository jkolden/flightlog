import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import CarouselExample from "../components/Carousel";

import { UserContext } from "../context/UserContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

export default function Home() {
  const { user } = useContext(UserContext);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <main className={classes.content}>
        <CarouselExample />
      </main>
    </div>
  );
}
