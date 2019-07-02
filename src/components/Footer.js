import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../style/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <FontAwesomeIcon className={styles.footerIcon} icon={["fab", "github"]} />
      <FontAwesomeIcon
        className={styles.footerIcon}
        icon={["fab", "linkedin"]}
      />
      <FontAwesomeIcon className={styles.footerIcon} icon="envelope" />
      <FontAwesomeIcon
        className={styles.footerIcon}
        icon={["fab", "codepen"]}
      />
    </footer>
  );
};

export default Footer;
