import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

function Footer() {

  const [images, setImages] = useState([]);

  useEffect(() => {

    async function fetchGallery() {
      try {
        const res = await fetch("http://localhost/vincent-academy/wp-json/wp/v2/gallery");
        const data = await res.json();

        const ids = (data[0]?.acf?.gallery_images || []).slice(0, 6);

        const imgs = await Promise.all(
          ids.map(async (id) => {
            const res = await fetch(
              `http://localhost/vincent-academy/wp-json/wp/v2/media/${id}`
            );
            const img = await res.json();
            return img.source_url;
          })
        );

        setImages(imgs);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    }

    fetchGallery();

    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.unbind("[data-fancybox]");
    };

  }, []);

  return (
    <section className="footer-area">
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-12 col-md-12 col-lg-4">
            <div className="footer-left position-relative">

              <img src="/images/cloud.png" alt="" className="cloud-pic position-absolute" />
              <img src="/images/pencil_girl.png" alt="" className="play-girl position-absolute" />

              <img src="/images/footer-logo.png" alt="logo" />

              <p>
                St.Vincent's Academy, Purba Bardhaman owned by krishnam foundation,
                founded in 2023, Chaired by Chairman Mr. Sanjay Kumar Gupta.
              </p>

              <ul className="d-flex">
                <li><button><i className="ri-facebook-line"></i></button></li>
                <li><button><i className="ri-twitter-x-line"></i></button></li>
                <li><button><i className="ri-instagram-line"></i></button></li>
              </ul>

            </div>
          </div>

          {/* MIDDLE */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-middle position-relative">

              <img src="/images/pencil_boy.png" alt="" className="position-absolute play-boy" />

              <div className="row justify-content-lg-center">

                <div className="col-auto">
                  <div className="footer-links">
                    <h3>Pages</h3>
                    <ul className="d-flex">
                      <li><Link to="/our-vision">About Us</Link></li>
                      <li><Link to="/admissions">Admissions</Link></li>
                      <li><Link to="/gallery">Events</Link></li>
                      <li><Link to="/activities">Activity</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="footer-links">
                    <h3>Help Desk</h3>
                    <ul className="d-flex">
                      <li><Link to="/gallery">Gallery</Link></li>
                      <li><Link to="/JobOpportunity">Job Opportunities</Link></li>
                      <li><Link to="/contact">Contact Us</Link></li>
                      <li><Link to="/transport">Transport</Link></li>
                      <li><Link to="/awards">Awards</Link></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="footer-right">
              <h3>Our Gallery</h3>

              <div className="row">
                {images.map((img, index) => (
                  <div className="col-4" key={index}>
                    <div className="gallery-content">
                      <a href={img} data-fancybox="gallery">
                        <img src={img} alt="gallery" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

        <p className="copyright-text text-center">
          Copyright © 2026 St. <span>Vincent's Academy</span>.
          All Rights Reserved | Designed by{" "}
          <a
            href="https://subratahaldar.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subrata
          </a>
        </p>

      </div>
    </section>
  );
}

export default Footer;