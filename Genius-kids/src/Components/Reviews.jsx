import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Kavi Kaashini",
      text: "Selfless service oriented people are rare to see.",
    },
    {
      name: "Kiruba Karan",
      text: "The teachers are very kind, patient, and take good care of the children.",
    },
    {
      name: "Prema Puppy",
      text: "The friendly staff and healthy environment make the school special.",
    },
  ];

  return (
    <section className="reviews-section" id="reviews">

      {/* Reviews Header */}
      <div className="reviews-header">

        <div className="reviews-title">
          <p className="reviews-subtitle">
            FAMILIES ON GOOGLE
          </p>

          <h2>
            What <span>Parents Say</span>
          </h2>

          <p className="reviews-description">
            Kind words from families who have experienced Genius Kids.
          </p>
        </div>

        {/* Google Rating */}
        <div className="google-rating">
          <h2>
            <span className="google-g">G</span> 5.0
          </h2>

          <div className="review-stars">★★★★★</div>

          <p>From 84 Google reviews</p>

          <a
            href="https://www.google.com/search?q=Genius+Kids+International+School+reviews"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read all Google reviews ↗
          </a>
        </div>

      </div>

      {/* Review Cards */}
      <div className="reviews-container">

        {reviews.map((review) => (
          <article className="review-card" key={review.name}>

            <div className="quote-icon">“</div>

            <div className="review-stars">★★★★★</div>

            <p className="review-text">
              {review.text}
            </p>

            <div className="review-author">

              <div className="review-avatar">
                {review.name.charAt(0)}
              </div>

              <div>
                <h3>{review.name}</h3>
                <span>Google review</span>
              </div>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Reviews;