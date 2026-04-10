import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function SchoolGallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "school", label: "School" },
    { id: "lab", label: "Laboratory" },
    { id: "activity", label: "Activities" },
    { id: "facilities", label: "Facilities" },
  ];

  const galleryItems = [
    { img: "/images/gallery10.webp", category: "school" },
    { img: "/images/gallery-1.png", category: "lab" },
    { img: "/images/gallery-2.png", category: "activity" },
    { img: "/images/gallery-3.png", category: "facilities" },
    { img: "/images/gallery-4.png", category: "school" },
    { img: "/images/gallery-5.png", category: "lab" },
    { img: "/images/gallery6.webp", category: "activity" },
    { img: "/images/gallery7.webp", category: "facilities" },
    { img: "/images/gallery8.webp", category: "activity" },
    { img: "/images/gallery9.webp", category: "facilities" },
    { img: "/images/gallery10.webp", category: "school" },
    { img: "/images/gallery11.webp", category: "lab" },
    { img: "/images/gallery-12.png", category: "activity" },
    { img: "/images/gallery11.webp", category: "facilities" },
    { img: "/images/gallery-1.png", category: "facilities" },
  ];

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  // FILTER LOGIC
  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section className="gallery-area my-gallery p-100">
      <div className="container">

        {/* FILTER TABS */}
        <ul className="nav nav-pills justify-content-center gallery-tabs">
          {filters.map((filter) => (
            <li className="nav-item" key={filter.id}>
              <button
                className={`nav-link ${
                  activeFilter === filter.id ? "active" : ""
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        {/* GALLERY */}
        <div className="gallery-masonry">
          {filteredItems.map((item, index) => (
            <div
              className={`gallery-item ${item.category}`}
              key={index}
            >
              <a href={item.img} data-fancybox="gallery">
                <img src={item.img} alt="gallery" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SchoolGallery;