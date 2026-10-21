import "./Footer.css";

function Footer() {
  const goToSection = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      window.history.replaceState(null, "", `#${sectionId}`);
    }
  };

  return (
    <footer className="school-footer">
      <div className="footer-container">

        <div className="footer-brand">
          <a
            href="#home"
            onClick={(event) => goToSection(event, "home")}
            className="footer-brand-link"
          >
            <img
              src="/images/logo.png"
              alt="Genius Kids International School"
              className="footer-logo"
            />

            <div className="footer-brand-text">
              <h2>Genius Kids</h2>
              <p>INTERNATIONAL SCHOOL</p>
            </div>
          </a>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <div className="footer-title-line"></div>

          <a href="#home" onClick={(e) => goToSection(e, "home")}>
            Home
          </a>

          <a href="#about" onClick={(e) => goToSection(e, "about")}>
            About Us
          </a>

          <a href="#our-method" onClick={(e) => goToSection(e, "our-method")}>
            Our Method
          </a>

          <a href="#gallery" onClick={(e) => goToSection(e, "gallery")}>
            Gallery
          </a>

          <a href="#contact" onClick={(e) => goToSection(e, "contact")}>
            Contact
          </a>
        </div>

        <div className="footer-social">
          <h3>Connect With Us</h3>
          <div className="footer-title-line"></div>

          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="social-icon"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="social-icon"
            >
              ◎
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Genius Kids International School. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;