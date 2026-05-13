import React from 'react'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 8%',
        background:
          'linear-gradient(to bottom, #050816 0%, #070b1a 100%)',
      }}
    >

      {/* Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-120px',
          right: '-100px',

          width: 280,
          height: 280,

          borderRadius: '50%',

          background:
            'radial-gradient(circle, rgba(124,58,237,0.14), transparent 70%)',

          filter: 'blur(80px)',

          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-80px',

          width: 250,
          height: 250,

          borderRadius: '50%',

          background:
            'radial-gradient(circle, rgba(6,182,212,0.10), transparent 70%)',

          filter: 'blur(80px)',

          pointerEvents: 'none',
        }}
      />

      {/* Heading */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 2,
        }}
      >

        <p className="section-label">
          Career Journey
        </p>

        <h2 className="section-title">
          My <span className="accent">Experience</span>
        </h2>

        <div className="divider" />

      </div>

      {/* Timeline */}
      <div className="timeline">

        {experience.map((ex, index) => (

          <div
            key={index}
            className="timeline-item"
          >

            {/* Timeline Line */}
            <div className="timeline-line"></div>

            {/* Dot */}
            <div className="timeline-dot"></div>

            {/* Card */}
            <div className="experience-card">

              {/* Top */}
              <div className="top-row">

                <div className="company-info">

                  {/* Logo */}
                  <div className="company-logo">

                    {index === 0 ? '💻' : '☁️'}

                  </div>

                  <div>

                    <h3>
                      {ex.role}
                    </h3>

                    <h4>
                      {ex.company}
                    </h4>

                    <p className="duration">
                      {ex.duration}
                    </p>

                  </div>

                </div>

                {/* Badge */}
                <span className="badge">
                  {index === 0
                    ? 'Frontend'
                    : 'Cloud'}
                </span>

              </div>

              {/* Achievements */}
              <ul>

                {ex.points.map((point, i) => (
                  <li key={i}>
                    {point}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        ))}

      </div>

      <style>{`

        .timeline{
          display:flex;

          flex-direction:column;

          gap:2rem;

          max-width:950px;

          margin:auto;

          position:relative;

          z-index:2;
        }

        .timeline-item{
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
          top:35px;

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

        .experience-card{
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

        .experience-card:hover{
          transform:translateY(-6px);

          border-color:
            rgba(56,189,248,0.22);

          box-shadow:
            0 18px 35px rgba(0,0,0,0.35);
        }

        /* Top */

        .top-row{
          display:flex;

          justify-content:space-between;

          align-items:flex-start;

          gap:1rem;

          flex-wrap:wrap;

          margin-bottom:1.5rem;
        }

        .company-info{
          display:flex;

          align-items:flex-start;

          gap:1rem;
        }

        .company-logo{
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

        .top-row h3{
          font-size:1.25rem;

          color:white;

          margin-bottom:0.4rem;
        }

        .top-row h4{
          color:#38bdf8;

          font-size:0.96rem;

          font-weight:600;

          margin-bottom:0.5rem;
        }

        .duration{
          color:#b6bdd1;

          font-size:0.88rem;
        }

        /* Badge */

        .badge{
          padding:9px 16px;

          border-radius:999px;

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid rgba(255,255,255,0.08);

          color:white;

          font-size:0.78rem;

          font-weight:600;
        }

        /* List */

        .experience-card ul{
          list-style:none;

          display:flex;

          flex-direction:column;

          gap:0.9rem;
        }

        .experience-card li{
          position:relative;

          padding-left:1.4rem;

          color:#d1d5db;

          line-height:1.7;

          font-size:0.92rem;
        }

        .experience-card li::before{
          content:'';

          position:absolute;

          left:0;
          top:10px;

          width:8px;
          height:8px;

          border-radius:50%;

          background:#38bdf8;
        }

        @media(max-width:768px){

          .timeline-item{
            padding-left:2.8rem;
          }

          .experience-card{
            padding:1.5rem;
          }

          .top-row{
            flex-direction:column;
          }

          .company-info{
            flex-direction:column;
          }
        }

      `}</style>

    </section>
  )
}