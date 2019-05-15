import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
  return (
    <nav
      className="navbar navbar-custom"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </Link>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <Link className="button button-transparent" to="/register">
                <strong>Register</strong>
              </Link>
              <Link className="button button-transparent" to="/update">
                update
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
