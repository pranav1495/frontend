import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Footer from "./Components/Footer/Footer";
import { Front } from "./Components/Front/Front"; // Import Front.jsx

const getAuthStatus = () => localStorage.getItem("isAuthenticated") === "true";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(getAuthStatus);

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  // Logout Function
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <Router>
      {isAuthenticated && <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />}

      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Front />} /> 
        <Route path="/home" element={isAuthenticated ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />} /> 
        <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;
