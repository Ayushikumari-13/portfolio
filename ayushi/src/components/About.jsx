import React from "react";

export default function About() {

  const stats = [
    {
      number: "10+",
      title: "Projects Completed",
      link: "#projects",
    },

    {
      number: "React",
      title: "Frontend Developer",
      link: "#skills",
    },

    {
      number: "MERN",
      title: "Tech Stack",
      link: "#skills",
    },

    {
      number: "UI/UX",
      title: "Design Focus",
      link: "#contact",
    },
  ];

  return (
    <section
      id="about"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "7rem 8%",
        background:
          "linear-gradient(to bottom, var(--bg), var(--bg2))",
      }}
    >

      {/* GLOW */}

      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "-120px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-120px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <p className="about-tag">
            ABOUT ME
          </p>

          <h1 className="about-heading">
            Passionate
            <span> Frontend </span>
            Developer
          </h1>

          <p className="about-description">
            I'm a passionate Frontend Developer
            focused on building modern, responsive
            and interactive web applications using
            React.js and MERN stack technologies.
          </p>

          {/* TIMELINE */}

          <div className="timeline">

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <h3>
                  Frontend Development
                </h3>

                <p>
                  Creating responsive and clean user
                  interfaces with React.js, JavaScript,
                  HTML and CSS.
                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <h3>
                  B.Tech CSE Student
                </h3>

                <p>
                  Final year Computer Science student
                  passionate about UI/UX and modern
                  web development.
                </p>

              </div>

            </div>

          </div>

          {/* BUTTONS */}

          <div className="about-buttons">

            <a href="mailto:ayushikumari9628@gmail.com">
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/ayushi-kumari-307805266"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="stats-grid">

            {stats.map((item, index) => (

              <a
                href={item.link}
                className="stat-card"
                key={index}
              >

                <h2>
                  {item.number}
                </h2>

                <p>
                  {item.title}
                </p>

              </a>

            ))}

          </div>

        </div>

      </div>

      <style>{`

        .about-container{

          position:relative;

          z-index:2;

          max-width:1300px;

          margin:auto;

          display:grid;

          grid-template-columns:
            1.2fr 0.9fr;

          gap:5rem;

          align-items:center;
        }

        /* LEFT */

        .about-tag{

          display:inline-block;

          padding:10px 18px;

          border-radius:999px;

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid var(--border);

          color:var(--cyan2);

          letter-spacing:4px;

          font-size:13px;

          font-weight:600;

          margin-bottom:24px;

          backdrop-filter:blur(10px);
        }

        .about-heading{

          font-size:4.3rem;

          line-height:1.1;

          color:var(--white);

          font-weight:800;

          margin-bottom:1.5rem;

          font-family:var(--font-display);
        }

        .about-heading span{

          background:var(--gradient);

          -webkit-background-clip:text;

          -webkit-text-fill-color:transparent;
        }

        .about-description{

          color:var(--muted);

          line-height:2;

          font-size:1.02rem;

          margin-bottom:2.8rem;

          max-width:650px;
        }

        /* TIMELINE */

        .timeline{

          border-left:
            2px solid rgba(255,255,255,0.08);

          padding-left:2rem;

          margin-bottom:3rem;
        }

        .timeline-item{

          position:relative;

          margin-bottom:2.5rem;
        }

        .timeline-dot{

          position:absolute;

          left:-37px;
          top:6px;

          width:14px;
          height:14px;

          border-radius:50%;

          background:var(--gradient);

          box-shadow:
            0 0 20px rgba(56,189,248,0.35);
        }

        .timeline-item h3{

          color:var(--white);

          margin-bottom:10px;

          font-size:1.2rem;

          font-weight:600;
        }

        .timeline-item p{

          color:var(--muted);

          line-height:1.9;
        }

        /* STATS */

        .stats-grid{

          display:grid;

          grid-template-columns:
            repeat(2,1fr);

          gap:1.5rem;
        }

        .stat-card{

          padding:2rem;

          border-radius:24px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.02)
            );

          border:
            1px solid var(--border);

          backdrop-filter:blur(18px);

          transition:0.35s ease;

          text-decoration:none;

          display:block;

          cursor:pointer;

          box-shadow:
            0 10px 30px rgba(0,0,0,0.18);
        }

        .stat-card:hover{

          transform:
            translateY(-10px);

          border:
            1px solid rgba(56,189,248,0.28);

          box-shadow:
            0 20px 40px rgba(0,0,0,0.35);
        }

        .stat-card h2{

          font-size:2.2rem;

          margin-bottom:12px;

          color:var(--white);

          font-weight:700;
        }

        .stat-card p{

          color:var(--muted);

          font-size:0.95rem;

          line-height:1.7;
        }

        /* BUTTONS */

        .about-buttons{

          display:flex;

          gap:1rem;

          flex-wrap:wrap;
        }

        .about-buttons a{

          padding:15px 32px;

          border-radius:999px;

          text-decoration:none;

          font-weight:600;

          transition:0.3s ease;
        }

        .about-buttons a:first-child{

          background:var(--gradient);

          color:var(--white);

          box-shadow:
            0 10px 30px rgba(56,189,248,0.20);
        }

        .about-buttons a:last-child{

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid var(--border);

          color:var(--white);

          backdrop-filter:blur(10px);
        }

        .about-buttons a:hover{

          transform:
            translateY(-5px);
        }

        /* RESPONSIVE */

        @media(max-width:1000px){

          .about-container{

            grid-template-columns:1fr;

            text-align:center;
          }

          .timeline{
            text-align:left;
          }

          .stats-grid{
            margin-top:2rem;
          }

          .about-buttons{
            justify-content:center;
          }
        }

        @media(max-width:768px){

          .about-heading{
            font-size:2.8rem;
          }

          .stats-grid{
            grid-template-columns:1fr;
          }
        }

      `}</style>

    </section>
  );
}