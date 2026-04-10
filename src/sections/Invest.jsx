import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function Invest() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: "ri-computer-line",
      color: "orange",
      value: "20K",
      label: "Running Students",
    },
    {
      icon: "ri-book-open-line",
      color: "pink",
      value: "13K",
      label: "Completed",
    },
    {
      icon: "ri-award-line",
      color: "green",
      value: "3K",
      label: "Award Winning",
    },
    {
      icon: "ri-book-line",
      color: "teal",
      value: "13K",
      label: "Guardian Satisfaction",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = createTimeline(".invest-area");

      tl.from(".invest-left", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".invest-right", {
        x: 80,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="invest-area p-100" ref={sectionRef}>
      <div className="container">
        <div className="row">

          {/* LEFT */}
          <div className="col-lg-6">
            <div className="invest-left">

              <div className="title-box">
                <h3>
                  <span>
                    <img src="/images/title-line.png" alt="line" />
                  </span>{" "}
                  Number talks
                </h3>
                <h4>Invest in education invest in the future</h4>
              </div>

              <p>
                Education is the foundation of a brighter and more progressive future.
                By investing in quality learning, we empower individuals with knowledge,
                skills, and values that shape both personal growth and society.
              </p>

              <button
                className="common-btn"
                onClick={() => navigate("/admissions")}
              >
                Enroll Now{" "}
                <span>
                  <i className="ri-arrow-right-circle-line"></i>
                </span>
              </button>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6">
            <div className="invest-right">
              <div className="row g-4">

                {stats.map((item, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="stat-box">

                      <div className={`icon ${item.color}`}>
                        <i className={item.icon}></i>
                      </div>

                      <div className="content">
                        <h3>{item.value}</h3>
                        <p>{item.label}</p>
                      </div>

                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Invest;