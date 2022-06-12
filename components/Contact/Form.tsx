import React from "react";

import styles from "./Contact.module.css";

import Swal from "sweetalert2";
import emailjs, { init } from "@emailjs/browser";

const Form = () => {
  const USER_ID = process.env.NEXT_PUBLIC_USER_ID as string;
  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;

  init(USER_ID);

  const handleOnSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleOnSubmit function called");
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleOnSubmit} className={styles.contactForm}>
        <input name="from_email" type={"email"} placeholder="Email" required />
        <input name="from_name" type={"text"} placeholder="Name" required />
        <textarea name="message" placeholder="Message" required />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
