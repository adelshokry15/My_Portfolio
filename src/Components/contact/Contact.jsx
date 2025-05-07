import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // success | error | loading

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        () => {
          setStatus("error");
        }
      );
  };

  return (
    <div className="contact text-center pt-5 mt-5 pb-5">
      <div className="container">
        <h3 className="fs-1 fw-bold position-relative mb-5 mt-4">
          CONTACT ME
          <span className="bg-white d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
            <FontAwesomeIcon icon={faStar} />
          </span>
        </h3>
        <div className=" text-capitalize h6 mb-4">your message will be sent to me via emailJS or <br /> you can directly contact me on my number that provided here in the footer</div>
        <form ref={form} onSubmit={sendEmail} className="row gy-4 justify-content-center">
          <div className="col-md-8">
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="form-control py-3"
              required
            />
          </div>
          <div className="col-md-8">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message Should Contain Your Name And What Do You Want To Do"
              className="form-control"
              required
            />
          </div>
          <div className="col-md-8 text-start">
            <button type="submit" className="btn btn-primary px-4 py-2">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-success mt-3">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-danger mt-3">Failed to send message. Try again later.</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
