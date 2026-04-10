import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Events() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // FETCH API
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/posts?categories=7&_embed")
      .then(res => res.json())
      .then(data => {
        setEvents(data);
        setLoading(false);
      });

    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".events-area");

      tl.from(".events-area .title-box", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".events-area .swiper-box", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="events-area p-100 position-relative" ref={sectionRef}>
      <div className="container">

        {/* TITLE */}
        <div className="title-box">
          <h3>
            <span>
              <img src="/images/title-line.png" alt="line" />
            </span>{" "}
            LATEST EVENTS
          </h3>
          <h4>Insights, updates, and stories from our latest work</h4>
        </div>

        {/* SWIPER */}
        <Swiper
          className="events-swiper"
          modules={[Autoplay]}
          loop={true}
          speed={4000} 
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {events.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-inner">
                <div className="swiper-box">

                  <div className="swiper-pic">
                    <img
                      src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                      alt=""
                    />
                    <span>{item._embedded?.["wp:term"]?.[0]?.[0]?.name}</span>
                  </div>

                  <div className="swiper-content">
                    <h3>{item.title.rendered}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content.rendered }} />

                    <h5>
                      <span>
                        <i className="ri-time-line"></i>
                      </span>{" "}
                      {new Date(item.date).toLocaleDateString()}
                    </h5>

                    <button className="events-btn">
                      <i className="ri-arrow-right-up-line"></i>
                    </button>
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

export default Events;