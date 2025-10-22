import React from "react";
import logo from "../assets/logo (1).svg";
export default function header() {
  return (
    <div>
      <header className="header">
        <div className="top"></div>
        <div className="contenir header-container">
          <a className="logo-text" style={{ color: "black" }} href="../App.jsx">
            <img src={logo} alt="ansormed logo" width="150" height="49" />
          </a>
          <div className="header-links-wrapper">
            <nav className="header-nav">
              <ul className="header-links">
                <li>
                  <a className="header-link" href="#">
                    Xizmatlar
                  </a>
                </li>
                <li>
                  <a className="header-link" href="#">
                    Dorilar
                  </a>
                </li>
                <li>
                  <a className="header-link" href="#">
                    Asal
                  </a>
                </li>
                <li>
                  <a className="header-link" href="#">
                    Kontaktlar
                  </a>
                </li>
                <li>
                  <a className="header-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
            <a className="orange-button orange" href="#">
              Qabulga yozilish
            </a>
          </div>

          <svg
            className="header-burger"
            width="32"
            height="32"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </header>
    </div>
  );
}
