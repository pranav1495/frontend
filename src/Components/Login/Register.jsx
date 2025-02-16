import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Register user
  const handleRegister = async () => {
    setMessage("");
  
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }
  
    try {
      const response = await axios.post("https://backend-7svj.onrender.com/register", {
        username: formData.username,
        password: formData.password,
      });
  
      console.log("✅ Registration successful:", response.data);
      alert(response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("❌ Registration error:", error.response?.data);
      setMessage(error.response?.data?.error || "Registration failed.");
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center">Sign Up</h2>

        {message && <div className="alert alert-danger">{message}</div>}

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            name="username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
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

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            required
          />
        </div>

        <button className="btn btn-success w-100" onClick={handleRegister}>Sign Up</button>

        <div className="text-center mt-3">
          <p>Already have an account? <a href="/login" className="text-decoration-none">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
