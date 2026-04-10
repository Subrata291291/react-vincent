import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Awards() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    // FETCH API
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/posts?categories=6&_embed")
      .then(res => res.json())
      .then(data => {
        setAwards(data);
        setLoading(false);
      });

    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".award-area");

      tl.from(".award-area .title-box", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".award-area .swiper-box", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
      });

      // Floating cap animation
      gsap.from(".cap-pic", {
        scrollTrigger: {
          trigger: ".award-area",
          start: "top 80%",
        },
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="award-area p-100 position-relative" ref={sectionRef}>
      
      {/* FLOATING IMAGE */}
      <img src="/images/cap.png" alt="cap" className="cap-pic" />

      <div className="container">
        
        {/* TITLE */}
        <div className="title-box">
          <h3>
            <span>
              <img src="/images/title-line.png" alt="line" />
            </span>{" "}
            AWARDS AND ACHIEVEMENTS
          </h3>
          <h4>
            Honouring milestones that reflect our commitment to quality and growth.
          </h4>
        </div>

        {/* SWIPER */}
        <Swiper
          className="award-swiper"
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
            1200: { slidesPerView: 4 },
          }}
        >
          {awards.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-inner">
                <div className="swiper-box">

                  <div className="swiper-pic">
                    <img
                      src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                      alt=""
                    />
                  </div>

                  <div className="swiper-content">
                    <h3>{item.title.rendered}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.content.rendered }} />

                    <ul className="d-flex gx-2a">
                      <li>
                        <span>
                          By <a href="#">{item._embedded?.author?.[0]?.name}</a>
                        </span>
                      </li>
                      <li>|</li>
                      <li>
                        <span>{new Date(item.date).toLocaleDateString()}</span>
                      </li>
                    </ul>
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

export default Awards;