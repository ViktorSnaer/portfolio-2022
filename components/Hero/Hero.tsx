import React from "react";
import Image from "next/image";

import classes from "./Hero.module.css";

import Navbar from "../Navbar/Navbar";
import Text from "./Text";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div style={styles.container}>
      <Image
        className={classes.backgroundImage}
        src={"/images/Portfolio-background.jpg"}
        alt="Neon city"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
      <Navbar />
      <Text />
      <Socials />
    </div>
  );
};

export default Hero;

const styles = {
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
} as const;
