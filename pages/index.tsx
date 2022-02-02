import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viktor Snaer</title>
        <meta
          name="description"
          content="Viktor Snaer portfolio showcasing projects and blog"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Portfolio</h1>
    </div>
  );
};

export default Home;
