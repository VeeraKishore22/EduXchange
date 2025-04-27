import React, { useState } from "react";
import axios from "axios";  // Ensure axios is imported
import "../App.css";

const UploadExamDetails = () => {
  const [examName, setExamName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const examDetails = {
      name: examName,  // Rename to match backend
      center_location: location,  // Rename to match backend
      exam_date: date,  // Rename to match backend
    };
  
    console.log("Sending Exam Details:", examDetails);
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/competative_exams",
        examDetails,
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("Response:", response.data);
      alert("Exam details uploaded successfully!");
  
      // Reset form
      setExamName("");
      setLocation("");
      setDate("");
    } catch (error) {
      console.error("Error uploading details:", error.response?.data || error);
      alert("Failed to upload. Please try again.");
    }
  };
  
  return (
    <div className="upload-competitive-exam-container">
      <div className="upload-competitive-exam-form-wrapper">
        <h2 className="upload-competitive-exam-title">Upload Competitive Exam Details</h2>
        <form className="upload-competitive-exam-form" onSubmit={handleSubmit}>
          <label className="upload-competitive-exam-label">
            Exam Name:
            <input
              type="text"
              className="upload-competitive-exam-input"
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              required
            />
          </label>
          <label className="upload-competitive-exam-label">
            Exam Center Location:
            <input
              type="text"
              className="upload-competitive-exam-input"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label className="upload-competitive-exam-label">
            Exam Date:
            <input
              type="date"
              className="upload-competitive-exam-input"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <button type="submit" className="upload-competitive-exam-button">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadExamDetails;
