import React, { Fragment } from "react";
import apply from "./images/icons/apply.jpg";
import classes from "./images/icons/classes.jpg";
import hired from "./images/icons/hired.jpg";
import intership from "./images/icons/internship.jpg";
import register from "./images/icons/register.jpg";

export default function Journey() {
  return (
    <div className="journey">
      <h2>Your Journey Ahead</h2>
      <div className="row m-0 py-4 px-1 gap-3 justify-content-around journey">
        <div className="col-3 card">
          <img className="card-img" src={register} alt="register" />
          <p className="card-text">1. Register</p>
        </div>
        <div className="col-3 card">
          <img className="card-img" src={classes} alt="register" />
          <p className="card-text">2. Take Live Classes</p>
        </div>
        <div className="col-3 card">
          <img className="card-img" src={intership} alt="register" />
          <p className="card-text">3. Internship</p>
        </div>
        <div className="col-3 card">
          <img className="card-img" src={apply} alt="register" />
          <p className="card-text">4. Apply for jobs</p>
        </div>
        <div className="col-3 card">
          <img className="card-img" src={hired} alt="register" />
          <p className="card-text">5. Get Hired</p>
        </div>
      </div>
    </div>
  );
}
