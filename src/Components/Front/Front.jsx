import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Front.css"; // Add if you need specific styles

export const Front = () => {
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
    <div className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center">
      <h1 className="display-4 fw-bold fade-in">{greeting}</h1>
      <h2 className="fade-in">Welcome to <span className="brand-name">Park Visits</span></h2>
      <p className="lead fade-in">Your AI-powered visitor management system.</p>
      <button className="btn btn-light mt-3 px-4 py-2 fw-bold fade-in" onClick={() => navigate("/login")}>
        Get Started 🚀
      </button>
    </div>
  );
};
