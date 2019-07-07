import React from "react";
import styles from "../style/About.module.css";

const About = () => {
  return (
    <div className={styles.bodyAbout}>
      <h1>About me!</h1>
      <p>
        I recently graduated from{" "}
        <a href="https://northcoders.com/">Northcoders </a> an intensive
        fulltime bootcamp in Manchester. I was previously a Retail Manager, but
        after ten years I felt that I needed a new challenge!
      </p>
      <section className="introduction">
        <h3>How I got started</h3>
        <p>
          The first course I ever did was Stefan Mischook's Introduction to
          Python course. I really enjoyed it and immediately started his
          interactive Web Developer Course once I had completed it. I soon
          realised that coding was something I wanted to do full time and began
          looking into doing a fulltime bootcamp.
        </p>
        <p>
          In the mean time I was consuming all I could. It's amazing how many
          free resources there are for learning how to code. I particularly
          liked
          <a href="https://www.theodinproject.com/courses">
            {" "}
            The Odin Project{" "}
          </a>{" "}
          as it covers topics like version control and git early on. I also
          watched Harvard University's CS50 lectures on YouTube which are really
          interesting and introduce some basic computer science principles such
          as data structures and efficiency.
        </p>
      </section>
      <section>
        <h3>My Favourite Podcasts</h3>
        <p>
          Podcasts have been a great way for me to learn on the go. I am
          currently listening to{" "}
          <a href="https://www.codingblocks.net/">CodingBlocks.Net</a> podcast.
          They have a series of podcasts discussing the Pragmatic Programmer
          which I am currently reading currently.
        </p>
        <p>
          <a href="https://www.codenewbie.org/podcast">CodeNewbie</a>
        </p>
        <p>
          A fantastic podcast by Saron Yitbarek, each episode she interviews a
          different person from the world of tech. Sometimes they are from a
          traditional background, some times they are career change bootcampers
          and sometimes completely self taught. It covers really diverse topics
          but assumes no knowledge.
        </p>
        <p>
          <a href="https://www.redhat.com/en/command-line-heroes">
            Command Line Heroes
          </a>
        </p>
        <p>
          Another great podcast by Saron Yitbarek which covers the history of
          software. This season each episode covers a different language.
        </p>
        <div>
          <p>
            <a href="https://www.codenewbie.org/basecs">basecs</a>
          </p>
          <p>Introduces the basics of computer science in an accessible way</p>
        </div>
      </section>
      <section>
        <h3>Community</h3>
        <p>
          I attend
          <a href="https://codeandstuff-manchester.github.io/">
            {" "}
            Code and Stuff
          </a>{" "}
          a coding meetup for women and non-binary people in Manchester. I hope
          that as my experience and technical ability grows I can help others.
        </p>
      </section>
      <h3>Books</h3>
      <p>
        Broadband The Untold Story of the Women who Made the Internet, Claire
        L.Evans
      </p>
      <p>
        Code: The Hidden Language of Computer Hardware and Software, Charles
        Petzold
      </p>
      <p>
        Pragmatic Thinking and Learning: Refactor Your Wetware (Pragmatic
        Programmers), Andy Hunt
      </p>
    </div>
  );
};

export default About;
