import Image from "next/image";
import React from "react";
import styles from "./Project.module.css";

export default function Project() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.images}
          src={"/images/beyondTheBedroom.png"}
          alt="front page of beyondthebedroom.org"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <h1 className={`section-title ${styles.projectName}`}>
        BEYOND THE BEDROOM
      </h1>
    </div>
  );
}
