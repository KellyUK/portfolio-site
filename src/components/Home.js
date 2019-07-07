import React from "react";
import styles from "../style/Home.module.css";
import { Link } from "@reach/router";
import me from "../style/images/me.jpg.png";

const Home = () => {
  return (
    <div className={styles.homeBody}>
      <img src={me} alt="me" />
      <h1 className={styles.nameHeader}>KELLY DAVIDSON</h1>
      <section className={styles.info}>
        <p>
          I recently graduated from Northcoders an intensive fullstack bootcamp
          in Manchester where I used Agile Methodologies, Test Driven
          Development and Pair Programming, as well as developing technical
          skills. I was previously Retail Manager, but after ten years I needed
          a new challenge!
        </p>
        <h3 className={styles.techHeader}>Tech Stack</h3>
        <p>
          Javascript Node.js Express SQL Pstgres Knex React ReactNative
          React-Viro HTML CSS Mocha Chai Jest Supertest
        </p>
      </section>
      <section className={styles.moreAboutMe}>
        <Link to={"/about"}>
          <h2>Read more about me!</h2>
        </Link>
      </section>
    </div>
  );
};

export default Home;
