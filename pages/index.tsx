import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skill from "../components/Skills/Skill";
import Skills from "../components/Skills/Skills";
import Stack from "../components/Stack/Stack";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Viktor Snaer - Web Developer</title>
        <meta
          name="description"
          content="My mission is to build functional responsive websites and web applications with the latest technologies. I put equal emphasis on functionality and design"
        />
        <meta
          property="og:title"
          content="Viktor Snaer - Web Developer"
          key={"title"}
        />
        <meta
          property="og:image"
          content="https://www.viktorsnaer.com/images/preview-image.png"
        />
        <meta
          property="og:description"
          content="My mission is to build functional responsive websites and web applications with the latest technologies. I put equal emphasis on functionality and design"
        />
        <meta property="og:url" content="https://www.viktorsnaer.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
