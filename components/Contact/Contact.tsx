import React from "react";

import classes from "./Contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className={`screen-size ${classes.contactContainer}`} id="contact">
      <h3 className={`section-title`}>Contact Me</h3>
      <p className="section-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        voluptatem est nulla dicta quaerat delectus provident vitae fugiat
        soluta! Atque earum asperiores ab labore quibusdam in aperiam deserunt
        fugiat possimus!
      </p>
      <Form />
    </div>
  );
};

export default Contact;
