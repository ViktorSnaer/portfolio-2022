import React from "react";
import classes from "./Items.module.css";

const navItems = [
  { id: 0, name: "About Me" },
  { id: 1, name: "My Work" },
  { id: 2, name: "Stack" },
  { id: 3, name: "Contact" },
];

const Items = () => {
  return (
    <ul className={classes.list}>
      {navItems.map((item) => {
        return (
          <li className={classes.listItem} key={item.id}>
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Items;
