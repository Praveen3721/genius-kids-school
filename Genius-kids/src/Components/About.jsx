import "./About.css";

function About() {
  const handleExplore = () => {
    const methodSection = document.getElementById("our-method");

    if (methodSection) {
      const navbarHeight =
        document.querySelector(".navbar")?.offsetHeight || 0;

      const sectionTop =
        methodSection.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(0, sectionTop - navbarHeight),
        behavior: "smooth",
      });

      window.history.replaceState(null, "", "#our-method");
    }
  };

  return (
    <section className="about-section" id="about">

      {/* ABOUT HEADER */}

      <div className="about-header">
        <p className="about-subtitle">GET TO KNOW US</p>

        <h1>
          About <span>Euro Kids</span>
        </h1>

        <div className="about-title-line"></div>

        <p className="about-header-description">
          Helping every child discover their potential and shine.
        </p>
      </div>

      {/* ABOUT CONTENT */}

      <div className="about-container">

        <div className="about-content">

          <span className="about-small-label">
            WELCOME TO EURO KIDS PRE-SCHOOL
          </span>

          <h2>
            Little Learners, <span>Big Dreams!</span>
          </h2>

          <p>
            Welcome to Euro Kids Pre-School, a joyful place where
            little minds explore, discover, and grow. We believe
            every child is unique and deserves a caring environment
            that inspires curiosity, creativity, and confidence.
          </p>

          <p>
            Through playful activities, interactive experiences,
            and meaningful learning, we help children develop
            communication skills, independence, friendships, and
            a love for learning.
          </p>

          <p>
            Our goal is to create a safe, welcoming environment
            where children feel happy, valued, and encouraged
            to take their little steps towards a bright future.
          </p>

          

        </div>

        {/* ABOUT IMAGE */}

        <div className="about-image-wrapper">

          <img
            src="/images/Euro Kids Classroom Playtime.png"
            alt="Happy children learning and playing at Euro Kids Pre-School"
            className="about-image"
          />

          <div className="about-image-badge">
            <span className="about-badge-icon">♡</span>

            <div>
              <strong>Happy Little Learners</strong>
              <p>Growing with love and care</p>
            </div>
          </div>

          <div className="about-decoration about-decoration-one">
            ✦
          </div>

          <div className="about-decoration about-decoration-two">
            ♥
          </div>

        </div>

      </div>

      {/* MISSION AND VISION */}

      <div className="about-values">

        <article className="about-value-card mission-card">

          <div className="about-value-icon">🎯</div>

          <h3>Our Mission</h3>

          <p>
            To nurture young minds through playful learning,
            creativity, care, and encouragement, helping every
            child build confidence and develop a love for learning.
          </p>

        </article>

        <article className="about-value-card vision-card">

          <div className="about-value-icon">🌟</div>

          <h3>Our Vision</h3>

          <p>
            To create a happy learning environment where children
            can explore their abilities, build meaningful
            friendships, and develop a strong foundation for life.
          </p>

        </article>

      </div>

      {/* COMMITMENT */}

      <div className="about-commitment">

        <div className="commitment-icon">🏆</div>

        <div className="commitment-content">

          <h3>A Commitment to Excellence</h3>

          <p>
            Every child deserves love, encouragement, and
            opportunities to grow. We strive to make every
            learning experience joyful, engaging, and meaningful.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;