import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../style/Contact.module.css";

const Contact = () => {
  return (
    <div>
      <h2>Get in touch if you would like to know more!</h2>
      <h2>Contact Information:</h2>
      <p>kellyadavidsonuk@gmail.com</p>
      <div className={styles.contactLinks}>
        <FontAwesomeIcon icon={["fab", "github"]} />
        <a href="https://github.com/KellyUK">Github</a>
        <br />
        <br />
        <FontAwesomeIcon icon={["fab", "linkedin"]} />
        <a href="https://www.linkedin.com/in/kelly-davidson-158917b0/">
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Contact;
