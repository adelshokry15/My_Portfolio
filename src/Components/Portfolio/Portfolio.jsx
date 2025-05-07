import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faL,
  faStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import dashboardImg from "../../assets/images/dash.png";
import freshcartImg from "../../assets/images/freshcart.png";
import gamesImg from "../../assets/images/game.png";
import foodImg from "../../assets/images/yummy.png";
import stImg from "../../assets/images/st.png";
import moviesImg from "../../assets/images/mo.png";
import "./Portfolio.css";

const imagesList = [
  {
    id: 1,
    src: dashboardImg,
    alt: "Dashboard Website",
    link: "https://adelshokry15.github.io/dashboard/",
  },
  {
    id: 2,
    src: freshcartImg,
    alt: "FreshCart Website",
    link: "https://adelshokry15.github.io/E-Commerce-FreshCart/",
  },
  {
    id: 3,
    src: gamesImg,
    alt: "Games Website",
    link: "https://adelshokry15.github.io/Games-Website/",
  },
  {
    id: 4,
    src: foodImg,
    alt: "Yummy Website",
    link: "https://adelshokry15.github.io/yummyWebsite/",
  },
  {
    id: 5,
    src: stImg,
    alt: "Streetsuite Website",
    link: "https://www.streetsuite.com",
  },
  {
    id: 6,
    src: moviesImg,
    alt: "Movies Website",
    link: "https://adelshokry15.github.io/MoviesDB/",
  },
];

export default function Portfolio() {
  const [link, setLink] = useState(null);
  const [image, setImage] = useState(null);

  return (
    <>
      <div className="portfolio text-center mt-5 pt-5 pb-5">
        <div className="container">
          <h3 className="fs-1 fw-bold position-relative mb-5 mt-5">
            PROJECTS
            <span className=" bg-white d-flex justify-content-center align-items-center position-absolute fa-pos fs-6">
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <div className="row gy-5">
            {imagesList.map((i) => (
              <div className="col-md-4" key={i.id}>
                <div className="img-card position-relative">
                  <img className="w-100 rounded-3" src={i.src} alt={i.alt} />
                  <div
                    onClick={(e) => {
                      setImage(i.src);
                      setLink(i.link);
                    }}
                    className="layer"
                    data-src={i.src}
                  >
                    <FontAwesomeIcon
                      data-src={i.src}
                      onClick={(e) => {
                        setImage(i.src);
                        setLink(i.link);
                      }}
                      className="flag display-2 fw-bolder"
                      icon={faCamera}
                      style={{ color: "#ffffff" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`img-display position-fixed justify-content-center align-items-center ${
          image ? "d-flex" : "d-none"
        } flex-column`}
      >
        <FontAwesomeIcon
          onClick={() => {
            setLink(null);
            setImage(null);
          }}
          className=" display-2 fw-bolder position-absolute closemark"
          icon={faXmark}
          style={{ color: "#ffffff" }}
        />
        <div style={{ width: "70%" }}>
          <a
            href={link || "#"}
            target="_blank"
            className="linkwebsite fw-bold display-6 text-white text-decoration-underline mb-1 d-block"
          >
            Click To Go To Website
          </a>
        </div>
        <img src={image || ""} alt="" className="object-fit-cover" />
      </div>
    </>
  );
}
