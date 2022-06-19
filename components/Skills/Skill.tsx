import React from "react";
import styles from "./Skill.module.css";

interface SkillProps {
  title: string;
  subHeading: string;
  svg: string;
}

export default function Skill({ svg, title, subHeading }: SkillProps) {
  return (
    <div className={`${styles.container} box-shadow`}>
      <div
        className={styles.iconContainer}
        dangerouslySetInnerHTML={{ __html: `${svg}` }}
      ></div>
      <h3>{title}</h3>
      <p>{subHeading}</p>
    </div>
  );
}
