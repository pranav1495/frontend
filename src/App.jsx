import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Footer from "./Components/Footer/Footer";
import { Front } from "./Components/Front/Front";
import Features from "./Components/Home/Features";
import Header from "./Components/Header/Header";

const getAuthStatus = () => localStorage.getItem("isAuthenticated") === "true";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading state
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  // Logout Function
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  if (loading) {
    return <div className="loading">Loading...</div>; // Display loading
  }

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && (
          <>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout}  />
            <div className="main-content">
              {/* Content rendered only when authenticated */}
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home onLogout={handleLogout} />} />
                <Route path="/features" element={<Features />} />
              </Routes>
            </div>
          </>
        )}
        {!isAuthenticated && (
          <div className="main-content">
            {/* Render for non-authenticated users */}
            <Routes>
              <Route path="/" element={<Front />} />
              <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        )}
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
