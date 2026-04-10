import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function InfrastructureModel() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [images, setImages] = useState([]);

  // Fetch Infrastructure Data
  useEffect(() => {
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/infrastructure")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        if (res.length > 0) {
          setActiveTab(res[0].id);
        }
      })
      .catch((err) => console.error("Data fetch error:", err));
  }, []);

  // Find active tab content
  const activeContent = data.find((item) => item.id === activeTab);

  // Extract ACF safely
  const subTitle = activeContent?.acf?.subtitle;
  const sliderImages = activeContent?.acf?.slider_images || [];
  const decTop = activeContent?.acf?.description_top;
  const descBottom = activeContent?.acf?.description_bottom || [];

  // Fetch Images from WordPress Media API
  useEffect(() => {
    const fetchImages = async () => {
      if (!sliderImages.length) {
        setImages([]);
        return;
      }

      try {
        const results = await Promise.all(
          sliderImages.map(async (item) => {
            const res = await fetch(
              `https://stvincentcbseburdwan.org/wp-json/wp/v2/media/${item.slider_img}`
            );
            const data = await res.json();
            return data.source_url;
          })
        );

        setImages(results);
      } catch (err) {
        console.error("Image fetch error:", err);
      }
    };

    fetchImages();
  }, [sliderImages]);

  return (
    <section className="infra-section p-100 position-relative">
      <img
        src="/images/round-star.svg"
        alt="star"
        className="round-star position-absolute"
      />

      <div className="container">
        <div className="row">

          {/* LEFT SIDE */}
          <div className="col-lg-4">

            {/* Dynamic Tabs */}
            <ul className="nav flex-column nav-pills infra-tabs">
              {data.map((item) => (
                <li className="nav-item" key={item.id}>
                  <button
                    className={`nav-link ${
                      activeTab === item.id ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.title.rendered}
                  </button>
                </li>
              ))}
            </ul>

            {/* STATIC BANNER */}
            <div className="infra-banner mt-4 text-center">
              <h3>Experience Top-Class Infrastructure</h3>

              <button
                className="common-btn"
                onClick={() => navigate("/admissions")}
              >
                Enroll Now
              </button>

              <img src="/images/boy_scart_bord_image.png" alt="boy" />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-8">

            {activeContent ? (
              <div className="tab-content active">

                <img
                  src="/images/icon-baby-girl-diving.png"
                  className="position-absolute girl-diving"
                  alt="icon"
                />

                {/* TITLE */}
                <h3
                  dangerouslySetInnerHTML={{
                    __html: activeContent.title.rendered,
                  }}
                />

                {/* Subtitle */}
                {subTitle && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: subTitle,
                    }}
                  />
                )}

                {/* SWIPER IMAGES */}
                {images.length === 0 ? (
                  <p>Loading images...</p>
                ) : (
                  <Swiper className="labSwiper" spaceBetween={10}>
                    {images.map((img, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={img || "/images/individual.jpg"}
                          className="img-fluid w-100"
                          alt="infra"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
                {/* Description top */}
                {decTop && (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: decTop,
                    }}
                  />
                )}
                {/* BOTTOM DESCRIPTION */}
                {descBottom?.length > 0 &&
                  descBottom.map((item, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: item.description_bottom || "",
                      }}
                    />
                  ))}

              </div>
            ) : (
              <p>Loading content...</p>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

export default InfrastructureModel;