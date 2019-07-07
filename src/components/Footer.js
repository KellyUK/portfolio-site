import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../style/Footer.module.css";
import { Link } from "@reach/router";

const Footer = () => {
  return (
    <Link to={"/contact"}>
      <footer className={styles.footer}>
        <FontAwesomeIcon
          className={styles.footerIcon}
          icon={["fab", "github"]}
        />
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
    </Link>
  );
};

export default Footer;
