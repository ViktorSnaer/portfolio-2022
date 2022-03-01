import type { NextPage } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Stack from "../components/Stack/Stack";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Viktor Snaer - Front End Web Developer</title>
        <meta
          name="description"
          content="My mission is to build functional responsive websites and web applications with the latest technologies. I put equal emphasis on functionality and design"
        />
        <meta
          property="og:title"
          content="Viktor Snaer - Front End Web Developer"
          key={"title"}
        />
        <meta property="og:image" content="/images/preview-image.png" />
        <meta
          property="og:description"
          content="My mission is to build functional responsive websites and web applications with the latest technologies. I put equal emphasis on functionality and design"
        />
        <meta property="og:url" content="https://www.viktorsnaer.com/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AboutMe />
      <Projects />
      <Stack />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
