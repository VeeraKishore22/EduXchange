import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Importing styles

const AdminHome = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-home">
      <h1 className="admin-title">Admin Dashboard</h1>

      <div className="admin-categories">
        <div className="admin-category-card" onClick={() => navigate("/Upload-Exam")}>
          <h3 className="admin-category-title">Exam Details Upload</h3>
        </div>

        <div className="admin-category-card" onClick={() => navigate("/Upload-Study")}>
          <h3 className="admin-category-title">Study Material Upload</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
