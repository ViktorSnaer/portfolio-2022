import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="home-page-container">
      <Head>
        <title>Viktor Snaer</title>
        <meta
          name="description"
          content="Viktor Snaer portfolio showcasing projects"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="introduction">
        <h1 className="headline-l gradient">
          Hi,
          <br /> I'm Viktor Snaer Web Developer
        </h1>
        <h3 className="headline-s gradient">Front End Developer</h3>
        <button className="button">Contact me</button>
      </div>
    </div>
  );
};

export default Home;
