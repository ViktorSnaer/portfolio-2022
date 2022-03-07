import React from "react";
import SkillIcons from "./SkillIcons";

import classes from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={`screen-size ${classes.pageContainer}`} id="skills">
      <h3 className={`section-title ${classes.skillTitle}`}>Skills</h3>
      <p className="section-text">
        My web development skill set has been built by online courses, reading
        material, reviewing documentation, and of course- putting my knowledge
        to the test by developing websites. I am a firm believer in
        project-based learning where I put my skills to the test and am able to
        find solutions to my problems. Each project is an opportunity to
        strengthen or grow my skill set.
      </p>
      <div className={classes.skillContainer}>
        <div>
          <h3>Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
        </div>
        <div>
          <h3>Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Next.js (React library)</li>
          </ul>
        </div>
        <div>
          <h3>Firebase</h3>
          <ul>
            <li>Authentication</li>
            <li>Analytics</li>
            <li>Database</li>
          </ul>
        </div>
        <div>
          <h3>Version Control</h3>
          <ul>
            <li>Git</li>
          </ul>
        </div>
        <div>
          <h3>Design Platform</h3>
          <ul>
            <li>Figma</li>
          </ul>
        </div>
      </div>
      <SkillIcons />
    </div>
  );
};

export default Stack;
