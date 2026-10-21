import { useState } from "react";
import "./Gallery.css";

const schoolGallery = [
  
  {
    id: 1,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/arrangingBlockOnBlocks.jpg",
    alt: "Child arranging Montessori blocks",
  },
  {
    id: 2,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/arrangingBlocks2.jpg",
    alt: "Child arranging wooden blocks",
  },
  {
    id: 3,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/catchAndCatchWithBall.jpg",
    alt: "Children playing with a ball",
  },
  {
    id: 4,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/guessTheItemActivity.jpg",
    alt: "Child doing a guessing activity",
  },
  {
    id: 5,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/insertBeads.jpg",
    alt: "Children learning with beads",
  },
  {
    id: 6,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/slideDownPlay.jpg",
    alt: "Children playing on a slide",
  },
  {
    id: 7,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/boyDoingYoga.jpg",
    alt: "Child doing yoga",
  },
  {
    id: 8,
    category: "Activities",
    url: "https://www.geniuskids.co.in/images/yogaDay.jpg",
    alt: "Children practising yoga",
  },

  
  {
    id: 9,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/certificateAndPrizeOfChild.jpg",
    alt: "Child receiving an award",
  },
  {
    id: 10,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/gradparentsMeet.jpg",
    alt: "Grandparents meet at school",
  },
  {
    id: 11,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/graduationDay.jpg",
    alt: "School graduation celebration",
  },
  {
    id: 12,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/Grandpartentsday2.jpg",
    alt: "Family event at school",
  },
  {
    id: 13,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/GreenDay.jpg",
    alt: "Children celebrating Green Day",
  },
  {
    id: 14,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/independenceDayCelebration.jpg",
    alt: "Children celebrating Independence Day",
  },
  {
    id: 15,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/kidBreakingPotOnKrishnaJayanthi.jpg",
    alt: "Krishna Jayanthi celebration",
  },
  {
    id: 16,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/krishNaJayanthiBreakingPot.jpg",
    alt: "Children celebrating Krishna Jayanthi",
  },
  {
    id: 17,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/XmasCelbration.jpg",
    alt: "Christmas celebration at school",
  },
  {
    id: 18,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/xmasPreperation.jpg",
    alt: "Christmas preparation",
  },
  {
    id: 19,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/GaneshChaturthi.jpg",
    alt: "Ganesh Chaturthi celebration",
  },
  {
    id: 20,
    category: "Events",
    url: "https://www.geniuskids.co.in/images/ganeshCharurthi2.jpg",
    alt: "Children celebrating a school festival",
  },

 
  {
    id: 21,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/child_explaining_domestic_and_wild_animals.jpg",
    alt: "Child learning about animals",
  },
  {
    id: 22,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/child_with_diff_food_items_grains_veggies_etc.jpg",
    alt: "Child learning about food",
  },
  {
    id: 23,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/childExplainingFlowers.jpg",
    alt: "Child explaining flowers",
  },
  {
    id: 24,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/leanrNumbersFunWay.jpg",
    alt: "Child learning numbers",
  },
  {
    id: 25,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/learnNumbersFunWay2.jpg",
    alt: "Child practising numbers",
  },
  {
    id: 26,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/learnNumbersFunWay3.jpg",
    alt: "Child learning with number materials",
  },
  {
    id: 27,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/withGlobe.jpg",
    alt: "Child learning geography with a globe",
  },
  {
    id: 28,
    category: "Learning",
    url: "https://www.geniuskids.co.in/images/teachingArt.jpg",
    alt: "Teacher guiding children",
  },

 
  {
    id: 29,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/clayWorkChild.jpg",
    alt: "Child doing clay work",
  },
  {
    id: 30,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/craft_work_plane.jpg",
    alt: "Child creating a paper craft",
  },
  {
    id: 31,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/craftWork.jpg",
    alt: "Child showing creative artwork",
  },
  {
    id: 32,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/createArtWtihPaintActivity.jpg",
    alt: "Child creating art with paint",
  },
  {
    id: 33,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/hadncraft.jpg",
    alt: "Child making a handcraft",
  },
  {
    id: 34,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/handmadeCraftofVinayaga.jpg",
    alt: "Child creating a festival craft",
  },
  {
    id: 35,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/handPrintOnPaperActivity.jpg",
    alt: "Children making handprint art",
  },
  {
    id: 36,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/krishnaJayanthiFootPrintOfChild.jpg",
    alt: "Festival activity with a child",
  },
  {
    id: 37,
    category: "Crafts",
    url: "https://www.geniuskids.co.in/images/paintAndDripTheArt.jpg",
    alt: "Child creating a painting",
  },
];

const categories = [
  "All",
  "Activities",
  "Events",
  "Learning",
  "Crafts",
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? schoolGallery
      : schoolGallery.filter(
          (image) => image.category === activeCategory
        );

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-heading">
        <h1>
          Our <span>Gallery</span>
        </h1>

        <div className="gallery-heading-line"></div>
      </div>

      <div className="gallery-filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`gallery-filter ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredImages.map((image) => (
          <article className="gallery-card" key={image.id}>
            <img
              src={image.url}
              alt={image.alt}
              loading="lazy"
              onError={(event) => {
                console.error("Image failed to load:", image.url);
                event.currentTarget.classList.add("gallery-image-error");
              }}
            />
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;