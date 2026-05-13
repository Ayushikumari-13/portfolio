import React from 'react'
import { certifications } from '../data/portfolioData'

const gradients = [
  'linear-gradient(135deg, rgba(168,85,247,0.18), rgba(6,182,212,0.08))',

  'linear-gradient(135deg, rgba(6,182,212,0.18), rgba(59,130,246,0.08))',

  'linear-gradient(135deg, rgba(244,63,94,0.16), rgba(168,85,247,0.08))',

  'linear-gradient(135deg, rgba(245,158,11,0.18), rgba(244,63,94,0.08))',
]

export default function Certifications() {

  return (
    <section
      id="certifications"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 8%',
        background:
          'linear-gradient(to bottom, #050816 0%, #070b1a 100%)',
      }}
    >

      {/* GLOW */}

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

      {/* HEADING */}

      <div
        style={{
          textAlign: 'center',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 2,
        }}
      >

        <p className="section-label">
          Achievements & Recognition
        </p>

        <h2 className="section-title">
          My <span className="accent">Certifications</span>
        </h2>

        <div className="divider" />

        <p
          style={{
            maxWidth: 700,
            color: '#b6bdd1',
            lineHeight: 1.9,
            fontSize: '1rem',
            margin: '1.5rem auto 0',
          }}
        >
          Certifications and learning achievements
          showcasing my frontend, cloud and development skills.
        </p>

      </div>

      {/* GRID */}

      <div className="cert-grid">

        {certifications.map((cert, index) => (

          <a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
            className="cert-card"
            style={{
              background:
                gradients[index % gradients.length],
            }}
          >

            {/* IMAGE */}

            <div className="cert-image">

              <img
                src={cert.image}
                alt={cert.name}

                onError={(e) => {
                  e.target.src =
                    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
                }}
              />

              {/* VERIFIED */}

              {/* <div className="verified-badge">
                ✓ Verified
              </div> */}

            </div>

            {/* CONTENT */}

            <div className="cert-content">

              <div className="cert-icon">
                {cert.icon}
              </div>

              <div className="cert-info">

                <h3>
                  {cert.name}
                </h3>

                <p>
                  {cert.by}
                </p>

              </div>

            </div>

          </a>

        ))}

      </div>

      <style>{`

        .cert-grid{

          display:grid;

          grid-template-columns:
            repeat(auto-fit, minmax(280px, 1fr));

          gap:1.6rem;

          position:relative;

          z-index:2;
        }

        /* CARD */

        .cert-card{

          overflow:hidden;

          border-radius:24px;

          border:
            1px solid rgba(255,255,255,0.08);

          backdrop-filter:blur(18px);

          transition:0.35s ease;

          background:
            rgba(255,255,255,0.04);

          text-decoration:none;

          display:block;
        }

        .cert-card:hover{

          transform:
            translateY(-8px);

          border-color:
            rgba(6,182,212,0.22);

          box-shadow:
            0 18px 35px rgba(0,0,0,0.35);
        }

        /* IMAGE */

        .cert-image{

          position:relative;

          width:100%;

          height:190px;

          overflow:hidden;

          background:#111827;
        }

        .cert-image img{

          width:100%;
          height:100%;

          object-fit:cover;

          display:block;

          transition:0.5s ease;
        }

        .cert-card:hover img{

          transform:scale(1.08);
        }

        /* VERIFIED */

        .verified-badge{

          position:absolute;

          top:14px;
          right:14px;

          padding:7px 14px;

          border-radius:999px;

          background:
            rgba(5,8,22,0.75);

          backdrop-filter:blur(10px);

          border:
            1px solid rgba(56,189,248,0.22);

          color:#38bdf8;

          font-size:0.72rem;

          font-weight:600;

          box-shadow:
            0 8px 20px rgba(0,0,0,0.25);
        }

        /* CONTENT */

        .cert-content{

          display:flex;

          align-items:flex-start;

          gap:1rem;

          padding:1.4rem;
        }

        .cert-icon{

          width:58px;
          height:58px;

          border-radius:16px;

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:1.5rem;

          flex-shrink:0;

          background:
            rgba(255,255,255,0.08);

          border:
            1px solid rgba(255,255,255,0.08);
        }

        .cert-info{

          flex:1;
        }

        .cert-info h3{

          font-size:1rem;

          color:white;

          margin-bottom:0.45rem;

          line-height:1.5;
        }

        .cert-info p{

          color:#d1d5db;

          font-size:0.88rem;

          line-height:1.7;
        }

        /* MOBILE */

        @media(max-width:768px){

          .cert-grid{
            grid-template-columns:1fr;
          }

          .cert-image{
            height:170px;
          }

          .cert-content{
            padding:1.2rem;
          }

          .verified-badge{
            font-size:0.68rem;
          }
        }

      `}</style>

    </section>
  )
}