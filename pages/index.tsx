import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Viktor Snaer</title>
        <meta
          name="description"
          content="Viktor Snaer portfolio showcasing projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Home;
