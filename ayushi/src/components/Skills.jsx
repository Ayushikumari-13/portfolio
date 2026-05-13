import React from "react";

export default function Skills() {

  const skills = [
    {
      title: "Frontend",
      icon: "💻",
      logo: "⚛️",
      progress: "95%",
      items: ["HTML5", "CSS3", "JavaScript", "React.js"],
    },

    {
      title: "Backend",
      icon: "⚡",
      logo: "🟢",
      progress: "85%",
      items: ["Node.js", "Express.js", "REST API"],
    },

    {
      title: "Database",
      icon: "🗄️",
      logo: "🍃",
      progress: "80%",
      items: ["MongoDB", "MySQL"],
    },

    {
      title: "Tools & Cloud",
      icon: "☁️",
      logo: "🚀",
      progress: "75%",
      items: ["GitHub", "Docker", "AWS", "VS Code"],
    },
  ];

  return (
    <section
      id="skills"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "7rem 8%",
        background:
          "linear-gradient(to bottom, #050816 0%, #070b1a 100%)",
      }}
    >

      {/* Glow */}
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

      <div className="skills-container">

        <p className="skills-tag">
          MY SKILLS
        </p>

        <h1 className="skills-heading">
          Technical
          <span> Expertise</span>
        </h1>

        <p className="skills-description">
          Technologies and tools I use to create
          modern and interactive web applications.
        </p>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>

              {/* Top */}
              <div className="skill-top">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <div className="skill-logo">
                  {skill.logo}
                </div>

              </div>

              <h2>
                {skill.title}
              </h2>

              {/* Progress */}
              <div className="progress-section">

                <div className="progress-text">
                  <span>Proficiency</span>

                  <span>{skill.progress}</span>
                </div>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width: skill.progress,
                    }}
                  ></div>

                </div>

              </div>

              {/* Skill Tags */}
              <div className="skill-items">

                {skill.items.map((item, i) => (
                  <span key={i}>
                    {item}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

      <style>{`

        .skills-container{
          position:relative;

          z-index:2;

          max-width:1300px;

          margin:auto;
        }

        .skills-tag{
          color:#4de2ff;

          letter-spacing:4px;

          font-size:14px;

          font-weight:600;

          margin-bottom:18px;

          text-align:center;
        }

        .skills-heading{
          font-size:4rem;

          text-align:center;

          color:white;

          font-weight:800;

          margin-bottom:1.5rem;
        }

        .skills-heading span{
          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          -webkit-background-clip:text;

          -webkit-text-fill-color:transparent;
        }

        .skills-description{
          color:#b6bdd1;

          text-align:center;

          max-width:700px;

          margin:auto;

          line-height:2;

          margin-bottom:4rem;
        }

        /* Grid */

        .skills-grid{
          display:grid;

          grid-template-columns:
            repeat(auto-fit,minmax(280px,1fr));

          gap:2rem;
        }

        /* Card */

        .skill-card{
          position:relative;

          padding:2rem;

          border-radius:28px;

          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,0.05),
              rgba(255,255,255,0.02)
            );

          border:
            1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(16px);

          overflow:hidden;

          transition:0.4s ease;
        }

        .skill-card:hover{
          transform:
            translateY(-10px)
            scale(1.02);

          border:
            1px solid rgba(56,189,248,0.25);

          box-shadow:
            0 20px 40px rgba(0,0,0,0.35);
        }

        .skill-card::before{
          content:"";

          position:absolute;

          top:-50px;
          right:-50px;

          width:150px;
          height:150px;

          border-radius:50%;

          background:
            radial-gradient(
              circle,
              rgba(56,189,248,0.15),
              transparent 70%
            );
        }

        /* Top */

        .skill-top{
          display:flex;

          align-items:center;

          justify-content:space-between;

          margin-bottom:1.5rem;
        }

        .skill-icon,
        .skill-logo{
          width:60px;
          height:60px;

          border-radius:18px;

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:1.8rem;

          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          color:white;
        }

        .skill-card h2{
          color:white;

          font-size:1.5rem;

          margin-bottom:1.5rem;
        }

        /* Progress */

        .progress-section{
          margin-bottom:1.8rem;
        }

        .progress-text{
          display:flex;

          justify-content:space-between;

          margin-bottom:10px;

          color:#d1d5db;

          font-size:0.95rem;
        }

        .progress-bar{
          width:100%;

          height:10px;

          border-radius:999px;

          background:
            rgba(255,255,255,0.08);

          overflow:hidden;
        }

        .progress-fill{
          height:100%;

          border-radius:999px;

          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          animation:fill 2s ease;
        }

        @keyframes fill{
          from{
            width:0;
          }
        }

        /* Tags */

        .skill-items{
          display:flex;

          flex-wrap:wrap;

          gap:12px;
        }

        .skill-items span{
          padding:10px 16px;

          border-radius:999px;

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid rgba(255,255,255,0.08);

          color:#e5e7eb;

          font-size:0.9rem;

          transition:0.3s ease;
        }

        .skill-items span:hover{
          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          transform:translateY(-3px);
        }

        @media(max-width:900px){

          .skills-heading{
            font-size:3rem;
          }
        }

        @media(max-width:768px){

          .skills-heading{
            font-size:2.5rem;
          }

          .skills-grid{
            grid-template-columns:1fr;
          }
        }

      `}</style>
    </section>
  );
}