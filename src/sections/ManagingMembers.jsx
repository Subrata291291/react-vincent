import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function ManagingMembers() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // FETCH API
    fetch("https://stvincentcbseburdwan.org//wp-json/wp/v2/advisors?_embed")
      .then(res => res.json())
      .then(data => {
        setMembers(data);
        setLoading(false);
      });
    
    // GSAP
    const ctx = gsap.context(() => {
      const tl = createTimeline(".faculty-area");

      tl.from(".faculty-card", {
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="faculty-area managing-commitee p-100"
      ref={sectionRef}
    >
      <div className="container">
        <div className="row g-4">

          {members.map((item) => (
            <div className="col-lg-3 col-md-6" key={item.id}>
              <div className="faculty-card">

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

export default ManagingMembers;