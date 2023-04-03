import React from "react";
import "./Footer.scss";
import logoWhite from "../../assets/logo-white.svg";

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__content__txt">
            <p className="consola">
              Designed & developed by
              <br />
              Michael Marino
              <br />
              2023
            </p>
          </div>
          <img src={logoWhite} alt="logo" />
        </div>
      </div>
    </footer>
  );
}
