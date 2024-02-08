import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when the route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-2">
      <div className="container">
        <Link to="/" className="navbar-brand fs-2 fw-semibold">
          TeuxDeux
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link fs-4 ${
                  location.pathname === "/" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {location.pathname === "/" ? (
                  <strong className="fs-4">Home</strong>
                ) : (
                  "Home"
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/taskform"
                className={`nav-link fs-4 ${
                  location.pathname === "/taskform" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {location.pathname === "/taskform" ? (
                  <strong className="fs-4">Taskform</strong>
                ) : (
                  "Taskform"
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/alltasks"
                className={`nav-link fs-4 ${
                  location.pathname === "/alltasks" ? "active" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {location.pathname === "/alltasks" ? (
                  <strong className="fs-4">Tasklist</strong>
                ) : (
                  "Tasklist"
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
