import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting("Good Morning! 🌅");
    } else if (currentHour < 17) {
      setGreeting("Good Afternoon! ☀️");
    } else {
      setGreeting("Good Evening! 🌙");
    }
  }, []);

  return (
    <>
      <div className="home-container d-flex flex-column align-items-center text-center p-3">
        
        {/* Greeting Section */}
        <h2 className="greeting-text">{greeting}</h2>
        <h4>Welcome to <span className="brand-name">Park Visits</span></h4>
        <p className="lead">Your AI-powered visitor management system.</p>

        {/* Features Section */}
        <div className="container mt-4">
          <div className="row g-4">
            <div className="col-md-6 col-sm-12">
              <div className="feature-card p-4 fade-in">
                <h3>Smart QR Entry 🎟️</h3>
                <p>Seamless check-ins with AI-generated QR codes.</p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="feature-card p-4 fade-in">
                <h3>Real-Time AI Monitoring 📊</h3>
                <p>Track visitor activity with live analytics.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button 
          className="btn btn-primary mt-3 px-4 py-2 fw-bold fade-in"
          onClick={() => navigate("/register")}
        >
          Get Started 🚀
        </button>
      </div>
    </>
  );
}

export default Home;
