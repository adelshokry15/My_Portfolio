import React from "react";
import avatar from "../../assets/images/avataaars.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="home-body home-bg text-white mt-5">
        <div className="container">
          <div className="min-vh-100 d-flex justify-content-center align-items-center">
            <div className="hero text-center">
              <img className="mb-5" src={avatar} alt="" />
              <a target="_blank" style={{color:"#2c3e50"}} className="mb-4 text-decoration-none h5 fw-bold" href="https://drive.google.com/file/d/1SlHsz9iBYVAa6WUYC9qUGvuv9W98gYuu/view?usp=drive_link" download>
                <p>View CV</p>
              </a>
              <h3 className="fs-1 fw-bold position-relative mb-5">
                Eng.ADEL SHOKRY
                <span className="home-bg d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </h3>

              <p>Front End - Web Developer - Back End</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
