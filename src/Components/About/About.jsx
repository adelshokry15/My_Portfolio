import React from "react";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <>
      <div className="about text-white mt-5">
        <div className="container">
          <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="about-body text-center">
              <h3 className="fs-1 fw-bold position-relative mb-5">
                ABOUT ME
                <span className="home-bg d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h3>
              <div className="row px-md-5">
                <div className="col-md-6 mb-3 mb-md-0">
                  As a passionate frontend developer, I specialize in building dynamic and user-friendly websites that deliver exceptional experiences. With extensive experience in Next.js React.js, JavaScript, and CSS frameworks like Bootstrap and Tailwind CSS, I bring your ideas to life with modern, responsive design.
                </div>
                <div className="col-md-6">
                  I focus on clean, maintainable code and ensure that every project is tailored to the specific needs of the client. Whether it's crafting custom components, optimizing page performance, or integrating with APIs, my goal is to create websites that are not only visually appealing but also intuitive and easy to use.
                </div>
              </div>
              <div className="mt-4">
                <h4 className="fw-bold">Why Work With Me?</h4>
                <p>
                  - Responsive Design: I ensure that your site looks great on all devices.<br />
                  - Speed and Optimization: Fast loading times for a seamless experience.<br />
                  - User-Centered Development: I prioritize user experience in every project.<br />
                  - Proven Expertise: Strong track record in React, JavaScript, and modern web tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
