import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

export default function NavBar() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector(".navbar").classList.replace("py-4", "py-2");
    } else {
      document.querySelector(".navbar").classList.replace("py-2", "py-4");
    }
  });

  function putActive(e) {
    console.log(Array.from(document.querySelectorAll("nav-link")));
    Array.from(document.querySelectorAll(".nav-link")).map((e) => {
      e.classList.remove("active");
    });
    e.target.classList.add("active");
  }
  function removeAllActive() {
    Array.from(document.querySelectorAll(".nav-link")).map((e) => {
      e.classList.remove("active");
    });
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg text-white py-4">
        <div className="container">
          <Link
            onClick={removeAllActive}
            className="navbar-brand text-white fw-bolder fs-2"
            to={""}
          >
            PORTFOLIO
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  onClick={(e) => {
                    putActive(e);
                  }}
                  className="nav-link fw-bolder text-white px-4 py-3"
                  aria-current="page"
                  to={"about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={(e) => {
                    putActive(e);
                  }}
                  className="nav-link fw-bolder text-white px-4 py-3"
                  to={"portfolio"}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={(e) => {
                    putActive(e);
                  }}
                  className="nav-link fw-bolder text-white px-4 py-3"
                  to={"contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
