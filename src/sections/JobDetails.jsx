import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommonBanner from "../components/CommonBanner";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    file: null,
  });

  // FETCH DATA FROM WORDPRESS
  useEffect(() => {
    fetch(`https://stvincentcbseburdwan.org/wp-json/wp/v2/jobs/${id}`)
      .then(res => res.json())
      .then(data => {
        setJob(data);
        setLoading(false);
      })
      .catch(err => console.log(err));
  }, [id]);

  // FORM HANDLER
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // LOADING STATE
  if (loading) {
    return <h2 style={{ padding: "100px" }}>Loading...</h2>;
  }

  if (!job) {
    return <h2 style={{ padding: "100px" }}>Job not found</h2>;
  }

  // ACF DATA
  const acf = job.acf || {};

  return (
    <>
      <CommonBanner title={job.title.rendered} current={job.title.rendered} />

      <section className="job-details-area p-100">
        <div className="container">
          <div className="row g-4">

            {/* LEFT */}
            <div className="col-lg-4">
              <div className="job-sidebar position-sticky top-0">

                <div className="company-logo mb-3">
                  <img src="/images/logo.png" alt="logo" />
                </div>

                <h5 className="job-title">{job.title.rendered}</h5>

                <p className="job-short">{acf.job_description}</p>

                <div className="job-meta mt-5">
                  <p><i className="ri-time-line"></i> {acf.job_time}</p>
                  <p><i className="ri-map-pin-line"></i> {acf.job_location}</p>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-8">
              <div className="job-content">

                <h6 className="section-title mb-4">Job Information:</h6>

                <div className="job-info-grid">
                  <p><span>Type:</span> {acf.job_type}</p>
                  <p><span>Salary:</span> {acf.job_salary}</p>
                  <p><span>Experience:</span> {acf.experience}</p>
                  <p><span>Qualification:</span> {acf.qualification}</p>
                </div>

                {/* DESCRIPTION */}
                <h6 className="section-title mb-3">Job Description:</h6>
                <p className="desc">{acf.job_description}</p>

                {/* RESPONSIBILITIES */}
                <div className="responsiblity-box">
                  <h6 className="section-title mb-3">Responsibilities:</h6>
                  <ul className="job-list">
                    {acf.responsibilities?.map((item, i) => (
                      <li key={i}>
                        <span><i className="ri-check-line"></i></span> {item.item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SKILLS */}
                <div className="skill-box">
                  <h6 className="section-title mb-3">Skills:</h6>
                  <ul className="job-list">
                    {acf.skills?.map((item, i) => (
                      <li key={i}>
                        <span><i className="ri-check-line"></i></span> {item.item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BUTTON */}
                <button
                  className="common-btn mt-5"
                  onClick={() => setShowModal(true)}
                >
                  APPLY NOW
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL (same as your code) */}
      <div className={`modal fade ${showModal ? "show d-block" : ""}`}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content job-modal">
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
            ></button>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Full Name</label>
                  <input type="text" name="name" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input type="email" name="email" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Phone</label>
                  <input type="tel" name="phone" className="form-control" onChange={handleChange} />
                </div>
                <div className="mb-3">
                  <label>Upload CV</label>
                  <input type="file" name="file" className="form-control" onChange={handleChange} />
                </div>
                <button className="common-btn w-100 mt-5">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
}

export default JobDetails;