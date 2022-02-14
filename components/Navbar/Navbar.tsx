import React from "react";

import classes from "./Navbar.module.css";

const navItems = [
  { id: 0, name: "About Me" },
  { id: 1, name: "My Work" },
  { id: 2, name: "Stack" },
  { id: 3, name: "Contact" },
];

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.list}>
        {navItems.map((item) => {
          return (
            <li className={classes.listItem} key={item.id}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

const styles = {
  navbar: {
    margin: "0",
    padding: "0",
    zIndex: "1",
    position: "relative",
  },
  list: {
    listStyle: "none",
    display: "flex",
    flexDirection: "row",
    marginLeft: "0",
    paddingLeft: "0px",
  },
} as const;
