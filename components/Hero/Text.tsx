import React from "react";

const Text = () => {
  return (
    <div style={styles.content}>
      <h1 className="headline-l gradient">
        Hi,
        <br />
        I'm Viktor Snaer
        <br />
        Web Developer
      </h1>
      <h3 className="headline-s gradient">Front End Developer</h3>
      <button className="button">Contact me</button>
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
