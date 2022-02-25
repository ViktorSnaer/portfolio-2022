import React from "react";

import classes from "./SkillIcons.module.css";

import {
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiFirebase,
  SiGithub,
  SiFigma,
} from "react-icons/si";

const iconSize = "40px";

const SkillIcons = () => {
  return (
    <div className={classes.iconContainer}>
      <SiJavascript size={iconSize} />
      <SiCss3 size={iconSize} />
      <SiHtml5 size={iconSize} />
      <SiReact size={iconSize} />
      <SiFirebase size={iconSize} />
      <SiGithub size={iconSize} />
      <SiFigma size={iconSize} />
    </div>
  );
};

export default SkillIcons;
