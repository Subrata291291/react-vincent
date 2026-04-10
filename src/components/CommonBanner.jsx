import { Link } from "react-router-dom";

function CommonBanner({ title, current }) {
  return (
    <section className="common-banner text-center position-relative">
      
      {/* TITLE */}
      <h2>{title}</h2>

      {/* BREADCRUMB */}
      <ul className="d-flex justify-content-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>//</li>
        <li className="active">
          <span>{current}</span>
        </li>
      </ul>

      {/* SHAPE */}
      <img
        src="/images/section-notch-top.png"
        alt="shape"
        className="commpon-shape-pic position-absolute"
      />

      {/* OPTIONAL */}
      {/* <img src="/images/sun.png" alt="sun" className="sun-pic position-absolute" /> */}

    </section>
  );
}

export default CommonBanner;