import React from "react";

import Image from "next/image";

import styles from "./ProjectContainer.module.css";

interface ProjectProps {
  image: string;
  title: string;
  subHeader: string;
  link: string;
}

const ProjectContainer = (props: ProjectProps) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.imageContainer} box-shadow`}>
        <a href={props.link} target={"_blank"} rel="noreferrer">
          <Image
            alt=""
            src={`/images/${props.image}`}
            fill
            style={{ objectFit: "cover" }}
            className={styles.projectImage}
          />
        </a>
      </div>
      <h3 className={`${styles.projectTitle}`}>{props.title}</h3>
      <p className={styles.subHeader}>{props.subHeader}</p>
      <a href={props.link} target={"_blank"} rel="noreferrer">
        <p className={styles.linkProject}>View Project ▶</p>
      </a>
    </div>
  );
};

export default ProjectContainer;
