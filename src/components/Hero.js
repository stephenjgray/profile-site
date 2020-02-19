import React from "react";

import backgroundImage from "../assets/max-nelson-Se9ufo2dO_g-unsplash2.jpg";
import { Button, Link, Typography } from "@material-ui/core";

import cv from "../assets/Stephen J Gray - February 2020.pdf"

const Hero = props => {
  return (
    <section
      className="hero"
      name="home"
      style={{
        paddingBottom: 16,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className={props.root}>
        <Typography variant={"overline"}>INTRODUCING</Typography>
        <Typography component="h1" variant={"h1"} weight={"bold"} className="handwriting" gutterBottom>
          {props.name}
        </Typography>
        <Typography component="h2" variant={"h5"} gutterBottom>
          A {props.jobTitle} based in {props.address.town},{" "}
          {props.address.county}.
        </Typography>
        <br />
        <br />
        <Link href={cv} download>
          <Button variant="outlined" >
            Download CV
          </Button>
        </Link>
          
      </div>
    </section>
  );
};

export default Hero;
