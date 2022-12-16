import React from "react";
import reviews from "../reviews";

export default function Successes() {
  return (
    <div
      id="successStories"
      className="carousel slide "
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {reviews.map((review, index) => {
          if (index === 0) {
            return (
              <div key={index} className="carousel-item active ">
                <h1>{review.name}</h1>
                <p>{review.stars}⭐</p>
                <p>{review.review}</p>
              </div>
            );
          } else {
            return (
              <div key={index} className="carousel-item">
                <h1>{review.name}</h1>
                <p>{review.stars}⭐</p>
                <p>{review.review}</p>
              </div>
            );
          }
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#successStories"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#successStories"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
