import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function About() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = createTimeline(".about-area");

      tl.from(".about-left", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".about-right", {
        x: 80,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-area p-100" ref={sectionRef}>
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-md-5">
            <div className="about-left">
              <img src="/images/about-pic.png" alt="about" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-md-7">
            <div className="about-right">

              {/* TITLE */}
              <div className="title-box">
                <h3>
                  <span>
                    <img src="/images/title-line.png" alt="line" />
                  </span>{" "}
                  about us
                </h3>
                <h4>It's our passion to work with students.</h4>
              </div>

              {/* STATS */}
              <div className="row align-items-center">
                <div className="col-8">
                  <div className="about-box">
                    <ul className="d-flex">
                      <li>
                        <h3>250K</h3>
                        <p>Learners & Counting</p>
                      </li>
                      <li>
                        <h3>20+</h3>
                        <p>Children Activities</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-4">
                  <div className="about-pic">
                    <img src="/images/about-circle.png" alt="circle" />
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <p className="about-content">
                St. Vincent's Academy, Purba Bardhaman owned by Krishnam Foundation,
                founded in 2023, chaired by Chairman Mr. Sanjay Kumar Gupta.
              </p>

              {/* BUTTON */}
              <button
                className="common-btn"
                onClick={() => navigate("/our-vision")}
              >
                Explore more{" "}
                <span>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;