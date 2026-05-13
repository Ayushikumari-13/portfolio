import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

function App() {

  return (
    <div
      style={{
        background:
          'linear-gradient(to bottom, #050816 0%, #070b1a 100%)',

        minHeight: '100vh',

        overflowX: 'hidden',
      }}
    >

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Education />

      <Experience />

      <Projects />

      <Certifications />

      <Contact />

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',

          padding: '2.5rem 8%',

          borderTop:
            '1px solid rgba(255,255,255,0.08)',

          color: '#b6bdd1',

          fontSize: '0.95rem',

          background:
            'rgba(255,255,255,0.02)',

          backdropFilter: 'blur(10px)',
        }}
      >

        © 2026
        <span
          style={{
            color: '#8b5cf6',

            fontWeight: '700',

            marginLeft: '6px',
            marginRight: '6px',
          }}
        >
          Ayushi Kumari
        </span>

        | Frontend Developer | Lucknow, India

      </footer>

    </div>
  )
}

export default App