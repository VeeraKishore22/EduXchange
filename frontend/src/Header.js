import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/Login");
  };

  return (
    <header className="header-container">
      <h1 className="header-title">EduXchange</h1>
      <nav className="header-nav">
        {/* Always visible */}
        <Link to="/aboutus" className="nav-link">About Us</Link>
        <Link to="/contactus" className="nav-link">Contact Us</Link>

        {/* Shown only when logged out */}
        {!isAuthenticated && (
          <Link to="/Login" className="nav-link">Login</Link>
        )}

        {/* Shown only when logged in */}
        {isAuthenticated && (
          <>
            {role === "admin" ? (
              <>
                <Link to="/AdminHome" className="nav-link">Home</Link>
                <Link to="/User-View" className="nav-link">User Details</Link>
              </>
            ) : (
              <>
                <Link to="/Home" className="nav-link">Home</Link>
                <Link to="/Profile" className="nav-link">Profile</Link>
              </>
            )}
            <button className="logout-button" onClick={handleLogout}>Logout</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
