import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Sidebar.css";
import logo from "../../assets/icon.png";

const Sidebar = ({ isAuthenticated, onLogout, userRole }) => {
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
    <div className="sidebar bg-gradient shadow-lg fixed-left">
      <div className="sidebar-container">
        <Link className="sidebar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Park Visits" className="logo" />
          <span className="ms-2 fw-bold text-gradient">Park Visits</span>
        </Link>
        <ul className="sidebar-nav">
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
          <div className="d-flex align-items-center logout-section">
            <button className="btn btn-light ms-3 fw-bold" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="btn btn-light ms-3 fw-bold" onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
