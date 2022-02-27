import React from "react";

import classes from "./Contact.module.css";

const Contact = () => {
  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleOnSubmit function called");
  };

  return (
    <div className={`screen-size ${classes.contactContainer}`} id="contact">
      <h3 className={`section-title`}>Contact Me</h3>
      <p className="section-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptatem est nulla dicta quaerat delectus provident vitae fugiat
        soluta! Atque earum asperiores ab labore quibusdam in aperiam deserunt
        fugiat possimus!
      </p>
      <div className={classes.formContainer}>
        <form onSubmit={handleOnSubmit} className={classes.contactForm}>
          <input type={"email"} placeholder="Email" required />
          <input type={"text"} placeholder="Name" required />
          <textarea placeholder="Message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
