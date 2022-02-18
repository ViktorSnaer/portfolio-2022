import React from "react";
import Image from "next/image";

import classes from "./Hero.module.css";

import Navbar from "../Navbar/Navbar";
import Text from "./Text";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className={classes.container}>
      <Image
        className={classes.backgroundImage}
        src={"/images/Portfolio-background.jpg"}
        alt="Neon city"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      <Navbar />
      <Text />
      <Socials />
    </div>
  );
};

export default Hero;
