import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function SchoolGallery() {
  const [images, setImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All" },
    { id: "school", label: "School" },
    { id: "laboratory", label: "Laboratory" },
    { id: "activities", label: "Activities" },
    { id: "facilities", label: "Facilities" },
  ];

  useEffect(() => {
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/media_gallery")
      .then((res) => res.json())
      .then(async (data) => {

        let allImages = [];

        for (let item of data) {
          const ids = item.acf?.gallery_images || [];

          // 👉 convert IDs → URLs
          const imgs = await Promise.all(
            ids.map(async (id) => {
              const res = await fetch(
                `https://stvincentcbseburdwan.org/wp-json/wp/v2/media/${id}`
              );
              const img = await res.json();

              return {
                img: img.source_url,
                category: item.slug, // 🔥 IMPORTANT
              };
            })
          );

          allImages = [...allImages, ...imgs];
        }

        setImages(allImages);
      });

    Fancybox.bind("[data-fancybox]", {});
    return () => Fancybox.destroy();
  }, []);

  // FILTER
  const filteredItems =
    activeFilter === "all"
      ? images
      : images.filter((item) =>
          item.category?.toLowerCase().includes(activeFilter)
        );

  return (
    <section className="gallery-area my-gallery p-100">
      <div className="container">

        {/* FILTER */}
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
            <div className={`gallery-item ${item.category}`} key={index}>
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