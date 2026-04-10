import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Vision() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = createTimeline(".vision-area");

      tl.from(".vision-left", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".vission-right", {
        x: 80,
        opacity: 0,
        duration: 1,
      });

      // Butterfly animation
      gsap.from(".butterfly-pic", {
        scrollTrigger: {
          trigger: ".vision-area",
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
    <section className="vision-area p-100 position-relative" ref={sectionRef}>
      
      {/* FLOATING IMAGE */}
      <img
        src="/images/butarfly.png"
        alt="butterfly"
        className="position-absolute butterfly-pic"
      />

      <div className="container">
        <div className="row align-items-center gx-lg-5">

          {/* LEFT */}
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="vision-left">

              {/* TITLE */}
              <div className="title-box">
                <h3>
                  <span>
                    <img src="/images/title-line.png" alt="line" />
                  </span>{" "}
                  About us
                </h3>
                <h4>
                  let us know about our reading and cultural activities
                </h4>
              </div>

              <p>
                St. Vincent's Academy, Purba Bardhaman owned by Krishnam Foundation,
                founded in 2023, chaired by Chairman Mr. Sanjay Kumar Gupta.
              </p>

              {/* VISION / MISSION */}
              <div className="vision-box">

                <ul className="d-md-flex align-items-stretch">
                  <li>
                    <i className="ri-goggles-line"></i>
                  </li>
                  <li>
                    <h4>Our Vision</h4>
                    <p>
                      The institution strives to develop those qualities that will
                      make them global citizens seeking for innovative changes.
                    </p>
                  </li>
                </ul>

                <ul className="d-md-flex mt-5 align-items-stretch">
                  <li>
                    <i className="ri-focus-2-line"></i>
                  </li>
                  <li>
                    <h4>Our Mission</h4>
                    <p>
                      Our education system sustains strong moral values like respect,
                      honesty, compassion and global citizenship.
                    </p>
                  </li>
                </ul>

              </div>

              {/* BUTTON */}
              <button
                className="common-btn"
                onClick={() => navigate("/admissions")}
              >
                Admission open{" "}
                <span>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="vission-right">
              <img src="/images/about-right.png" alt="vision" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Vision;