import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Clear session storage or authentication token if used
    localStorage.removeItem("authToken"); // If using JWT
    navigate("/login"); // Redirect to Login page
  };

  return (
    <>
      <div className="home-container">
        <div className="greeting-text">Welcome to Park Visits</div>

        <div className="container mt-4">
          <div className="row g-4">
            <div className="col-md-6 col-sm-12">
              <div className="feature-card fade-in">
                <h3>Smart QR Entry 🎟️</h3>
                <p>Seamless check-ins with AI-generated QR codes.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="feature-card fade-in">
                <h3>Real-Time AI Monitoring 📊</h3>
                <p>Track visitor activity with live analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
