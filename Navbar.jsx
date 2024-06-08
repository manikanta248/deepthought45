import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{ backgroundColor: "rgb(245, 240, 240)" , boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
      <nav className="navbar navbar-expand-lg container" style={{}}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="bi bi-house-door-fill text-white rounded-circle p-2 bg-primary m-1"></i>
              </Link>
              <Link className="nav-link" to="/">
                <i className="bi bi-tools text-white rounded-circle p-2 bg-primary m-1"></i>
              </Link>
              <Link className="nav-link" to="/">
                <i className="bi bi-bell-fill text-white rounded-circle p-2 bg-primary m-1"></i>
              </Link>
              <Link className="nav-link" to="/">
                <i className="bi bi-person-fill text-white rounded-circle p-2 bg-primary m-1"></i>
              </Link>
              <Link className="nav-link" to="/">
                <i className="bi bi-three-dots-vertical text-primary rounded-circle p-2 m-1"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
