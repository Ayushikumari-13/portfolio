import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import profileImg from "../assets/Photo.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}
      <div className="hero-glow glow1"></div>
      <div className="hero-glow glow2"></div>

      {/* Left Content */}
      <div className="hero-content">

        <p className="hero-tag">
          FRONTEND DEVELOPER
        </p>

        <h1>
          Hi, I'm
          <span> Ayushi Kumari</span>
        </h1>

        {/* Typing Animation */}
        <h2 className="typing-text">
          <Typewriter
            words={[
              "React Developer",
              "Frontend Engineer",
              "Full Stack Developer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        {/* Description */}
        <p className="hero-description">
          Passionate Frontend Developer skilled in React.js,
          JavaScript, and modern UI/UX design. I create
          responsive and interactive web applications with
          clean and engaging user experiences.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">

          {/* Projects */}
          <a
            href="#projects"
            className="primary-btn"
          >
            View Projects
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="secondary-btn"
          >
            Contact Me
          </a>

          {/* Resume Download */}
          <a
            href="/resume.pdf"
            download="Ayushi-Kumari-Resume.pdf"
            className="resume-btn"
          >
            Download Resume
          </a>

        </div>

        {/* Scroll Down */}
        <div className="scroll-down">
          Scroll Down ↓
        </div>

      </div>

      {/* Right Image */}
      <div className="hero-image-section">

        <div className="image-circle">

          <img
            src={profileImg}
            alt="Ayushi Kumari"
          />

        </div>

      </div>

    </section>
  );
}