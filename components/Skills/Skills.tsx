import React from "react";
import Skill from "./Skill";
import styles from "./Skill.module.css";

export default function Skills() {
  const skillContent = {
    __html: (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </div>
    ),
    title: "Responsive Websites",
    subHeading: "Creating Websites that work on all different screens",
  };

  return (
    <div>
      <Skill
        svg={skillContent.__html}
        title={skillContent.title}
        subHeading={skillContent.subHeading}
      />
    </div>
  );
}