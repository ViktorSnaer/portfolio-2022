import React from "react";
import styles from "./Text.module.css";

import { Link } from "react-scroll";

const Text = () => {
  return (
    <div className={styles.content}>
      <h1 className="headline gradient">
        Hi,
        <br />
        I&apos;m Viktor Snaer
        <br />
        Web Developer
      </h1>
      <h3 className="sub-header gradient">Building modern websites</h3>
      <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>
        <button className="button">Contact me</button>
      </Link>
    </div>
  );
};

export default Text;
