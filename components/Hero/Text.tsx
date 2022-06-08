import React from "react";

import { Link } from "react-scroll";

const Text = () => {
  return (
    <div style={styles.content}>
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

const styles = {
  content: {
    position: "relative",
    zIndex: "1",
    margin: "auto 0",
  },
} as const;
