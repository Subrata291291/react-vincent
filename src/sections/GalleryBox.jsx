import { useEffect, useRef, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function GalleryBox() {
  const sectionRef = useRef(null);

  const [images, setImages] = useState([]);

  useEffect(() => {

    // FETCH GALLERY
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/gallery")
      .then(res => res.json())
      .then(async (data) => {

        const ids = data[0]?.acf?.gallery_images || [];

        // convert IDs → URLs
        const imgs = await Promise.all(
          ids.map(async (id) => {
            const res = await fetch(
              `https://stvincentcbseburdwan.org/wp-json/wp/v2/media/${id}`
            );
            const img = await res.json();

            return img.source_url; 
          })
        );

        setImages(imgs);
      });

    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };

  }, []);


  return (
    <section className="gallery-area position-relative p-100" ref={sectionRef}>
      
      {/* BACKGROUND IMAGE */}
      <img src="/images/gallery-bg.png" alt="bg" className="gallery-bg" />

      <div className="container">
        
        <Swiper
          className="gallery-swiper"
          modules={[Autoplay]}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="slide-inner">
                <div className="swiper-box text-center">
                  <div className="swiper-pic">
                    <div className="gallery-content">
                      
                      <a
                        href={img}
                        data-fancybox="mygallery"
                        data-caption=""
                      >
                        <img src={img} alt="gallery" />
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default GalleryBox;