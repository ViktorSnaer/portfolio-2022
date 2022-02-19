import React from "react";
import CardTablet from "./cardTablet";
import ProjectContainer from "./ProjectContainer";

import classes from "./Projects.module.css";

const projects = [
  {
    image: "computer.jpg",
    title: "To Do Application",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 0,
  },
  {
    image: "code.jpg",
    title: "Beyond The Bedroom",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 1,
  },
  {
    image: "computer.jpg",
    title: "Keflavik Departures",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 2,
  },
];

const Projects = () => {
  return (
    <div className={`screen-size ${classes.container}`}>
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
