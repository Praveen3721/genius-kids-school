import "./Hero.css";

function Hero() {
  const handleEnroll = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 0;

      const sectionTop =
        contactSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, sectionTop - navbarHeight),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Background overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">
            WELCOME TO EURO KIDS PRE-SCHOOL
          </p>

          <h1>
            Little Steps,
            <br />
            <span>Big Dreams!</span>
          </h1>

          <p className="hero-description">
            A joyful place where little minds explore,
            discover, and grow into confident learners.
            Every little step today builds a brighter
            tomorrow.
          </p>

          <button
            type="button"
            className="hero-enroll-btn"
            onClick={handleEnroll}
          >
            <span>Enroll Now</span>
            <span className="hero-arrow">→</span>
          </button>

          
        </div>
      </div>
    </section>
  );
}

export default Hero;