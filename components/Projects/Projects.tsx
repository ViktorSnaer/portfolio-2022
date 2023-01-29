import React from "react";
import ProjectContainer from "./ProjectContainer";

import styles from "./Projects.module.css";

const projects = [
  {
    image: "beyondTheBedroom.png",
    title: "Beyond The Bedroom",
    subHeader: "Mixed-media resource for sexual education",
    key: 1,
    link: "https://www.beyondthebedroom.org/",
  },
  {
    image: "speed-typing-game.png",
    title: "Speed Typing Game",
    subHeader: "Three one-minute rounds of speed typing",
    key: 2,
    link: "https://speed-typing-game-psi.vercel.app/",
  },
  {
    image: "clock-work.png",
    title: "Clock Work",
    subHeader: "countdown timer meant for focused sessions",
    key: 0,
    link: "https://clock-work.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className={`screen-size ${styles.mainContainer}`} id="my-work">
      <h3 className={`section-title`}>My Work</h3>
      <p className={`section-text`}>
        My mission is to build functional responsive websites and web
        applications with the latest technologies. I put equal emphasis on
        functionality and design, here are some of my latest projects:
      </p>
      <div className={styles.container}>
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
