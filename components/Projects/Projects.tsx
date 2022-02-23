import React from "react";
import ProjectContainer from "./ProjectContainer";
import Image from "next/image";

import classes from "./Projects.module.css";

const projects = [
  {
    image: "toDoApp.png",
    title: "To Do Application",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 0,
  },
  {
    image: "beyondTheBedroom.png",
    title: "Beyond The Bedroom",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 1,
  },
  {
    image: "keflavikDepartures.png",
    title: "Keflavik Departures",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 2,
  },
];

const Projects = () => {
  return (
    <div className={`screen-size ${classes.container}`}>
      <Image
        className={classes.backgroundImage}
        src={"/images/background.jpg"}
        alt="Neon city"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
      />
      {projects.map((project) => {
        return (
          <ProjectContainer
            key={project.key}
            image={project.image}
            title={project.title}
            subHeader={project.subHeader}
          />
        );
      })}
    </div>
  );
};

export default Projects;
