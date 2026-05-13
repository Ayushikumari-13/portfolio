import React from "react";

export default function Education() {

  const education = [

    {
      year: "2022 - Present",

      title: "B.Tech in Computer Science",

      institute: "BBD University, Lucknow",

      icon: "🎓",

      description:
        "Currently pursuing B.Tech in Computer Science with focus on frontend development, MERN stack and UI/UX design.",
    },

    {
      year: "2020",

      title: "Intermediate (12th)",

      institute: "UP Board",

      icon: "📘",

      description:
        "Completed higher secondary education with strong interest in computer science and technology.",
    },

    {
      year: "2018",

      title: "High School (10th)",

      institute: "UP Board",

      icon: "🏫",

      description:
        "Completed secondary education and started learning programming and web technologies.",
    },

  ];

  return (
    <section
      id="education"
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
          Academic Journey
        </p>

        <h2 className="section-title">
          My <span className="accent">Education</span>
        </h2>

        <div className="divider" />

      </div>

      {/* Timeline */}
      <div className="education-timeline">

        {education.map((item, index) => (

          <div
            className="education-item"
            key={index}
          >

            {/* Line */}
            <div className="timeline-line"></div>

            {/* Dot */}
            <div className="timeline-dot"></div>

            {/* Card */}
            <div className="education-card">

              {/* Left */}
              <div className="education-left">

                <div className="education-icon">
                  {item.icon}
                </div>

                <div>

                  <span className="education-year">
                    {item.year}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <h4>
                    {item.institute}
                  </h4>

                </div>

              </div>

              {/* Right */}
              <p className="education-description">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

      <style>{`

        .education-timeline{
          display:flex;

          flex-direction:column;

          gap:2rem;

          max-width:950px;

          margin:auto;

          position:relative;

          z-index:2;
        }

        .education-item{
          position:relative;

          padding-left:3.5rem;
        }

        .timeline-line{
          position:absolute;

          left:12px;
          top:0;

          width:2px;
          height:100%;

          background:
            rgba(255,255,255,0.08);
        }

        .timeline-dot{
          position:absolute;

          left:2px;
          top:38px;

          width:22px;
          height:22px;

          border-radius:50%;

          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          box-shadow:
            0 0 20px rgba(56,189,248,0.35);
        }

        /* Card */

        .education-card{
          padding:1.8rem;

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

          transition:0.35s ease;
        }

        .education-card:hover{
          transform:translateY(-6px);

          border-color:
            rgba(56,189,248,0.22);

          box-shadow:
            0 18px 35px rgba(0,0,0,0.35);
        }

        /* Top */

        .education-left{
          display:flex;

          align-items:flex-start;

          gap:1rem;

          margin-bottom:1.2rem;
        }

        .education-icon{
          width:58px;
          height:58px;

          border-radius:16px;

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:1.5rem;

          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          color:white;

          flex-shrink:0;
        }

        .education-year{
          display:inline-block;

          margin-bottom:0.5rem;

          color:#38bdf8;

          font-size:0.88rem;

          font-weight:600;
        }

        .education-left h3{
          color:white;

          font-size:1.25rem;

          margin-bottom:0.4rem;
        }

        .education-left h4{
          color:#b6bdd1;

          font-size:0.95rem;

          font-weight:500;
        }

        .education-description{
          color:#d1d5db;

          line-height:1.8;

          font-size:0.92rem;
        }

        @media(max-width:768px){

          .education-item{
            padding-left:2.8rem;
          }

          .education-card{
            padding:1.5rem;
          }

          .education-left{
            flex-direction:column;
          }
        }

      `}</style>

    </section>
  );
}