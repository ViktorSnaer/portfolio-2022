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
    <div className={`screen-size ${classes.mainContainer}`}>
      <h3 className={`section-title`}>My Work</h3>
      <p className={`section-text`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
        error, delectus assumenda sed obcaecati odit quia quo atque itaque?
        Impedit, tempora provident magni quod repellat quidem numquam delectus
        dolorum facere.
      </p>
      <div className={classes.container}>
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
    </div>
  );
};

export default Projects;
