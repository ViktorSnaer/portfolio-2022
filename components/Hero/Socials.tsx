import React from "react";

import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return (
    <div style={styles.socialContainer}>
      <FaLinkedin size={iconSize} style={styles.icon} />
      <FaGithub size={iconSize} style={styles.icon} />
      <FaTwitter size={iconSize} style={styles.icon} />
    </div>
  );
};

export default Socials;

const iconSize = "40px";

const styles = {
  socialContainer: {
    position: "relative",
  },
  icon: {
    zIndex: "1",
    background: "linear-gradient(90deg, #ffc0ff 0%, #fe74fd 50%, #ff6469 100%)",
    borderRadius: "5px",
    margin: "2rem 2rem 2rem 0",
  },
} as const;
