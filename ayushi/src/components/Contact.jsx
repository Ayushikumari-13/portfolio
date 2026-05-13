import React from "react";

export default function Contact() {

  const copyEmail = () => {

    navigator.clipboard.writeText(
      "ayushikumari9628@gmail.com"
    );

    alert("Email Copied!");
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* FIXED */

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully!");
  };

  return (
    <>
      <section
        id="contact"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "6rem 8%",
          background:
            "linear-gradient(to bottom, #050816 0%, #070b1a 100%)",
        }}
      >

        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "-100px",

            width: 280,
            height: 280,

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)",

            filter: "blur(80px)",

            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-80px",

            width: 250,
            height: 250,

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(6,182,212,0.10), transparent 70%)",

            filter: "blur(80px)",

            pointerEvents: "none",
          }}
        />

        {/* Heading */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            position: "relative",
            zIndex: 2,
          }}
        >

          <p className="section-label">
            Get In Touch
          </p>

          <h2 className="section-title">
            Contact <span className="accent">Me</span>
          </h2>

          <div className="divider" />

          <p
            style={{
              maxWidth: 650,
              margin: "1.5rem auto 0",
              color: "#b6bdd1",
              lineHeight: 1.8,
            }}
          >
            Feel free to connect with me for
            internships, projects, collaborations
            or frontend development opportunities.
          </p>

        </div>

        {/* Contact Box */}
        <div className="contact-container">

          {/* Left */}
          <div className="contact-info">

            <h3>
              Let's Connect
            </h3>

            <p>
              I'm always open to discussing
              new opportunities and exciting
              projects.
            </p>

            {/* Socials */}
            <div className="social-links">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                💼 LinkedIn
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                💻 GitHub
              </a>

            </div>

            {/* Email */}
            <div className="email-box">

              <span>
                📧 ayushikumari9628@gmail.com
              </span>

              <button onClick={copyEmail}>
                Copy
              </button>

            </div>

          </div>

          {/* Right Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        {/* Back To Top */}
        <button
          className="top-button"
          onClick={scrollTop}
        >
          ↑
        </button>

        <style>{`

          .contact-container{
            display:grid;

            grid-template-columns:
              1fr 1fr;

            gap:2rem;

            max-width:1200px;

            margin:auto;

            position:relative;

            z-index:2;
          }

          .contact-info{
            padding:2rem;

            border-radius:24px;

            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.05),
                rgba(255,255,255,0.02)
              );

            border:
              1px solid rgba(255,255,255,0.08);

            backdrop-filter:blur(14px);
          }

          .contact-info h3{
            color:white;

            font-size:2rem;

            margin-bottom:1rem;
          }

          .contact-info p{
            color:#b6bdd1;

            line-height:1.8;

            margin-bottom:2rem;
          }

          .social-links{
            display:flex;

            flex-direction:column;

            gap:1rem;

            margin-bottom:2rem;
          }

          .social-links a{
            text-decoration:none;

            color:white;

            padding:14px 18px;

            border-radius:14px;

            background:
              rgba(255,255,255,0.05);

            border:
              1px solid rgba(255,255,255,0.08);

            transition:0.3s ease;
          }

          .social-links a:hover{
            transform:translateY(-4px);

            border-color:
              rgba(56,189,248,0.25);
          }

          .email-box{
            display:flex;

            justify-content:space-between;

            align-items:center;

            gap:1rem;

            padding:14px 18px;

            border-radius:14px;

            background:
              rgba(255,255,255,0.05);

            border:
              1px solid rgba(255,255,255,0.08);

            flex-wrap:wrap;
          }

          .email-box span{
            color:white;

            font-size:0.92rem;
          }

          .email-box button{
            border:none;

            padding:10px 18px;

            border-radius:10px;

            cursor:pointer;

            font-weight:600;

            color:white;

            background:
              linear-gradient(
                135deg,
                #8b5cf6,
                #38bdf8
              );
          }

          .contact-form{
            display:flex;

            flex-direction:column;

            gap:1rem;

            padding:2rem;

            border-radius:24px;

            background:
              linear-gradient(
                145deg,
                rgba(255,255,255,0.05),
                rgba(255,255,255,0.02)
              );

            border:
              1px solid rgba(255,255,255,0.08);

            backdrop-filter:blur(14px);
          }

          .contact-form input,
          .contact-form textarea{
            width:100%;

            padding:15px 18px;

            border:none;

            outline:none;

            border-radius:14px;

            background:
              rgba(255,255,255,0.05);

            border:
              1px solid rgba(255,255,255,0.08);

            color:white;

            font-size:0.95rem;
          }

          .contact-form textarea{
            resize:none;
          }

          .contact-form button{
            padding:14px;

            border:none;

            border-radius:14px;

            cursor:pointer;

            font-weight:600;

            color:white;

            transition:0.3s ease;

            background:
              linear-gradient(
                135deg,
                #8b5cf6,
                #38bdf8
              );
          }

          .contact-form button:hover{
            transform:translateY(-4px);
          }

          .top-button{
            position:fixed;

            bottom:25px;
            right:25px;

            width:50px;
            height:50px;

            border:none;

            border-radius:50%;

            cursor:pointer;

            font-size:1.3rem;

            color:white;

            z-index:999;

            background:
              linear-gradient(
                135deg,
                #8b5cf6,
                #38bdf8
              );

            box-shadow:
              0 10px 20px rgba(56,189,248,0.25);
          }

          .top-button:hover{
            transform:translateY(-4px);
          }

          @media(max-width:900px){

            .contact-container{
              grid-template-columns:1fr;
            }
          }

        `}</style>

      </section>

      <footer
        style={{
          padding: "1.5rem 8%",
          textAlign: "center",
          color: "#b6bdd1",
          borderTop:
            "1px solid rgba(255,255,255,0.08)",

          background: "#050816",
        }}
      >

        Made with ❤️ using React.js

      </footer>
    </>
  );
}