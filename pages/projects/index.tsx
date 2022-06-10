import Link from "next/link";
import React from "react";
import ContentContainer from "../../components/AllProjects/contentLayout/ContentContainer";
import ProjectContainer from "../../components/Projects/ProjectContainer";
import Projects from "../../components/Projects/Projects";

const index = () => {
  const content = [
    {
      slug: "/projects",
      imagePath: "/images/beyondTheBedroom.png",
      title: "Beyond the Bedroom",
      description: "",
    },
    {
      slug: "/projects",
      imagePath: "/images/speed-typing-game.png",
      title: "Speed Typing",
      description: "",
    },
    {
      slug: "/projects",
      imagePath: "/images/clock-work.png",
      title: "Clock Work",
      description: "",
    },
    {
      slug: "/projects",
      imagePath: "/images/toDoApp.png",
      title: "To Do App",
      description: "",
    },
    {
      slug: "/projects",
      imagePath: "/images/keflavikDepartures.png",
      title: "Keflavik Departures",
      description: "",
    },
  ];

  return (
    <section className="screen-size">
      <h1>Projects</h1>
      <h2>
        Page under construction 🚧
        <span>
          <Link href="/" passHref>
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              Back to homepage
            </span>
          </Link>
        </span>
      </h2>

      <ContentContainer content={content} />
    </section>
  );
};

export default index;
