import React from "react";

import Image from "next/image";

import classes from "./Projects.module.css";

interface ProjectProps {
  image: string;
  title: string;
  subHeader: string;
}

const ProjectContainer = (props: ProjectProps) => {
  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
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
      </div>
      <h3 className={`gradient ${classes.projectTitle}`}>{props.title}</h3>
      <p>{props.subHeader}</p>
      <p className={`gradient`}>View Project ▶️</p>
    </div>
  );
};

export default ProjectContainer;
