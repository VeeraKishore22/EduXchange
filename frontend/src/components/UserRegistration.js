import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; 

const UserRegistration = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    prefix: "Mr.", // Default prefix
    name: "",
    email: "",
    phone: "",
    exam: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // For button state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate phone number (10-digit numeric)
  const isValidPhone = (phone) => {
    return /^[0-9]{10}$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (!isValidEmail(formData.email)) {
      setError("Invalid email format");
      return;
    }

    if (!isValidPhone(formData.phone)) {
      setError("Phone number must be 10 digits");
      return;
    }

    setError("");
    setLoading(true); // Disable button while submitting

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User registered:", data);
        navigate("/Login"); // Redirect after successful registration
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false); // Re-enable button after request
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h2 className="form-title">Register with Us</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group name-group">
            <label className="form-label">Name</label>
            <div className="name-container">
              <select
                name="prefix"
                value={formData.prefix}
                onChange={handleChange}
                required
                className="prefix-dropdown"
              >
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Dr.">Dr.</option>
              </select>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input name-input"
                placeholder="Full Name"
              />
            </div>
          </div>
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
            <label className="form-label">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="form-input"
              maxLength="10"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Exam</label>
            <select
              name="exam"
              value={formData.exam}
              onChange={handleChange}
              required
              className="form-input"
            >
              <option value="">Select an Exam</option>
              <option value="UPSC">UPSC</option>
              <option value="GATE">GATE</option>
              <option value="CAT">CAT</option>
              <option value="JEE">JEE</option>
              <option value="NEET">NEET</option>
              <option value="SSC">SSC</option>
              <option value="Banking">Banking</option>
              <option value="Railway">Railway</option>
            </select>
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
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
