import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__head">
        <h1>Ranjan Moger</h1>
      </div>
      <div className="footer__socialIcons">
        <a href="https://www.instagram.com/ranjanmoger/?hl=en" target="_blank">
          <i class="bx bxl-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ranjan-moger-042952141/"
          target="_blank"
        >
          <i class="bx bxl-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/ranjan.moger.50/" target="_blank">
          <i class="bx bxl-facebook"></i>
        </a>
        <a href="https://github.com/Ranjan08385" target="_blank">
          <i class="bx bxl-github"></i>
        </a>
      </div>

      <p>&#169; 2021 copyright all right reserved</p>
    </div>
  );
}

export default Footer;
