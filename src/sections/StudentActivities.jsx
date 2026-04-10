import { useEffect, useRef, useState } from "react";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function StudentActivities() {
  const sectionRef = useRef(null);

  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // FETCH API
    fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/activities")
      .then(res => res.json())
      .then(data => {
        setActivity(data);
        setLoading(false);
      });

    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".activity-area");

      tl.from(".activity-area .title-box", {
        opacity: 0,
        x: -50,
        duration: 0.5,
      }).from(".activity-area .activity-box", {
        opacity: 0,
        y: -50,
        duration: 0.5,
        stagger: 0.2,
      });

      gsap.from(".activity-boy", {
        scrollTrigger: {
          trigger: ".activity-area",
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

  if (loading) {
    return <h2 style={{ padding: "100px" }}>Loading...</h2>;
  }

  return (
    <section className="activity-area mt-100 position-relative" ref={sectionRef}>
      <div className="container">

        {/* TITLE */}
        <div className="title-box">
          <h3>
            <span>
              <img src="/images/title-line.png" alt="line" />
            </span>
            OUR ACTIVITIES
          </h3>
          <h4>
            Empowering learning through engaging educational activities
          </h4>
        </div>

        {/* ACTIVITIES */}
        <div className="row">
          {activity.map((item) => (
            <div className="col-md-6 col-lg-3" key={item.id}>
              <div className="activity-box">

                <h3>{item.title.rendered}</h3>

                {/* IMAGE */}
                {item.acf?.image?.url && (
                  <img src={item.acf.image.url} alt="" />
                )}

                {/* DESCRIPTION */}
                <p>{item.acf?.description}</p>

              </div>
            </div>
          ))}
        </div>

      </div>

      <img
        src="/images/perasute.png"
        alt="activity"
        className="activity-boy position-absolute"
      />
    </section>
  );
}

export default StudentActivities;