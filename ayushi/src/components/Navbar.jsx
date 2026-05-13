import React, { useEffect, useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Certificates", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  /* ACTIVE SECTION */

  useEffect(() => {

    const handleScroll = () => {

      const sections =
        document.querySelectorAll("section");

      sections.forEach((section) => {

        const sectionTop =
          section.offsetTop - 120;

        const sectionHeight =
          section.clientHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY <
            sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }

      });
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}

        <div className="logo">
          Ayushi<span>.</span>
        </div>

        {/* NAV LINKS */}

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          {navItems.map((item, index) => (

            <li key={index}>

              <a
                href={item.link}

                className={
                  activeSection ===
                  item.link.substring(1)

                    ? "active-link"

                    : ""
                }

                onClick={() =>
                  setMenuOpen(false)
                }
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* HAMBURGER */}

        <div
          className={
            menuOpen
              ? "hamburger active"
              : "hamburger"
          }

          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          <span></span>
          <span></span>
          <span></span>

        </div>

      </nav>

      <style>{`

        html{
          scroll-behavior:smooth;
        }

        .navbar{

          position:fixed;

          top:0;
          left:0;

          width:100%;

          padding:1.2rem 8%;

          display:flex;

          align-items:center;

          justify-content:space-between;

          z-index:1000;

          background:
            rgba(5,8,22,0.72);

          backdrop-filter:blur(20px);

          border-bottom:
            1px solid rgba(255,255,255,0.06);

          box-shadow:
            0 10px 30px rgba(0,0,0,0.18);
        }

        /* LOGO */

        .logo{

          font-size:2rem;

          font-weight:800;

          color:var(--white);

          z-index:1001;

          font-family:var(--font-display);
        }

        .logo span{

          background:var(--gradient);

          -webkit-background-clip:text;

          -webkit-text-fill-color:transparent;
        }

        /* LINKS */

        .nav-links{

          display:flex;

          align-items:center;

          gap:2rem;

          list-style:none;
        }

        .nav-links a{

          position:relative;

          text-decoration:none;

          color:var(--muted);

          font-size:1rem;

          font-weight:500;

          transition:0.3s ease;

          padding-bottom:6px;
        }

        /* HOVER */

        .nav-links a:hover{

          color:var(--white);
        }

        .nav-links a::after{

          content:"";

          position:absolute;

          left:0;
          bottom:0;

          width:0%;

          height:2px;

          border-radius:999px;

          background:var(--gradient);

          transition:0.35s ease;
        }

        .nav-links a:hover::after{

          width:100%;
        }

        /* ACTIVE */

        .active-link{

          color:var(--cyan2) !important;

          font-weight:600;
        }

        .active-link::after{

          width:100% !important;
        }

        /* HAMBURGER */

        .hamburger{

          display:none;

          flex-direction:column;

          gap:6px;

          cursor:pointer;

          z-index:1001;
        }

        .hamburger span{

          width:28px;
          height:3px;

          border-radius:999px;

          background:var(--white);

          transition:0.3s ease;
        }

        .hamburger.active span:nth-child(1){

          transform:
            rotate(45deg)
            translateY(12px);
        }

        .hamburger.active span:nth-child(2){

          opacity:0;
        }

        .hamburger.active span:nth-child(3){

          transform:
            rotate(-45deg)
            translateY(-12px);
        }

        /* MOBILE */

        @media(max-width:900px){

          .hamburger{
            display:flex;
          }

          .nav-links{

            position:fixed;

            top:0;
            right:-100%;

            width:280px;

            height:100vh;

            background:
              rgba(5,8,22,0.96);

            backdrop-filter:blur(24px);

            flex-direction:column;

            justify-content:center;

            gap:2rem;

            transition:0.4s ease;
          }

          .nav-links.active{
            right:0;
          }

          .nav-links a{
            font-size:1.1rem;
          }
        }

      `}</style>
    </>
  );
}