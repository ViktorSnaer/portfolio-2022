import React from "react";

import Image from "next/image";

import classes from "./Projects.module.css";

interface ProjectProps {
  image: string;
  title: string;
  subHeader: string;
  link: string;
}

const ProjectContainer = (props: ProjectProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <a href={props.link} target={"_blank"} rel="noreferrer">
          <Image
            layout="responsive"
            width={100}
            height={70}
            alt=""
            src={`/images/${props.image}`}
            objectFit="cover"
            objectPosition="center"
            className={classes.projectImage}
          />
        </a>
      </div>
      <h3 className={`${classes.projectTitle}`}>{props.title}</h3>
      <p className={classes.subHeader}>{props.subHeader}</p>
      <a href={props.link} target={"_blank"} rel="noreferrer">
        <p className={classes.linkProject}>View Project ▶</p>
      </a>
    </div>
  );
};

export default ProjectContainer;
