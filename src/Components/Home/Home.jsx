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
      <div className="home-container">

        {/* Features Section */}
        <div className="container mt-5">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-card p-4 fade-in">
                <h3>Smart QR Entry 🎟️</h3>
                <p>Seamless check-ins with AI-generated QR codes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card p-4 fade-in">
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
