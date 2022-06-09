import React from "react";
import ContentContainer from "../../components/AllProjects/contentLayout/ContentContainer";
import ProjectContainer from "../../components/Projects/ProjectContainer";
import Projects from "../../components/Projects/Projects";

const index = () => {
  const content = [
    {
      slug: "/projects/beyond-the-bedroom",
      imagePath: "/images/beyondTheBedroom.png",
      title: "Beyond the Bedroom",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in dolorem voluptates accusantium consequatur ullam, sint blanditiis aut ipsam delectus qui nam fuga consequuntur dignissimos! Maxime corporis iste at nisi!",
    },
    {
      slug: "/projects/speed-typing",
      imagePath: "/images/speed-typing-game.png",
      title: "Speed Typing",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in dolorem voluptates accusantium consequatur ullam, sint blanditiis aut ipsam delectus qui nam fuga consequuntur dignissimos! Maxime corporis iste at nisi!",
    },
    {
      slug: "/projects/to-do-app",
      imagePath: "/images/toDoApp.png",
      title: "To Do App",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in dolorem voluptates accusantium consequatur ullam, sint blanditiis aut ipsam delectus qui nam fuga consequuntur dignissimos! Maxime corporis iste at nisi!",
    },
    {
      slug: "/projects/keflavik-departures",
      imagePath: "/images/keflavikDepartures.png",
      title: "Keflavik Departures",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, in dolorem voluptates accusantium consequatur ullam, sint blanditiis aut ipsam delectus qui nam fuga consequuntur dignissimos! Maxime corporis iste at nisi!",
    },
  ];

  return (
    <section className="screen-size">
      <h1 className="section-title">Projects</h1>
      <ContentContainer content={content} />
    </section>
  );
};

export default index;
