import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      <h2>Contact Information:</h2>
      <p>kellyadavidsonuk@gmail.com</p>
      <FontAwesomeIcon icon={["fab", "github"]} />
      <a href="https://github.com/KellyUK">Github</a>
      <br />
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
      <a href="https://www.linkedin.com/in/kelly-davidson-158917b0/">
        LinkedIn
      </a>
    </div>
  );
};

export default Contact;
