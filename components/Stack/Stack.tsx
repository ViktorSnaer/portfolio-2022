import React from "react";
import SkillIcons from "./SkillIcons";

import classes from "./Stack.module.css";

const Stack = () => {
  return (
    <div className={`screen-size ${classes.pageContainer}`} id="skills">
      <h3 className={`section-title ${classes.skillTitle}`}>Skills</h3>
      <p className="section-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia id
        excepturi corrupti. Ex temporibus in veniam placeat quaerat assumenda,
        repudiandae consectetur consequuntur optio. Molestiae, enim nisi
        blanditiis deserunt repellat vero.
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
            <li>Git/Github</li>
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
