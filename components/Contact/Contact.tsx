import React from "react";

import classes from "./Contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <div className={`screen-size ${classes.contactContainer}`} id="contact">
      <h3 className={`section-title`}>Contact Me</h3>
      <p className="section-text">
        If you are seeking a web developer or have any questions regarding my
        work, fill out my contact form or reach out directly at
        <a href="mailto:viktor.snaer23@gmail.com" className={classes.email}>
          {" "}
          viktor.snaer23@gmail.com
        </a>
      </p>
      <Form />
    </div>
  );
};

export default Contact;
