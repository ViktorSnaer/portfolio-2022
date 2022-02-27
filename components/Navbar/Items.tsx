import React from "react";

import { Link } from "react-scroll";

import classes from "./Items.module.css";

const navItems = [
  { id: 0, name: "About Me", link: "about-me" },
  { id: 1, name: "My Work", link: "my-work" },
  { id: 2, name: "Skills", link: "skills" },
  { id: 3, name: "Contact", link: "contact" },
];

const Items = () => {
  return (
    <ul className={classes.list}>
      {navItems.map((item) => {
        return (
          <Link
            to={item.link}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            key={item.id}
            className={classes.listItem}
          >
            <li>{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Items;
