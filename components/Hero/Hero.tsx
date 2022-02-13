import React from "react";
import Image from "next/image";
import classes from "./Hero.module.css";
import Navbar from "../Navbar/Navbar";

const styles = {
  container: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    position: "relative",
    zIndex: "1",
    margin: "auto 64px",
  },
} as const;

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
      <div style={styles.content}>
        <h1 className="headline-l gradient">
          Hi,
          <br />
          I'm Viktor Snaer
          <br />
          Web Developer
        </h1>
        <h3 className="headline-s gradient">Front End Developer</h3>
        <button className="button">Contact me</button>
      </div>
    </div>
  );
};

export default Hero;
