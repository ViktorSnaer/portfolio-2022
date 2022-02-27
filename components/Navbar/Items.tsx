import React from "react";
import classes from "./Items.module.css";

const navItems = [
  { id: 0, name: "About Me", link: "#about-me" },
  { id: 1, name: "My Work", link: "#my-work" },
  { id: 2, name: "Skills", link: "#skills" },
  { id: 3, name: "Contact", link: "#contact" },
];

const Items = () => {
  return (
    <ul className={classes.list}>
      {navItems.map((item) => {
        return (
          <a href={item.link} key={item.id} className={classes.listItem}>
            <li>{item.name}</li>
          </a>
        );
      })}
    </ul>
  );
};

export default Items;
