import React from "react";
import { Link } from "react-router-dom";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <header className="features-header">
        <h1>Explore Our Amazing Features</h1>
        <p>Experience seamless visitor management with our powerful tools.</p>
      </header>

      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-user-check"></i>
          <h3>Visitor Check-in</h3>
          <p>Fast and secure check-in process for visitors.</p>
        </div>

        <div className="feature-card">
          <i className="fas fa-calendar-check"></i>
          <h3>Appointment Booking</h3>
          <p>Schedule visits with ease and receive instant confirmations.</p>
        </div>

        <div className="feature-card">
          <i className="fas fa-shield-alt"></i>
          <h3>Security Monitoring</h3>
          <p>Track visitor activity with real-time logs.</p>
        </div>

        <div className="feature-card">
          <i className="fas fa-chart-line"></i>
          <h3>Analytics & Reports</h3>
          <p>Generate detailed reports for better insights.</p>
        </div>
      </div>

      <div className="features-footer">
        <p>Ready to get started?</p>
        <Link to="/signup" className="btn-get-started">Sign Up Now</Link>
      </div>
    </div>
  );
};

export default Features;
