import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    agree: false,
  });

  const contactCards = [
    {
      icon: "ri-phone-line",
      color: "green",
      title: "Call Us",
      desc: "Any time for enquiry.",
      link: "tel:8145730807",
      text: "(+91) 8145 730 807",
    },
    {
      icon: "ri-mail-line",
      color: "yellow",
      title: "Official Email",
      desc: "Email us for any queries",
      link: "mailto:svacbseburdwan@gmail.com",
      text: "svacbseburdwan@gmail.com",
    },
    {
      icon: "ri-map-pin-line",
      color: "purple",
      title: "Our Location",
      desc: "Visit us today!",
      text: "P.O. Joteram, Burdwan -713104",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept privacy policy");
      return;
    }

    console.log(formData); // 👉 send to API later
  };

  return (
    <section className="contact-details p-100">
      <div className="container">

        {/* CONTACT CARDS */}
        <div className="row g-4 mb-5">
          {contactCards.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="contact-card">

                <div className={`icon ${item.color}`}>
                  <i className={item.icon}></i>
                </div>

                <h5>{item.title}</h5>
                <p>{item.desc}</p>

                {item.link ? (
                  <a href={item.link}>{item.text}</a>
                ) : (
                  <span>{item.text}</span>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* GOOGLE MAP */}
        <div className="map-area">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1833.3574362788831!2d87.92198674861758!3d23.21705944625137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849d02e95558d%3A0xd017d12ae4ee69b6!2sVincent%20Arena%20Sports%20Turf%20Burdwan!5e0!3m2!1sen!2sin!4v1775371503455!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
            title="map"
          ></iframe>
        </div>

        {/* FORM */}
        <div className="contact-form-wrapper">
          <h2>Get in Touch</h2>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">

              {/* NAME */}
              <div className="col-md-6">
                <div className="input-group custom-input">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <span><i className="ri-user-line"></i></span>
                </div>
              </div>

              {/* EMAIL */}
              <div className="col-md-6">
                <div className="input-group custom-input">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span><i className="ri-mail-line"></i></span>
                </div>
              </div>

              {/* PHONE */}
              <div className="col-md-6">
                <div className="input-group custom-input">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <span><i className="ri-phone-line"></i></span>
                </div>
              </div>

              {/* SUBJECT */}
              <div className="col-md-6">
                <div className="input-group custom-input">
                  <select
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select Subject</option>
                    <option>Admission</option>
                    <option>Fees</option>
                    <option>General Query</option>
                  </select>
                  <span className="dropdown-icon">
                    <i className="ri-arrow-down-s-line"></i>
                  </span>
                </div>
              </div>

              {/* MESSAGE */}
              <div className="col-12">
                <div className="input-group custom-input textarea">
                  <textarea
                    name="message"
                    placeholder="Write Message...."
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <span><i className="ri-edit-line"></i></span>
                </div>
              </div>

              {/* CHECKBOX */}
              <div className="col-12">
                <div className="form-check mt-3 mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                  />
                  <label>I agree with the privacy policy</label>
                </div>
              </div>

              {/* BUTTON */}
              <div className="col-12 mt-5">
                <button className="common-btn" type="submit">
                  SEND MESSAGE <i className="ri-send-plane-line"></i>
                </button>
              </div>

            </div>
          </form>

        </div>

      </div>
    </section>
  );
}

export default ContactForm;