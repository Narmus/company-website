import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <footer>
        <a
          className="d-block main"
          href="Resources"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#resources"
        >
          Resources
        </a>
        <div className="collapse sub" id="resources">
          <a href="blog" className="d-block sub">
            Blog
          </a>
          <a href="webinar" className="d-block sub">
            Webinar
          </a>
          <a href="blog" className="d-block sub">
            Samples
          </a>
        </div>

        <a
          className="d-block main"
          href="Company"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#company"
        >
          Company
        </a>
        <div className="collapse" id="company">
          <a href="aboutus" className="d-block sub">
            About Us
          </a>
          <a href="joinus" className="d-block sub">
            Join Us
          </a>
        </div>

        <a
          className="d-block main"
          href="Support"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#support"
        >
          Support
        </a>
        <div className="collapse" id="support">
          <a href="helpcenter" className="d-block sub">
            Help Center
          </a>
          <a href="chatsupport" className="d-block sub">
            Chat Support
          </a>
        </div>
        <div className="social-media d-flex justify-content-around">
          <a href="facebook">FB</a>
          <a href="twitter">TW</a>
          <a href="linkedin">LI</a>
          <a href="youtube">YT</a>
          <a href="Call">000000 000</a>
        </div>
        <p className="m-0">2022 © All Rights Reserved</p>
      </footer>
    </div>
  );
}
