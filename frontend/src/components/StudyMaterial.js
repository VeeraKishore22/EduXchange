import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const StudyMaterial = () => {
  const [studyMaterials, setStudyMaterials] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [noData, setNoData] = useState(false);

  useEffect(() => {
    const fetchStudyMaterials = async () => {
      setLoading(true);
      setNoData(false);

      try {
        const response = await axios.get("http://localhost:5000/api/auth/study-materials");
        if (response.data.length > 0) {
          setStudyMaterials(response.data);
        } else {
          setStudyMaterials([]);
          setNoData(true);
        }
      } catch (error) {
        console.error("Error fetching study materials:", error);
        setNoData(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStudyMaterials();
  }, []);

  const filteredMaterials = studyMaterials.filter((material) =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="study-material-container">
      <h1 className="study-material-title">Study Materials</h1>
      <p className="study-material-description">
        Browse and download study materials for various competitive exams.
      </p>

      <input
        type="text"
        className="study-material-search"
        placeholder="Search study materials..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : noData || filteredMaterials.length === 0 ? (
        <p className="no-data-message">NO DATA AVAILABLE</p>
      ) : (
        <table className="study-material-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>File Name</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredMaterials.map((material, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{material.name}</td>
                <td>
                  <a
                    href={`http://localhost:5000/download/${material.file_path}`}
                    download
                  >
                    <button className="download-button">Download</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudyMaterial;
