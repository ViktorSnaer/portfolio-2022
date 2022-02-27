import React from "react";

import { Link } from "react-scroll";

import classes from "./Items.module.css";

const navItems = [
  { id: 0, name: "About Me", link: "about-me" },
  { id: 1, name: "My Work", link: "my-work" },
  { id: 2, name: "Skills", link: "skills" },
  { id: 3, name: "Contact", link: "contact" },
];

interface ItemsProps {
  passClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const Items = (props: ItemsProps) => {
  return (
    <ul className={classes.list}>
      {navItems.map((item) => {
        return (
          <Link
            to={item.link}
            spy={true}
            smooth={true}
            offset={50}
            duration={750}
            key={item.id}
            className={classes.listItem}
          >
            <li onClick={props.passClick}>{item.name}</li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Items;
