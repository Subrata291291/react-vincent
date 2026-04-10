import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function JobBox() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  fetch("https://stvincentcbseburdwan.org/wp-json/wp/v2/jobs")
    .then(res => res.json())
    .then(data => {
      setJobs(data);
      setLoading(false);
    });
}, []);

  return (
    <section className="job-listing-area p-100">
      <div className="container">
        <div className="job-box">

          {jobs.map((job) => (
            <div
              className="job-card d-flex align-items-center justify-content-lg-between"
              key={job.id}
            >
              {/* LEFT */}
              <div className="d-flex align-items-center gap-3 job-left">
                <div className="job-logo">
                  <img src="/images/logo.png" alt="logo" />
                </div>

                <div>
                  <h6 className="job-title mb-1">
                    {job.title.rendered}
                  </h6>

                  <div className="job-meta">
                    <span className="job-type">
                      {job.acf?.job_type}
                    </span>
                    <span>
                      <i className="ri-time-line"></i> {job.acf?.job_time}
                    </span>
                  </div>
                </div>
              </div>

              {/* MIDDLE */}
              <div className="job-middle d-flex align-items-center gap-5">
                <div className="job-location">
                  <i className="ri-map-pin-line"></i> {job.acf?.job_location}
                </div>

                <div className="job-salary">
                  {job.acf?.job_salary}
                </div>
              </div>

              {/* RIGHT */}
              <div className="job-right d-flex align-items-center gap-3">
                <button className="bookmark-btn">
                  <i className="ri-bookmark-line"></i>
                </button>

                <button
                  className="common-btn"
                  onClick={() => navigate(`/job-details/${job.id}`)}
                >
                  APPLY NOW
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default JobBox;