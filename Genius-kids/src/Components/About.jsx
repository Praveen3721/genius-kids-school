import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

     
      <div className="about-heading">
        <p className="about-subtitle">GET TO KNOW US</p>

        <h1>
          About <span>Genius Kids</span>
        </h1>

        <div className="about-heading-line"></div>

        <p className="about-intro">
          Helping every child discover their potential and shine.
        </p>
      </div>

    
      <div className="about-container">

        <div className="about-content">
          <h2>We are Genius Kids!</h2>

          <p>
            Genius Kids is an international and contemporary Montessori
            school that encourages children to explore, discover, and learn.
            We focus on the individual child and support their natural
            curiosity through meaningful learning experiences.
          </p>

          <p>
            Our learning environment encourages independence, creativity,
            confidence, and respect. We believe every child has unique
            abilities and deserves the opportunity to develop at their own pace.
          </p>

          <p>
            We work together with families and teachers to create a caring,
            safe, and supportive environment where children can build a strong
            foundation for their future.
          </p>

          <a href="#method" className="about-button">
            Explore Our Method →
          </a>
        </div>

      
        <div className="about-image">
          <img
            src="/images/Joyful Kids Learning Adventure.png"
            alt="Children learning at Genius Kids International School"
          />
        </div>

      </div>

      
      <div className="mission-vision">

        <div className="mission-card">
          <div className="about-card-icon">🎯</div>

          <h2>Our Mission</h2>

          <p>
            Educate, empower, and encourage young minds to develop integrity,
            courage, self-reliance, responsibility, and a love for learning.
          </p>
        </div>

        <div className="vision-card">
          <div className="about-card-icon">🌟</div>

          <h2>Our Vision</h2>

          <p>
            To support the holistic development of children by nurturing
            their physical, emotional, intellectual, and social growth.
          </p>
        </div>

      </div>

      
      <div className="about-award">
        <div className="about-award-icon">🏆</div>

        <div>
          <h3>A Commitment to Excellence</h3>

          <p>
            Creating a positive learning environment where every child
            is encouraged to learn, grow, and achieve their potential.
          </p>
        </div>
      </div>

    </section>
  );
}

export default About;