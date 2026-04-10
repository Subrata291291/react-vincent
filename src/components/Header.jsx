import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

function Header() {
  const navigate = useNavigate();
   const [notices, setNotices] = useState([]);

  useEffect(() => {
  fetch("http://localhost/vincent-academy/wp-json/wp/v2/posts?categories=12&_embed")
    .then(res => res.json())
    .then(async (data) => {

      const formatted = await Promise.all(
        data.map(async (item) => {

          let pdfUrl = "";

          if (item.acf?.notice_pdf) {
            const mediaRes = await fetch(
              `http://localhost/vincent-academy/wp-json/wp/v2/media/${item.acf.notice_pdf}`
            );
            const mediaData = await mediaRes.json();
            pdfUrl = mediaData.source_url;
          }

          return {
            title: item.title.rendered,
            date: new Date(item.date).toLocaleDateString(),
            image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/notice.webp",
            pdf: pdfUrl
          };
        })
      );

      setNotices(formatted);
    });
}, []);


  return (
    <section className="header-area">
      <nav className="navbar navbar-expand-lg p-0">
        <div className="container">

          {/* LOGO */}
          <Link className="navbar-brand" to="/">
            <img 
              src="https://stvincentcbseburdwan.org/wp-content/uploads/2026/04/logo.png"
              alt="Logo" 
              className="sidebar-logo mb-3" 
            />
          </Link>

          {/* MENU */}
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>

              {/* OUR SCHOOL */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Our School
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/our-vision">Vission</Link></li>
                  <li><Link className="dropdown-item" to="/ManagingCommittee">Managing Commitee</Link></li>
                  <li><Link className="dropdown-item" to="/ChairmanMessage">Chairperson's Message</Link></li>
                  <li><Link className="dropdown-item" to="/infrastructure">Infrastructure</Link></li>
                  <li><Link className="dropdown-item" to="/FacultyMembers">Faculty Members</Link></li>
                  <li><Link className="dropdown-item" to="/CounsellorSpecialEducator">Counsellor & Special Educator</Link></li>
                  <li><Link className="dropdown-item" to="/AwardsAchievements">Awards & Achievements</Link></li>
                  <li><Link className="dropdown-item" to="/SchoolHouseSystem">School House System</Link></li>
                  <li><Link className="dropdown-item" to="/StudentCouncil">School Council</Link></li>
                  <li><Link className="dropdown-item" to="/AnnualCalendar">Annual Calendar</Link></li>
                </ul>
              </li>

              {/* SCHOLASTIC */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Scholastic & Co-Scholastic
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/scholastic">Scholastic</Link></li>
                  <li><Link className="dropdown-item" to="/co-scholastic">Co-Scholastic</Link></li>
                  <li><Link className="dropdown-item" to="/activities">Activities</Link></li>
                  <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                  <li><Link className="dropdown-item" to="/JobOpportunity">Job Opportunity</Link></li>
                </ul>
              </li>

              {/* DISCLOSURES */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Mandatory Disclosures
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/noc">NOC</Link></li>
                  <li><Link className="dropdown-item" to="/affiliation">Affiliation</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/admissions">Admissions</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>

            </ul>
          </div>

          {/* DESKTOP SIDEBAR BUTTON */}
          <div className="sidenav-desk sidenav d-none d-lg-block">
            <button
              className="sidenav-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
            >
              <i class="ri-menu-3-line"></i>
            </button>
          </div>

          {/* MOBILE SIDEBAR BUTTON */}
          <div className="sidenav-mb sidenav d-lg-none">
            <button
              className="sidenav-btn"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasMobile"
            >
              <i className="ri-menu-3-line"></i>
            </button>
          </div>

        </div>
      </nav>

      {/* DESKTOP OFFCANVAS */}
      <div className="offcanvas offcanvas-end" id="offcanvasRight">
          <div className="offcanvas-header">
            <h5></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="sidebar-content">
              <div className="sidebar-top">
                <img 
                  src="https://stvincentcbseburdwan.org/wp-content/uploads/2026/04/logo.png"
                  alt="Logo" 
                  className="sidebar-logo mb-3" 
                />
                <h3 className="brand-name">St. Vincent's Academy</h3>
                <p className="brand-sub mt-2">Jotram, Bardhaman, West Bengal 713104</p>
                <p className="sidebar-desc">
                  University education is the foundation for shaping skilled, knowledgeable, and responsible individuals who contribute meaningfully to society.
                </p>
                <button
                  className="common-btn"
                  onClick={() => navigate("/admissions")}
                >
                  Enroll Now <i className="ri-arrow-right-line"></i>
                </button>
              </div>
              <div className="recent-posts">
                <h4>Recent Notices</h4>
                <div className="divider"></div>

                <Swiper
                  className="recent-posts-slider"
                  modules={[Autoplay]}
                  direction="vertical"
                  slidesPerView={4}
                  spaceBetween={10}
                  loop={true}
                  speed={800}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                >
                  {notices.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="post-item d-flex" style={{ cursor: "pointer" }} onClick={() => {
                        if (item.pdf) {
                          window.open(item.pdf, "_blank");
                        }
                      }}>
                        <img src={item.image} alt="notice" />
                        <div>
                          <h6 dangerouslySetInnerHTML={{ __html: item.title }} />
                          <span>
                            <i className="ri-calendar-line"></i> {item.date}
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
      </div>
      {/* MOBILE OFFCANVAS */}
      <div className="offcanvas offcanvas-end" id="offcanvasMobile">
        <div class="offcanvas-header">
          <h5></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
        <div className="offcanvas-body">

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/admissions">Admissions</Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                Our School
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/our-vision">Vision</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

        </div>
      </div>

    </section>
  );
}

export default Header;