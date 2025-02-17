import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  
  const username = localStorage.getItem("username") || "Guest";

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username"); 
    navigate("/login"); 
  };

  return (
    <>
      <div className="home-container">
        <div className="greeting-text">Hi, Welcome {username}!</div>

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
