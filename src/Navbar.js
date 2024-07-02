import React from "react";
import { Link } from "react-router-dom";

function Navbar({src}) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Curd Operation
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                <span style={{ fontSize: "1.8rem" }}>Curd</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ContactForm">
                <span style={{ fontSize: "1.8rem" }}>Contact Us</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="Profile">
                  <img 
                    src={src}
                    alt="Profile" 
                    className="rounded-circle" 
                    style={{ width: "80px", height: "80px" }} 
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
