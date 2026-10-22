import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const schoolEmail = "geniuskidsscl@gmail.com";

    const subject = encodeURIComponent(`School Enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:${schoolEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <h1>
            Get in <span>Touch</span>
          </h1>
          <div className="contact-heading-line"></div>
        </div>

        {/* Contact Details and Form */}
        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-information">

            <div className="contact-info-item">
              <div className="contact-info-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                {/* <p>
                  2/541 C, Ambal Nagar, Malumichampatti,
                  <br />
                  Coimbatore, Tamil Nadu, India - 641 050
                </p> */}
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">📞</div>
              <div>
                <h3>Call Us</h3>
                <p>
                  {/* <a href="tel:+919444828105">+91 94448 28105</a> */}
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">✉</div>
              <div>
                <h3>Email Us</h3>
                <p>
                  {/* <a href="mailto:geniuskidsscl@gmail.com">
                    geniuskidsscl@gmail.com
                  </a> */}
                </p>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">◷</div>
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
              </div>
            </div>

          </div>

          {/* Right Side Form */}
          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              autoComplete="name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              autoComplete="email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              autoComplete="tel"
              pattern="[0-9+\s()-]{7,20}"
              title="Enter a valid phone number"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit" className="contact-submit">
              Send Message <span>→</span>
            </button>

          </form>

        </div>

        {/* Google Map */}
        <div className="contact-map-heading">
          <h2>Find Our <span>School</span></h2>
          <div className="contact-heading-line"></div>
        </div>

        <div className="contact-map">
          <iframe
            title="Euro Kids Pre-School Location"
            src="https://maps.google.com/maps?q=2%2F541%20C%2C%20Ambal%20Nagar%2C%20Malumichampatti%2C%20Coimbatore%2C%20Tamil%20Nadu%20641050&t=&z=14&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;

