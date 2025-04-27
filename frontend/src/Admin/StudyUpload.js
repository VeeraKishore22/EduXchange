import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";

const UploadStudyMaterial = () => {
  const [examName, setExamName] = useState("");
  const [fileName, setFileName] = useState(""); // New field for file name
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!examName || !fileName || !pdfFile) {
      alert("Please provide an exam name, file name, and select a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("exam", examName);
    formData.append("name", fileName); // Sending file name
    formData.append("file", pdfFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/study-materials",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Response:", response.data);
      alert("File uploaded successfully!");
      setExamName("");
      setFileName(""); // Reset file name field
      setPdfFile(null);
      e.target.reset();
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload. Please try again.");
    }
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // Go back only if there is history
    }
  };

  return (
    <div className="study-material-upload-container">
      <div className="study-material-upload-form-wrapper">
        <h2 className="study-material-upload-title">Upload Study Material</h2>
        <form className="study-material-upload-form" onSubmit={handleSubmit}>
       

          {/* New Field: File Name Input */}
          <label className="study-material-upload-label">
            File Name:
            <input
              type="text"
              className="study-material-upload-input"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              placeholder="Enter file name"
              required
            />
          </label>

          <label className="study-material-upload-label">
            Select Exam:
            <select
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              className="study-material-upload-input"
              required
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
          </label>

          <label className="study-material-upload-label">
            Upload PDF File:
            <input
              type="file"
              className="study-material-upload-input"
              accept="application/pdf"
              onChange={(e) => setPdfFile(e.target.files[0])}
              required
            />
          </label>

          <button type="submit" className="study-material-upload-button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadStudyMaterial;
