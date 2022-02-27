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
    link: "https://to-do-app-crud-f9784.web.app/",
  },
  {
    image: "beyondTheBedroom.png",
    title: "Beyond The Bedroom",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 1,
    link: "https://www.beyondthebedroom.org/",
  },
  {
    image: "keflavikDepartures.png",
    title: "Keflavik Departures",
    subHeader: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    key: 2,
    link: "https://kef-departures.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <div className={`screen-size ${classes.mainContainer}`} id="my-work">
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
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
