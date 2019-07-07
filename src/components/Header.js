import React from "react";
import styles from "../style/Header.module.css";
import { Link } from "@reach/router";

const Header = () => {
  return (
    <div>
      <nav className={styles.navBar}>
        <Link to="/">
          <button className={styles.navButtonName}>Kelly Davidson</button>
        </Link>
        <Link to="/contact">
          <button className={styles.navButton}>Contact</button>
        </Link>
        <Link to="/portfolio">
          <button className={styles.navButton}>Portfolio</button>
        </Link>
        <Link to="/about">
          <button className={styles.navButton}>About</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
