import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { createTimeline } from "../utils/animations";
import { gsap } from "../utils/gsap";

function MessageChairman() {
  const sectionRef = useRef(null);

  const messages = [
    {
      name: "Mr. Sanjay Kr. Gupta",
      text: `St. Vincent's Academy, a school with a difference which is missioned to impart excellence in our students. As you peruse this prospectus, you will discover the diverse programs, exceptional faculty, and vibrant community that define our institution. The ideology of our institution is the distinguishing factor.`,
      note: "We are confident that our school will continue to rise higher, and we are grateful for the constant support.",
      email: "svaburdwan@gmail.com",
      phone: "(+91) 8145 730 807",
    },
    {
      name: "Mr. Sanjay Kr. Gupta",
      text: `St. Vincent's Academy, a school with a difference which is missioned to impart excellence in our students. We continue to create a nurturing atmosphere for enriching our students.`,
      note: "We are confident that our school will continue to rise higher, and we are grateful for the constant support.",
      email: "svaburdwan@gmail.com",
      phone: "(+91) 8145 730 807",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = createTimeline(".chairman-message-area");

      tl.from(".chairman-pic", {
        x: -80,
        opacity: 0,
        duration: 1,
      }).from(".chairman-content", {
        x: 80,
        opacity: 0,
        duration: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="chairman-message-area p-100" ref={sectionRef}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-center">

          {/* LEFT IMAGE */}
          <div className="col-lg-5">
            <div className="chairman-pic">
              <img src="/images/chairman.webp" alt="chairman" />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7">
            <div className="chairman-content">

              <Swiper
                className="chairman-swiper"
                modules={[Pagination]}
                loop={true}
                speed={800}
                direction="horizontal" // default (mobile)

                breakpoints={{
                    768: {
                    direction: "vertical",
                    },
                }}

                pagination={{
                    clickable: true,
                }}
                >
                {messages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="cm-content">

                      <div className="quote-icon">
                        <i className="ri-double-quotes-r"></i>
                      </div>

                      <h3>{item.name}</h3>

                      <p>“{item.text}”</p>

                      <ul className="d-flex note-area">
                        <li>
                          <img src="/images/feat-icon-3.webp" alt="icon" />
                        </li>
                        <li>
                          <h4>{item.note}</h4>
                        </li>
                      </ul>

                      <ul className="mail-areas">
                        <li>
                          <p>
                            <a
                              className="email"
                              href={`mailto:${item.email}`}
                            >
                              <span>Email:</span> {item.email}
                            </a>
                          </p>
                        </li>
                        <li>
                          <p>
                            <a
                              className="phone"
                              href={`tel:${item.phone}`}
                            >
                              <span>Phone:</span> {item.phone}
                            </a>
                          </p>
                        </li>
                      </ul>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MessageChairman;