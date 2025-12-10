import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Molly from '../assets/Molly.jpg';
import wave from '../assets/wave.svg';
import cornerImage from '../assets/Blue and Teal Playful Brave Champion Circle Sticker.png';


const Home = () => {
  return (
    <div>
      <Nav />

<div className="intro">
  <div className="intro__content">
    <div className="intro__text">
      <h1 className="intro__heading">123, Learn!</h1>
      <p className="intro__tagline">
        Individual tutoring from the comfort of your own home!
      </p>
      <Link to="/booking" className="intro__button">
        Schedule a Session
      </Link>
    </div>

    <div className="intro__img">
      <img src={Molly} alt="Molly" />
    </div>
  </div>
</div>

      {/* Wavy light pink banner */}
      <div className="wave-banner">
        <img src={wave} alt="decorative wave" className="wave-banner-wave" />
      </div>

      {/* ---------- NEW SECTIONS BELOW THE WAVE ---------- */}

      {/* How It Works */}
      <section className="home-section how-it-works">
        <h2>How It Works</h2>
        <div className="how-it-works__grid">
          <div className="how-it-works__card">
            <h3>Book Online</h3>
            <p>
              Choose a 30- or 60-minute session that fits your schedule using
              the online booking calendar.
            </p>
          </div>
          <div className="how-it-works__card">
            <h3>Meet on Google Meet</h3>
            <p>
              Join a live video session from your computer or tablet—no travel
              required.
            </p>
          </div>
          <div className="how-it-works__card">
            <h3>Personalized Tutoring</h3>
            <p>
              Each lesson is tailored to your child&apos;s needs, goals, and
              learning style.
            </p>
          </div>
        </div>
      </section>

      {/* Subjects & Ages */}
      <section className="home-section subjects">
        <h2>Subjects & Ages</h2>
        <div className="subjects__grid">
          <div className="subjects__column">
            <h3>Subjects Offered</h3>
            <ul>
              <li>Elementary Reading</li>
              <li>Elementary, Middle, & High School Math</li>
              <li>Elementary Science</li>
              <li>Elementary Social Studies</li>
              <li>Homework Help (all subjects)</li>
              <li>Educator Support</li>
            </ul>
          </div>
          <div className="subjects__column">
            <h3>Who I Work With</h3>
            <ul>
              <li>Early Childhood & Elementary</li>
              <li>Middle School</li>
              <li>High School (through Algebra 2)</li>
              <li>Traditional & Homeschool students</li>
              <li>New Teachers</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="home-section cta">
        <h2>Ready to Get Started?</h2>
        <p>
          Build confidence, close learning gaps, and make school feel easier.
          Book a tutoring session today!
        </p>
        <Link to="/booking" className="cta__button">
          Schedule a Session
        </Link>
      </section>
<div className="corner-image">
  <img src={cornerImage} alt="Brave Champion" />
</div>


      <Footer />
    </div>
  );
};

export default Home;

