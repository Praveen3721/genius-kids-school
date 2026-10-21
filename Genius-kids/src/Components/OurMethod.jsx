import "./OurMethod.css";

import {
  FaBookOpen,
  FaLanguage,
  FaBookmark,
  FaDesktop,
  FaGamepad,
  FaTree,
  FaVideo,
} from "react-icons/fa";

function OurMethod() {
  const learningMethods = [
    {
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
      title: "Self Discipline & Independence",
      description:
        "To aid self discipline, Independence, communication and movement of the child.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600",
      title: "Safe & Nurturing Environment",
      description:
        "Provide a safe engaging and nurturing environment for the child.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600",
      title: "Skill Development",
      description:
        "Develop gross motor co-ordination, fine motor skills and language skill.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600",
      title: "Imaginative Exploration",
      description:
        "Offer great opportunities for imaginative exploration leading to confident and creative self efficiency.",
    },
  ];

  const cornerMethods = [
    {
      icon: <FaBookOpen />,
      title: (
        <>
          Montessori method of
          <br />
          teaching and learning
        </>
      ),
    },
    {
      icon: <FaLanguage />,
      title: (
        <>
          U.K based phonetics
          <br />
          reading program
        </>
      ),
    },
    {
      icon: <FaBookmark />,
      title: "Reading Corner",
    },
    {
      icon: <FaDesktop />,
      title: "Smart room",
    },
    {
      icon: <FaGamepad />,
      title: "Activity room",
    },
    {
      icon: <FaTree />,
      title: "Outdoor play environment",
    },
    {
      icon: <FaVideo />,
      title: "Surveillance cameras",
    },
  ];

  return (
    <>
      {/* DYNAMIC METHOD SECTION */}
      <section
        className="dynamic-method-section"
        id="our-method"
      >
        <div className="method-heading">
          <h1>
            The <span>Dynamic Method</span>
          </h1>

          <div className="method-heading-line"></div>

          <p>Montessori Education is based on the following:</p>
        </div>

        {/* AGE GROUPS */}
        <div className="age-container">
          <div className="age-box">
            <h2>0 - 6 years</h2>
            <p>Help me to do it by myself</p>
          </div>

          <div className="age-box">
            <h2>6 - 12 years</h2>
            <p>Help me to think</p>
          </div>
        </div>

        {/* LEARNING METHOD CARDS */}
        <div className="dynamic-method-cards">
          {learningMethods.map((method) => (
            <article
              className="dynamic-method-card"
              key={method.title}
            >
              <div className="dynamic-method-image">
                <img
                  src={method.image}
                  alt={method.title}
                  loading="lazy"
                />
              </div>

              <div className="dynamic-method-content">
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* LEARNING CORNER SECTION */}
      <section
        className="learning-corner-section"
        id="learning-corner"
      >
        <div className="method-heading">
          <h1>
            Our <span>Learning Corner</span>
          </h1>

          <div className="method-heading-line"></div>
        </div>

        <div className="corner-method-cards">
          {cornerMethods.map((method, index) => (
            <article
              className="corner-method-card"
              key={index}
            >
              <div className="corner-method-icon">
                {method.icon}
              </div>

              <h3>{method.title}</h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default OurMethod;