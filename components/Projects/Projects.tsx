import React from "react";
import ProjectContainer from "./ProjectContainer";
import Image from "next/image";

import classes from "./Projects.module.css";

const projects = [
  {
    image: "toDoApp.png",
    title: "To Do Application",
    subHeader: "Set your tasks and catagories them by priority.",
    key: 0,
    link: "https://to-do-app-crud-f9784.web.app/",
  },
  {
    image: "beyondTheBedroom.png",
    title: "Beyond The Bedroom",
    subHeader: "Mixed-media resource for sexual education.",
    key: 1,
    link: "https://www.beyondthebedroom.org/",
  },
  {
    image: "keflavikDepartures.png",
    title: "Keflavik Departures",
    subHeader: "Displays all outgoing flights out of Keflavik.",
    key: 2,
    link: "https://kef-departures.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <div className={`screen-size ${classes.mainContainer}`} id="my-work">
      <h3 className={`section-title`}>My Work</h3>
      <p className={`section-text`}>
        My mission is to build functional responsive websites and web
        applications with the latest technologies. I put equal emphasis on
        functionality and design, here are some of my latest projects:
      </p>
      <div className={classes.container}>
        {projects.map((project) => {
          return (
            <ProjectContainer
              key={project.key}
              image={project.image}
              title={project.title}
              subHeader={project.subHeader}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
