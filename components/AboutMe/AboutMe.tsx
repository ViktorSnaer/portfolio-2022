import Image from "next/image";
import React from "react";

import classes from "./AboutMe.module.css";

const imageHeight = 300;
const imageWidth = 350;

const AboutMe = () => {
  return (
    <div className={`screen-size ${classes.container}`} id="about-me">
      <div className={classes.containerHalf}>
        <div className={classes.textContainer}>
          <h1 className={`section-title`}>About me</h1>
          <p className={`section-text`}>
            Seeing users enjoy a project I made is a priceless feeling. Taking
            an idea and going through the steps of design, code, and finally
            publishing a live website is always fulfilling, regardless of the
            project. Working and studying from home has strengthened my work
            ethic and aided in my work-life balance. I value the accessibility
            of the information age as it has allowed me to achieve my web
            development goals.
          </p>
        </div>
      </div>
      <div className={classes.containerHalf}>
        <div className={classes.imageContainer}>
          <div className={classes.computerImage}>
            <Image
              src={"/images/computer.jpg"}
              alt="Retro computer with purple background"
              height={imageHeight}
              width={imageWidth}
              className={classes.aboutImage}
            />
          </div>
          <div className={classes.codeImage}>
            <Image
              src={"/images/code.jpg"}
              alt="Image of code from code editor"
              height={imageHeight}
              width={imageWidth}
              className={classes.aboutImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
