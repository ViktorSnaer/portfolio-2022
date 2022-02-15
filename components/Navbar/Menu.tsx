import React from "react";

import classes from "./Menu.module.css";

interface MenuProps {
  handleOnClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  open: boolean;
}

const Menu = (props: MenuProps) => {
  return (
    <div
      onClick={props.handleOnClick}
      className={props.open ? classes.menuOpen : classes.menu}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Menu;
