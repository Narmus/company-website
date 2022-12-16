//Header for the full website

import React, { Fragment } from "react";

//Mobile version Header -> Logo-Company Name-Collapse
export default function Header() {
  return (
    <Fragment>
      <header className="d-flex justify-content-between">
        <a href="#Home">
          <img src="images/logo.jpeg" alt="logo" />
        </a>
        <p>Company Name</p>
        <nav>
          <p>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navCollapse"
              aria-expanded="false"
              aria-controls="navCollapse"
            >
              |||
            </button>
          </p>
        </nav>
      </header>
      <div className="collapse" id="navCollapse">
        <a
          className="d-block"
          href="RegisterLogIN"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#regLogCollapse"
          aria-expanded="false"
          aria-controls="#regLogCollapse"
        >
          Register/Login
        </a>
        <div className="collapse regLog" id="regLogCollapse">
          <a href="studentLogin" className="d-block sidebar-btn">
            Student
          </a>
          <a href="employerLogin" className="d-block sidebar-btn">
            Employer
          </a>
        </div>
        <a className="d-block sidebar-btn" href="BookSession">
          Book Session
        </a>
        <a className="d-block sidebar-btn" href="Courses">
          Courses
        </a>
        <a className="d-block sidebar-btn" href="Jobs">
          Jobs
        </a>
        <a className="d-block sidebar-btn" href="Details">
          Details
        </a>
      </div>
    </Fragment>
  );
}
