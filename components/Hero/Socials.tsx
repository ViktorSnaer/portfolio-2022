import React from "react";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

interface SocialsProps {
  gradient: boolean;
}

const Socials = ({ gradient }: SocialsProps) => {
  const iconSize = "35px";

  let gradientStyle = "";

  gradient
    ? (gradientStyle =
        "linear-gradient(90deg, #ffc0ff 0%, #fe74fd 50%, #ff6469 100%)")
    : (gradientStyle = "none");

  const styles = {
    socialContainer: {
      position: "relative",
    },
    icon: {
      zIndex: "1",
      background: gradientStyle,
      borderRadius: "5px",
      margin: "2rem 2rem 2rem 0",
    },
  } as const;

  return (
    <div style={styles.socialContainer}>
      <a
        href="https://www.linkedin.com/in/viktor-snaer/"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaLinkedin size={iconSize} style={styles.icon} />
      </a>
      <a
        href="https://github.com/ViktorSnaer"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaGithub size={iconSize} style={styles.icon} />
      </a>
      <a
        href="https://twitter.com/viktor_snaer"
        target={"_blank"}
        rel="noreferrer"
      >
        <FaTwitter size={iconSize} style={styles.icon} />
      </a>
    </div>
  );
};

export default Socials;
