import { useState } from "react";

function AdmissionForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    dob: "",
    parentName: "",
    phone: "",
    program: "",
    source: "",
    message: "",
  });

  const steps = [
    {
      title: "Choose Your Program",
      desc: "Explore our diverse academic offerings and select a program that aligns with your child's interests.",
    },
    {
      title: "Check Eligibility Requirements",
      desc: "Ensure all admission criteria are met, including age guidelines and required documentation.",
    },
    {
      title: "Attend Interview or Assessment",
      desc: "Participate in a simple interaction or assessment.",
    },
    {
      title: "Receive Admission Decision",
      desc: "Get official confirmation and next steps.",
    },
  ];

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 👉 later send to API
  };

  return (
    <section className="admission-area p-100">
      <div className="container">
        <div className="row g-lg-5 gy-5 align-items-center">

          {/* LEFT: STEPS */}
          <div className="col-lg-6">
            <div className="admission-steps">

              <div className="title-box">
                <h3>
                  <span>
                    <img src="/images/title-line.png" alt="line" />
                  </span>{" "}
                  Admission Process
                </h3>
                <h4>Simple Steps to Get Started</h4>
              </div>

              <p className="desc">
                To begin your child's journey into being a citizen of tomorrow, please fill the form:
              </p>

              <div className="step-box d-flex flex-column">
                {steps.map((step, index) => (
                  <div
                    className={`step-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="step-number">{index + 1}</div>

                    <div className="step-content">
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="col-lg-6">
            <div className="admission-form">

              <form onSubmit={handleSubmit}>
                <div className="row gy-5">

                  <div className="col-md-6">
                    <label>Student's Name</label>
                    <input
                      type="text"
                      name="studentName"
                      className="form-control"
                      placeholder="Enter student name"
                      value={formData.studentName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dob"
                      className="form-control"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Parent's Name</label>
                    <input
                      type="text"
                      name="parentName"
                      className="form-control"
                      placeholder="Parent's Name"
                      value={formData.parentName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label>Select Program</label>
                    <select
                      name="program"
                      className="form-control"
                      value={formData.program}
                      onChange={handleChange}
                    >
                      <option value="">Select program</option>
                      <option>NURSERY</option>
                      <option>LKG</option>
                      <option>UKG</option>
                      <option>STD. I</option>
                      <option>STD. II</option>
                      <option>STD. III</option>
                      <option>STD. IV</option>
                      <option>STD. V</option>
                      <option>STD. VI</option>
                      <option>STD. VII</option>
                      <option>STD. VIII</option>
                      <option>STD. IX</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label>Select Source</label>
                    <select
                      name="source"
                      className="form-control"
                      value={formData.source}
                      onChange={handleChange}
                    >
                      <option value="">Select source</option>
                      <option>Sibling studying in school</option>
                      <option>Social Media</option>
                      <option>Referral</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label>Leave Message</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Enter your comment here..."
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <button className="common-btn" type="submit">
                      Submit Enquiry
                    </button>
                  </div>

                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AdmissionForm;