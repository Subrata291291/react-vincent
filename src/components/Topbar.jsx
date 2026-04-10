function Topbar() {
  return (
    <section className="topbar-area">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <div className="col-lg-12 col-xl-9 d-none d-lg-block">
            <div className="topbar-left">
              <ul className="d-flex">

                <li>
                  <p>
                    <span>
                      <i className="ri-time-line"></i>
                    </span>{" "}
                    School Hours: 8.00 am - 4.00 pm
                  </p>
                </li>

                <li>|</li>

                <li>
                  <p>
                    <a href="tel:8145730807">
                      <span>
                        <i className="ri-phone-line"></i>
                      </span>{" "}
                      (+91) 8145 730 807
                    </a>
                  </p>
                </li>

                <li>|</li>

                <li>
                  <p>
                    <a href="mailto:svacbseburdwan@gmail.com">
                      <span>
                        <i className="ri-mail-line"></i>
                      </span>{" "}
                      svacbseburdwan@gmail.com
                    </a>
                  </p>
                </li>

              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-3 col-xl-3 d-lg-none d-xl-block">
            <div className="topbar-right">
              <div className="marquee">
                <p>25 Jan, 25 | PARENTS TEACHER MEETING</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Topbar;