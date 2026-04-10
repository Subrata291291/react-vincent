import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Advisors() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [advisors, setAdvisors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FETCH API
    fetch("https://stvincentcbseburdwan.org//wp-json/wp/v2/advisors?_embed")
      .then(res => res.json())
      .then(data => {
        setAdvisors(data);
        setLoading(false);
      });
    
    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".advisor-area");

      tl.from(".advisor-area .title-box", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".advisor-area .swiper-box", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
      });

      // Floating tree animation
      gsap.from(".advisor-tree", {
        scrollTrigger: {
          trigger: ".advisor-area",
          start: "top 80%",
        },
        opacity: 0,
        y: -100,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="advisor-area p-100 position-relative"
      ref={sectionRef}
    >
      {/* FLOATING IMAGE */}
      <img src="/images/flower.png" alt="tree" className="advisor-tree" />

      <div className="container">
        {/* TITLE */}
        <div className="title-box">
          <h3>
            <span>
              <img src="/images/title-line.png" alt="line" />
            </span>{" "}
            MEET THE PROFESSIONALS
          </h3>
          <h4>Meet the talented advisor from our institute</h4>
        </div>

        {/* SWIPER */}
        <Swiper
          className="advisor-swiper"
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
          {advisors.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-inner">
                <div className="swiper-box text-center">
                  
                  <div className="swiper-pic">
                    <img
                      src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                      alt=""
                    />
                  </div>

                  <div className="swiper-content">
                    <h3>{item.title.rendered}</h3>
                    <h4>{item.acf?.designation}</h4>
                    <p>
                      <span>Email:</span> {item.acf?.email}
                    </p>
                    <p>
                      <span>Phone:</span> {item.acf?.phone}
                    </p>
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

export default Advisors;