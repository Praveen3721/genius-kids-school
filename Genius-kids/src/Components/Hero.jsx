import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

     
      <div className="hero-overlay"></div>

    
      <div className="hero-container">
        <div className="hero-content">

          <p className="hero-subtitle">
            GENIUS KIDS INTERNATIONAL SCHOOL
          </p>

          <h1>
            Nurturing Young
            <br />
            Minds for a
            <br />
            Bright Future
          </h1>

          <p className="hero-description">
            Where learning is fun and every child is a genius
          </p>

          <a href="#contact" className="hero-button">
            Enroll Now
          </a>

        </div>
      </div>

    </section>
  );
}

export default Hero;