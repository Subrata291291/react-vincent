import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function MembersFaculty() {
  const sectionRef = useRef(null);
    const navigate = useNavigate();
    const [faculty, setFaculty] = useState([]);
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    // FETCH API
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/faculty?_embed")
      .then(res => res.json())
      .then(data => {
        setFaculty(data);
        setLoading(false);
      });
    
    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".faculty-area");

      tl.from(".faculty-highlight", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".faculty-card", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="faculty-area p-100" ref={sectionRef}>
      <div className="container">
        <div className="row g-4">

          {/* LEFT BIG CARD */}
          <div className="col-lg-6">
            <div className="faculty-highlight position-relative">

              <img
                src="/images/mini-star.webp"
                className="mini-star-pic position-absolute"
                alt="star"
              />

              <img
                src="/images/star4.png"
                className="star-pic position-absolute"
                alt="star"
              />

              <h2>
                Our Most <br /> Experience Faculties
              </h2>

              <button
                className="common-btn mt-5"
                onClick={() => navigate("/jobopportunity")}
              >
                Become An Instructor
              </button>

            </div>
          </div>

          {/* RIGHT + BOTTOM CARDS */}
          {faculty.map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="faculty-card position-relative">

                <img
                  src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url} alt=""
                />

                <div className="faculty-info">
                  <h5>{item.title.rendered}</h5>
                  <span>{item.acf?.designation}</span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default MembersFaculty;