import Image from "next/image";
import React from "react";

import classes from "./AboutMe.module.css";

const imageHeight = "300px";
const imageWidth = "350px";

const AboutMe = () => {
  return (
    <div className={`screen-size ${classes.container}`} id="about-me">
      <div className={classes.containerHalf}>
        <div className={classes.textContainer}>
          <h1 className={`section-title`}>About me</h1>
          <p className={`section-text`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            ipsum id amet, magnam earum, nam incidunt soluta sit labore debitis,
            adipisci quo necessitatibus impedit officiis autem. Dolor labore
            voluptate reprehenderit ducimus nihil sint voluptatum quos amet
            nulla iure autem temporibus tempora voluptas quam, eveniet numquam
            quibusdam dolorem totam, officiis blanditiis molestiae fugit
            facilis. Ratione voluptate saepe asperiores, itaque iure qui quod
            ipsum rerum.
          </p>
        </div>
      </div>
      <div className={classes.containerHalf}>
        <div className={classes.imageContainer}>
          <div className={classes.computerImage}>
            <Image
              src={"/images/computer.jpg"}
              alt="Retro computer with purpulish background"
              height={imageHeight}
              width={imageWidth}
              objectFit="cover"
              objectPosition="center"
              className={classes.aboutImage}
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
              className={classes.aboutImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
