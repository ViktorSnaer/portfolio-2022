import React, { useEffect, useRef } from "react";
import Items from "./Items";

import classes from "./MobileLinks.module.css";

interface MobileProps {
  handleOnClick: () => void;
}

const MobileLinks = (props: MobileProps) => {
  const mobileContainer = useRef(null);

  const useOutsideClick = (ref: any) => {
    useEffect(() => {
      const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          props.handleOnClick();
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  };
  useOutsideClick(mobileContainer);
  return (
    <div className={classes.mobileLinks} ref={mobileContainer}>
      <Items />
    </div>
  );
};

export default MobileLinks;
