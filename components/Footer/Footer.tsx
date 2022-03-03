import React from "react";
import Socials from "../Hero/Socials";

import classes from "./Footer.module.css";

const Footer = () => {
  const date = new Date();

  return (
    <div className={`screen-size ${classes.footer}`}>
      <Socials gradient={false} />
      <p>© Copyright {date.getFullYear()} Viktor Snaer</p>
      <p>Reykjavik Iceland UTC 0</p>
    </div>
  );
};

export default Footer;
