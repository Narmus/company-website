import React from "react";
import light from "./images/light.jpg";
import grey from "./images/grey.jpg";
import dark from "./images/dark.jpg";

export default function Carousel() {
  return (
    <div id="homePanel" className="carousel slide" data-bs-ride="true">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={light} alt="light" className="d-block w-100" />
        </div>
        <div className="carousel-item ">
          <img src={grey} alt="grey" className="d-block w-100" />
        </div>
        <div className="carousel-item ">
          <img src={dark} alt="dark" className="d-block w-100" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homePanel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homePanel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
