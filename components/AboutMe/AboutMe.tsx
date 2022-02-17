import Image from "next/image";
import React from "react";

import classes from "./AboutMe.module.css";

const imageHeight = "300px";
const imageWidth = "350px";

const AboutMe = () => {
  return (
    <div className={`screen-size ${classes.container}`}>
      <div className={classes.textContainer}>
        <h1 className={classes.title}>About me</h1>
        <p className={`${classes.text} ${classes.topText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptas? Saepe eius soluta provident, unde nisi esse obcaecati quis
          quasi iste consequuntur dolores incidunt earum! Quis enim perferendis
          ex necessitatibus!
        </p>
        <p className={`${classes.text} ${classes.bottomText}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          voluptas? Saepe eius soluta provident, unde nisi esse obcaecati quis
          quasi iste consequuntur dolores incidunt earum! Quis enim perferendis
          ex necessitatibus!
        </p>
      </div>
      <div className={classes.imageContainer}>
        <div className={classes.computerImage}>
          <Image
            src={"/images/computer.jpg"}
            alt="Retro computer with purpulish background"
            height={imageHeight}
            width={imageWidth}
            objectFit="cover"
            objectPosition="center"
            className={classes.computer}
          />
        </div>
        <div className={classes.codeImage}>
          <Image
            src={"/images/code.jpg"}
            alt="Image of code from code editor"
            height={imageHeight}
            width={imageWidth}
            objectFit="cover"
            objectPosition="center"
            className={classes.computer}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
