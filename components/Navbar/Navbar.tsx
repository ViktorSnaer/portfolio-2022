import React, { useState } from "react";
import Items from "./Items";
import Menu from "./Menu";
import MobileLinks from "./MobileLinks";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOnClick = () => setOpen(open ? false : true);
  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.hideSmall}>
          <Items />
        </div>
        <Menu handleOnClick={handleOnClick} open={open} />
      </nav>
      {open ? <MobileLinks handleOnClick={handleOnClick} /> : null}
    </>
  );
};

export default Navbar;
