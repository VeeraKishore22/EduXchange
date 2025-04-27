import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both fields are required");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      console.log(response);
  
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("email", formData.email); // Store email in localStorage
      setError("");
  
      // Navigate based on email
      if (formData.email === "admin@gmail.com") {
        navigate("/AdminHome"); // Redirect to AdminHome for admin
      } else {
        navigate("/Home"); // Redirect normal users to Home
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  
  
  return (
    <div className="auth-container">
      <div className="form-container">
        <h2 className="form-title">Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <p className="signup-text">
          Don't have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/UserReg")}>
            Register with us
          </span>
        </p>
      </div>
    </div>
  );
};

export default UserLogin;