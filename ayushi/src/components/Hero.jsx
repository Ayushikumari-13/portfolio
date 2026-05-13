import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";

import profileImg from "../assets/Photo.jpg";

export default function Hero() {

  return (
    <section className="hero" id="home">

      {/* BACKGROUND GLOW */}
      <div className="hero-glow glow1"></div>
      <div className="hero-glow glow2"></div>

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <p className="hero-tag">
          FRONTEND DEVELOPER
        </p>

        <h1>
          Hi, I'm
          <span> Ayushi Kumari</span>
        </h1>

        {/* TYPING TEXT */}
        <h2 className="typing-text">

          <Typewriter
            words={[
              "React Developer",
              "Frontend Engineer",
              "Full stack developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />

        </h2>

        {/* DESCRIPTION */}
        <p className="hero-description">
          Passionate Frontend Developer skilled in
          React.js, JavaScript, and modern UI/UX design.
          I create responsive and interactive web
          applications with clean user experiences.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <a href="#projects">
            <button className="primary-btn">
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">
              Contact Me
            </button>
          </a>

          {/* RESUME BUTTON */}
          <a
            href="/resume.pdf"
            download="resume.pdf"
          >
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>

        {/* SCROLL */}
        <div className="scroll-down">
          Scroll Down ↓
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image-section">

        <div className="image-circle">

          <img
            src={profileImg}
            alt="Ayushi"
          />

        </div>

      </div>

    </section>
  );
}