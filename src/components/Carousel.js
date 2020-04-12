import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Grid, Container } from "@material-ui/core";
import image from "../assets/images/ross-parmly-rf6ywHVkrlY-unsplash.jpg";
import image2 from "../assets/images/emiel-molenaar-JOrUKpuMOeU-unsplash.jpg";
import image3 from "../assets/images/amarnath-tade-gXs-mwiXrhA-unsplash.jpg";
import cnbc from "../assets/images/cnbc.svg";
import CTCard from "../ct-components/Card/Card";
import CTCardBody from "../ct-components/Card/CardBody";
import CTButton from "../ct-components/CTButton";
import Subject from "@material-ui/icons/Subject";
import SummaryInfo from "./SummaryInfo";

import sectionStyle from "../assets/ct-styles/sectionStyle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(sectionStyle);

const colors = ["primary", "danger", "warning", "info"];

function CarouselExample(props) {
  var items = [
    {
      title: "Airline Industry Restart",
      description:
        "The airline industry could restart in the second quarter, says aviation exec",
      image: image,
    },
    {
      title: "Effects of the Pandemic",
      description: "Will pandemic prompt a green reset for aviation?",
      image: image2,
    },
    {
      title: "What Airline Routes Are Still Active?",
      description:
        "Many domestic and international airlines are cutting their capacity.",
      image: image3,
    },
    {
      title: "New Training Requirements for Airline Pilots",
      description:
        "Today’s aviation industry was impacted by an accident a decade ago.",
      image: image2,
    },
  ];

  return (
    <Container maxWidth="lg">
      <Carousel>
        {items.map((item) => (
          <Item item={item} />
        ))}
      </Carousel>

      <SummaryInfo />
    </Container>
  );
}

function Item({ item }) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6}>
        <CTCard background style={{ backgroundImage: `url(${item.image})` }}>
          <CTCardBody background>
            <h6 className={classes.cardCategoryWhite}>NEWS</h6>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <h3 className={classes.cardTitleWhite}>{item.title}</h3>
            </a>
            <h3 className={classes.cardTitleWhite}>{item.description}</h3>
            <CTButton
              round
              color={colors[Math.floor(Math.random() * colors.length)]}
            >
              <Subject /> Read Article
            </CTButton>
          </CTCardBody>
        </CTCard>
      </Grid>
    </Grid>
  );
}

export default CarouselExample;
