import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="top"></div>
        <div className="contenir footer-container">
          <a className="logo-text" href="index.html">
            <img
              src="../../src/assets/logo (2).svg"
              alt="ansormed logo"
              width="150"
              height="49"
            />
          </a>

          {/* links */}
          <div className="footer-links-wrapper">
            <nav>
              <ul className="footer-links">
                <li>
                  <a className="footer-link" href="#">
                    Xizmatlar
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Dorilar
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Asal
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Kontaktlar
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
