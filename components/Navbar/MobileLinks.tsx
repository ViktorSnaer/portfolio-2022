import React, { useEffect, useRef, useState } from "react";
import Items from "./Items";

import classes from "./MobileLinks.module.css";

interface MobileProps {
  handleOnClick: () => void;
  open: boolean;
}

const MobileLinks = (props: MobileProps) => {
  const mobileContainer = useRef(null);
  const [shouldRender, setRender] = useState(props.open);
  const [containerAnimation, setAnimation] = useState(classes.open);

  useEffect(() => {
    if (props.open) setRender(true);
    if (props.open) setAnimation(classes.open);
    if (!props.open) setAnimation(classes.close);
  }, [props.open]);

  const onAnimationEnd = () => {
    if (!props.open) setRender(false);
  };

  const useOutsideClick = (ref: any) => {
    useEffect(() => {
      const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          // props.handleOnClick();
        }
      };

      document.addEventListener("click", handleOutsideClick);
      return () => document.removeEventListener("click", handleOutsideClick);
    }, [ref]);
  };

  useOutsideClick(mobileContainer);

  return (
    <>
      {shouldRender && (
        <div
          className={`${classes.mobileLinks} ${containerAnimation}`}
          ref={mobileContainer}
          onAnimationEnd={onAnimationEnd}
        >
          <Items />
        </div>
      )}
    </>
  );
};

export default MobileLinks;
