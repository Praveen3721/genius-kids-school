import "./Footer.css";

function Footer() {
  return (
    <footer className="euro-footer">
      <div className="euro-footer-container">

        <div className="euro-footer-brand">
          <img
            src="/images/euroKids.png"
            alt="Euro Kids Pre-School Logo"
            className="euro-footer-logo"
          />

          <div className="euro-footer-brand-text">
            <h2>Euro Kids</h2>
            <p>PRE-SCHOOL</p>
          </div>
        </div>

        <div className="euro-footer-links">
          <h3>Quick Links</h3>
          <span className="euro-footer-line"></span>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#our-method">Our Method</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="euro-footer-social">
          <h3>Connect With Us</h3>
          <span className="euro-footer-line"></span>

          <div className="euro-footer-social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              ◎
            </a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="euro-footer-bottom">
        <p>
          © {new Date().getFullYear()} Euro Kids Pre-School.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;


