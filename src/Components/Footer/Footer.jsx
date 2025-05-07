import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top text-center text-white p-md-5">
          <div className="container">
            <div className="row gy-4">
              <div className="col-md-4">
                <h4>Location</h4>
                <p>Cairo El Moqqatem</p>
                <p>+201211476538</p>
              </div>
              <div className="col-md-4">
                <h4>AROUND THE WEB</h4>
                <ul className="list-unstyled d-flex justify-content-center">
                  <Link to={"https://www.facebook.com/adel.shokry3"}>
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                  <Link to={""}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                  <Link
                    to={"https://www.linkedin.com/in/adel-shokry-1ab1a1284/"}
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </Link>
                  <Link to={"www.github.com/adelshokry15"}>
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </ul>
              </div>
              <div className="col-md-4">
                <h4>ABOUT FREELANCER</h4>
                <p>
                  Crafting seamless, responsive front-end experiences that make
                  your brand stand out and captivate your audience.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center text-white py-3">
          <div className="container">
            <p className=" p-0 m-0">Copyright © Your Website 2021</p>
          </div>
        </div>
      </div>
    </>
  );
}
