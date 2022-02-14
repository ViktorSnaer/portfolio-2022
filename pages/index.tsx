import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";

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
    </div>
  );
};

export default Home;
