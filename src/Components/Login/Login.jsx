import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import profilePhoto from "../../assets/pranav.png";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setErrorMessage("");

    try {
      console.log("Sending request to:", "https://backend-7svj.onrender.com/login");
      console.log("Username:", formData.username);
      console.log("Password:", formData.password);

      const response = await axios.post("https://backend-7svj.onrender.com/login", {
        username: formData.username,
        password: formData.password,
      });

      if (response.status === 200) {
        alert("✅ Login Successful");
        onLogin();
        localStorage.setItem("isAuthenticated", "true");
        navigate("/home");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="text-center">
          <h2 className="mb-3">Park Visits</h2>
        </div>

        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <button className="btn btn-primary w-100" onClick={handleLogin}>Log In</button>

        <div className="text-center mt-3">
          <p>Don't have an account? <a href="/register" className="text-decoration-none">Sign up</a></p>
        </div>

        <h6 className="d-flex align-items-center justify-content-center gap-2 mt-3">
          Developed by Pranav
          <img
            src={profilePhoto}
            alt="Pranav"
            className="rounded-circle"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
        </h6>
      </div>
    </div>
  );
}

export default Login;
