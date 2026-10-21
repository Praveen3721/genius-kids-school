import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Our Method", id: "our-method" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = link.id;
        }
      });

      // At the bottom of the page, activate Contact.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (event, id) => {
    event.preventDefault();

    const section = document.getElementById(id);

    if (!section) {
      console.error(`Section not found: #${id}`);
      return;
    }

    // Immediately activate the clicked link.
    setActiveSection(id);

    // Update the URL hash.
    window.history.replaceState(null, "", `#${id}`);

    // Scroll to the selected section.
    const navbarHeight =
      document.querySelector(".navbar")?.offsetHeight || 0;

    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: Math.max(0, sectionTop - navbarHeight),
      behavior: "smooth",
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={(event) => handleNavClick(event, "home")}
        >
          <img src="/images/logo.png" alt="Genius Kids Logo" />

          <div className="navbar-logo-text">
            <h2>Genius Kids</h2>
            <span>INTERNATIONAL SCHOOL</span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleNavClick(event, link.id)}
              className={
                activeSection === link.id
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;