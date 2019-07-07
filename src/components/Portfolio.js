import React from "react";
import styles from "../style/Portfolio.module.css";

const Portfolio = () => {
  return (
    <div>
      <h2>Projects</h2>
      <section className={styles.project}>
        <h3 className={styles.projectTitle}>Northcoders News</h3>
        <p className={styles.projectDescription}>
          A responsive, Reddit style news aggregation site where readers can
          view articles by topic. Each article can be rated up or down and users
          can leave comments. Comments can also be deleted by their author. The
          front end is built in React with Reach Router and using CSS Modules
          Stylesheets. It accesses a server that I build in Node.js with Express
          and Knex
        </p>
        <div className={styles.projectLinks}>
          <a
            className={styles.projectLink}
            href="https://kellydavidson-news-project.netlify.com/"
          >
            View Northcoders News Deployed on Netlify
          </a>
          <br />
          <a
            className={styles.projectLink}
            href="https://github.com/KellyUK/nc-news-front-end"
          >
            Checkout my Front End Repo on Github
          </a>
          <br />
          <a
            className={styles.projectLink}
            href=" https://github.com/KellyUK/nc_news"
          >
            Checkout my Back End Repo on Github
          </a>
          <br />
          <a
            className={styles.projectLink}
            href="https://kelly-davidson-nc-news.herokuapp.com/api/"
          >
            Access my Back End Api hosted on Heroku
          </a>
        </div>
        <br />
      </section>
    </div>
  );
};

export default Portfolio;
