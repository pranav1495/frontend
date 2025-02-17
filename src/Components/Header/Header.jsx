import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assets/icon.png";

const Header = ({ isAuthenticated, onLogout, userRole }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-gradient shadow-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Park Visits" className="logo" />
          <span className="ms-2 fw-bold text-gradient">Park Visits</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-hover" to="/contact">Contact</Link>
            </li>
          </ul>
          {isAuthenticated ? (
            <div className="d-flex align-items-center">
              {/* Dropdown Menu */}
              <div className="dropdown" ref={dropdownRef}>
                <button
                  className="btn btn-light ms-3 fw-bold dropdown-toggle"
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded={dropdownOpen}
                >
                  {userRole === "Admin" ? "Admin" : "User"}
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {userRole === "Admin" ? (
                      <>
                        <li><Link className="dropdown-item" to="/admin">Admin Panel</Link></li>
                        <li><Link className="dropdown-item" to="/settings">Settings</Link></li>
                      </>
                    ) : (
                      <>
                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                      </>
                    )}
                    <li><Link className="dropdown-item" onClick={onLogout} to="/login">Logout</Link></li>
                  </ul>
                )}
              </div>
            </div>
          ) : (
            <button className="btn btn-light ms-3 fw-bold" onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
