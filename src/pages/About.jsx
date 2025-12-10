import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <Nav />

      <main className="about">
        <h1>Hello, I'm Molly!{"  "}<span class="wave">👋🏻</span></h1>

        <p>
          I have been an educator for 14 years and love to help people learn! I have experience teaching early childhood, elementary,
          middle school math, and high school math. I love teaching reading and
          helping students learn to love reading.
        </p>

        <p>
          My current teaching certificate includes early childhood (pre-K
          through 3rd grade), elementary (1st grade through 6th grade), and
          intermediate level mathematics (middle school and high school up to
          Algebra 2). Please reach out to me for more information.
        </p>
                <p>
          In addition to working with students, I am happy to offer support to teachers. If you 
          are new to the profession or just need someone to collaborate with and get additional
          support, I would love to connet. 
        </p>

        <p className="about-rates">
          I offer online tutoring through Google Meet at a rate of{" "}
          <strong>$40 per hour</strong> or <strong>$20 per half hour</strong>{" "}
          for the following:
        </p>

        <ul className="about-list">
          <li>Elementary Reading & Language Arts</li>
          <li>Elementary Math</li>
          <li>Elementary Science</li>
          <li>Elementary Social Studies</li>
          <li>Pre-Algebra</li>
          <li>Algebra 1</li>
          <li>Algebra 2</li>
          <li>Geometry</li>
          <li>Homework Help</li>
          <li>Educator Support</li>
        </ul>

      </main>

      <Footer />
    </div>
  );
};

export default About;
