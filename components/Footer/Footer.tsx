import React from "react";
import Socials from "../Hero/Socials";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={`screen-size ${classes.footer}`}>
      <Socials gradient={false} />
      <p>Reykjavik Iceland UTC 0</p>
    </div>
  );
};

export default Footer;
