import React from 'react'
import { projects } from '../data/portfolioData'

export default function Projects() {

  const projectImages = {
    1: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',

    2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',

    3: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',

    4: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  }

  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 8%',
        background:
          'linear-gradient(to bottom, #050816 0%, #070b1a 100%)',
      }}
    >

      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          right: '-80px',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(124,58,237,0.18), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: '-100px',
          left: '-80px',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(6,182,212,0.14), transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Heading */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          marginBottom: '4rem',
        }}
      >

        <p className="section-label">
          Portfolio Showcase
        </p>

        <h2 className="section-title">
          Featured{' '}
          <span className="accent2">
            Projects
          </span>
        </h2>

        <div className="divider" />

        <p
          style={{
            maxWidth: '650px',
            margin: 'auto',
            color: '#b6bdd1',
            lineHeight: 1.8,
            fontSize: '0.95rem',
          }}
        >
          Modern frontend and MERN stack projects
          showcasing responsive UI, clean design
          and real-world functionality.
        </p>

      </div>

      {/* Projects Grid */}
      <div className="projects-grid">

        {projects.map((project) => (

          <div
            key={project.id}
            className="project-card"
          >

            {/* IMAGE */}
            <div className="project-image">

              <img
                src={
                  projectImages[project.id] ||
                  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
                }

                alt={project.name}
              />

              {/* Overlay */}
              <div className="overlay"></div>

              {/* Number */}
              <div className="project-number">
                {project.id}
              </div>

            </div>

            {/* CONTENT */}
            <div className="project-content">

              <h3>
                {project.name}
              </h3>

              <p>
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="tech-stack">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      <style>{`

        .projects-grid{
          display:grid;

          grid-template-columns:
            repeat(auto-fit, minmax(290px, 1fr));

          gap:1.8rem;

          position:relative;

          z-index:2;
        }

        /* CARD */

        .project-card{
          position:relative;

          overflow:hidden;

          border-radius:24px;

          background:
            rgba(255,255,255,0.04);

          border:
            1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(14px);

          transition:0.4s ease;
        }

        .project-card:hover{
          transform:
            translateY(-10px);

          border-color:
            rgba(56,189,248,0.28);

          box-shadow:
            0 20px 40px rgba(0,0,0,0.35);
        }

        /* IMAGE */

        .project-image{
          position:relative;

          width:100%;

          height:190px;

          overflow:hidden;
        }

        .project-image img{
          width:100%;
          height:100%;

          object-fit:cover;

          transition:0.5s ease;
        }

        .project-card:hover img{
          transform:scale(1.08);
        }

        .overlay{
          position:absolute;

          inset:0;

          background:
            linear-gradient(
              to top,
              rgba(5,8,22,0.7),
              transparent
            );
        }

        /* NUMBER */

        .project-number{
          position:absolute;

          top:15px;
          left:15px;

          width:46px;
          height:46px;

          border-radius:14px;

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:1rem;

          font-weight:700;

          color:white;

          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          box-shadow:
            0 10px 20px rgba(56,189,248,0.28);
        }

        /* CONTENT */

        .project-content{
          padding:1.5rem;
        }

        .project-content h3{
          color:white;

          font-size:1.15rem;

          margin-bottom:0.8rem;

          line-height:1.5;
        }

        .project-content p{
          color:#b6bdd1;

          line-height:1.7;

          font-size:0.86rem;

          margin-bottom:1.3rem;
        }

        /* TECH STACK */

        .tech-stack{
          display:flex;

          flex-wrap:wrap;

          gap:0.5rem;

          margin-bottom:1.5rem;
        }

        .tech-stack span{
          padding:7px 12px;

          border-radius:999px;

          background:
            rgba(255,255,255,0.05);

          border:
            1px solid rgba(255,255,255,0.08);

          color:#38bdf8;

          font-size:0.72rem;

          transition:0.3s ease;
        }

        .tech-stack span:hover{
          background:
            linear-gradient(
              135deg,
              rgba(139,92,246,0.18),
              rgba(56,189,248,0.18)
            );

          transform:
            translateY(-2px);
        }

        /* BUTTONS */

        .project-buttons{
          display:flex;

          gap:0.8rem;
        }

        .project-buttons a{
          flex:1;

          text-align:center;

          padding:10px 14px;

          border-radius:12px;

          text-decoration:none;

          font-size:0.78rem;

          font-weight:600;

          transition:0.3s ease;
        }

        .project-buttons a:first-child{
          background:
            linear-gradient(
              135deg,
              #8b5cf6,
              #38bdf8
            );

          color:white;
        }

        .project-buttons a:last-child{
          background:
            rgba(255,255,255,0.04);

          border:
            1px solid rgba(255,255,255,0.08);

          color:white;
        }

        .project-buttons a:hover{
          transform:
            translateY(-3px);
        }

        /* MOBILE */

        @media(max-width:768px){

          .projects-grid{
            grid-template-columns:1fr;
          }

          .project-buttons{
            flex-direction:column;
          }

          .project-buttons a{
            width:100%;
          }
        }

      `}</style>

    </section>
  )
}