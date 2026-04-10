import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Banner() {
  const navigate = useNavigate();
  const bannerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = createTimeline(".banner-area");

      tl.from(".banner-content h1", {
        opacity: 0,
        x: -50,
        duration: 0.6,
      })
      .from(".banner-area .banner-content p", {
      opacity: 0,
      x: -50,
      duration: 0.5
    })
    .from(".banner-content button", {
        opacity: 0,
        x: -50,
        duration: 0.6,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="banner-area" ref={bannerRef}>
      <div className="container">
        <div className="banner-content">
          <h1>
            Building Futures Through <span>Learning & Fun</span>
          </h1>
          <p>
            Education is a key to success and freedom from all the forces is a power and makes a person powerful.where learning knows no bounds. Get the most out of my team's activities that create.
          </p>
          <button
            className="common-btn"
            onClick={() => navigate("/admissions")}
          >
            ENROLL NOW
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;