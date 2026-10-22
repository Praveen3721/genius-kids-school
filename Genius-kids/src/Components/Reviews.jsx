import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      initial: "K",
      name: "Kavitha Raj",
      location: "Parent of LKG Student",
      text: "Euro Kids Pre-School provides a wonderful learning environment. My child enjoys going to school every day and loves the activities.",
    },
    {
      initial: "R",
      name: "Rajesh Kumar",
      location: "Parent of UKG Student",
      text: "The teachers are friendly, caring, and supportive. I am happy to see my child becoming more confident and independent.",
    },
    {
      initial: "P",
      name: "Priya Sharma",
      location: "Parent of Nursery Student",
      text: "A colourful and joyful school for little children. The activity-based learning helps my child learn new things every day.",
    },
    {
      initial: "S",
      name: "Suresh Babu",
      location: "Parent of LKG Student",
      text: "The school provides a welcoming environment for children. My child enjoys drawing, singing, and participating in classroom activities.",
    },
    {
      initial: "M",
      name: "Meena Lakshmi",
      location: "Parent of UKG Student",
      text: "I appreciate the attention given to every child. The teachers encourage creativity, communication, and good habits.",
    },
    {
      initial: "A",
      name: "Arun Prakash",
      location: "Parent of Nursery Student",
      text: "A nice place for early childhood learning. My child is excited about school activities and enjoys spending time with teachers and friends.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">

    
        <div className="reviews-header">
          <div className="reviews-heading">

            <p className="reviews-subtitle">
              HAPPY PARENTS, HAPPY CHILDREN
            </p>

            <h2>
              What Parents Say About{" "}
              <span>Euro Kids</span>
            </h2>

            <p className="reviews-description">
              Every little smile tells a story! Discover how our
              caring environment and playful learning approach
              help children learn, explore, and grow with confidence.
            </p>

          </div>

          <div className="google-rating-card">

            <div className="google-rating-title">
              <span className="google-letter">G</span>

              <span className="google-rating-number">
                Parent Reviews
              </span>
            </div>

            <div className="google-stars">
              ★★★★★
            </div>

            <p>
              Read feedback from families about their preschool
              experience.
            </p>

            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="google-review-link"
            >
              Find us on Google ↗
            </a>

          </div>
        </div>

        <div className="reviews-grid">

          {reviews.map((review, index) => (
            <article className="review-card" key={index}>

              <div className="review-quote">
                “
              </div>

              <div className="review-stars">
                ★★★★★
              </div>

              <p className="review-text">
                {review.text}
              </p>

              <div className="review-author">

                <div className="review-avatar">
                  {review.initial}
                </div>

                <div className="review-author-details">

                  <h3>
                    {review.name}
                  </h3>

                  <span>
                    {review.location}
                  </span>

                </div>

              </div>

            </article>
          ))}

        </div>

        <div className="reviews-footer">
          <span className="footer-heart">♡</span>

          <p>
            Little Learners Today, Bright Futures Tomorrow!
          </p>
        </div>

      </div>
    </section>
  );
}

export default Reviews;