import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import logo from "../../assets/icon.png"; // Use your Park Visits logo

const Header = ({ isAuthenticated, onLogout, userRole }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        {/* Logo & Website Type */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Park Visits" className="logo" />
          <span className="ms-2 fw-bold">Park Visits</span>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <div className="dropdown ms-3">
              <button 
                className="btn btn-light fw-bold dropdown-toggle" 
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {userRole === "admin" ? "Admin Panel" : userRole === "staff" ? "Staff Dashboard" : "Visitor Dashboard"}
              </button>
              
              {dropdownOpen && (
                <ul className="dropdown-menu show">
                  {userRole === "admin" && (
                    <>
                      <li><Link className="dropdown-item" to="/manage-visitors">Manage Visitors</Link></li>
                      <li><Link className="dropdown-item" to="/reports">View Reports</Link></li>
                    </>
                  )}
                  {userRole === "staff" && (
                    <>
                      <li><Link className="dropdown-item" to="/check-in">Check-in Visitors</Link></li>
                      <li><Link className="dropdown-item" to="/visitor-logs">Visitor Logs</Link></li>
                    </>
                  )}
                  {userRole === "visitor" && (
                    <>
                      <li><Link className="dropdown-item" to="/book-appointment">Book Appointment</Link></li>
                      <li><Link className="dropdown-item" to="/visit-history">Visit History</Link></li>
                    </>
                  )}
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button className="dropdown-item text-danger" onClick={onLogout}>Logout</button>
                  </li>
                </ul>
              )}
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
