import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Programs() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // FETCH API
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/programs")
      .then(res => res.json())
      .then(data => {
        setPrograms(data);
        setLoading(false);
      });
    
    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".program-area");

      tl.from(".program-area .title-box", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".program-area .swiper-box", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
      });

      // Floating boy animation
      gsap.from(".program-boy", {
        scrollTrigger: {
          trigger: ".program-area",
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
      className="program-area p-100 position-relative"
      ref={sectionRef}
    >
      {/* FLOATING IMAGE */}
      <img src="/images/boy-sky.png" alt="boy" className="program-boy" />

      <div className="container">
        {/* TITLE */}
        <div className="title-box">
          <h3>
            <span>
              <img src="/images/title-line.png" alt="line" />
            </span>{" "}
            OUR PROGRAMS
          </h3>
          <h4>Discover our special education program</h4>
        </div>

        {/* SWIPER */}
        <Swiper
          className="program-swiper"
          modules={[Autoplay]}
          loop={true}
          speed={7000}
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
          {programs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="slide-inner">
                <div className="swiper-box text-center">

                  {/* IMAGE */}
                  <div className="swiper-pic">
                    <img src={item.acf?.program_image?.url} alt="" />
                  </div>

                  {/* CONTENT */}
                  <div className="swiper-content">
                    <h3>{item.title.rendered}</h3>

                    <h4>{item.acf?.program_age}</h4>

                    <p>{item.acf?.program_description}</p>

                    <button
                      className="program-btn"
                      onClick={() => navigate("/admissions")}
                    >
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

export default Programs;