import "./Contact.css";

const contactDetails = [
  {
    icon: "📍",
    title: "Our Location",
    text: (
      <>
        2/541 C, Ambal Nagar, Malumichampatti,
        <br />
        Coimbatore, Tamil Nadu, India - 641 050
      </>
    ),
  },
  {
    icon: "📞",
    title: "Call Us",
    text: "+91 94448 28105",
  },
  {
    icon: "✉",
    title: "Email Us",
    text: "geniuskidsscl@gmail.com",
  },
  {
    icon: "◷",
    title: "Working Hours",
    text: "Monday - Friday: 8:00 AM - 4:30 PM",
  },
];

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:geniuskidsscl@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h1>
            Get in <span>Touch</span>
          </h1>
          <div className="contact-heading-line"></div>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-information">
            {contactDetails.map((item) => (
              <div className="contact-item" key={item.title}>
                <div className="contact-icon">{item.icon}</div>

                <div className="contact-item-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              aria-label="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              aria-label="Your Email"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              aria-label="Your Phone"
              pattern="[0-9+\s()-]{7,20}"
              title="Enter a valid phone number"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              aria-label="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" className="contact-submit">
              Send Message
            </button>
          </form>
        </div>


        <div className="contact-map">
          <iframe
            title="Genius Kids International School Location"
            src="https://maps.google.com/maps?q=Genius%20Kids%20International%20School%2C%20Malumichampatti%2C%20Coimbatore&t=&z=14&ie=UTF8&iwloc=&output=embed"
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