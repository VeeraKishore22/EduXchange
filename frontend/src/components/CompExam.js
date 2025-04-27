import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../App.css";

const CompExam = () => {
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/competative_exams");
        setExams(response.data);
        console.log(response.data, "DATA");
      } catch (error) {
        console.error("Error fetching exam details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, []);

  const filteredExams = exams.filter((exam) =>
    searchTerm === "" || exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1); // Go back only if there is history
    }
  };

  return (
    <div className="exam-page">
      <button 
      onClick={handleBack} 
      className="back-button"
      disabled={window.history.length <= 2}
    >
      Back
    </button>
      <h2 className="exam-title">Hi there! 📢</h2>
      <p className="exam-content">
        Welcome to EduXchange. You can check your respective exam details here, including schedules, results, important updates, and more.
        Stay ahead in your exam preparation with the latest information at your fingertips! 🚀
      </p>

      <div className="exam-container">
        <h3 className="exam-section-title">Competitive Exams and Information</h3>
        <input
          type="text"
          placeholder="Search exams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="exam-search-bar"
        />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="exam-table-container">
            <table className="exam-table">
              <thead>
                <tr>
                  <th>S.NO</th>
                  <th>Name</th>
                  <th>Center Location</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredExams.map((exam) => (
                  <tr key={exam.id} className="exam-table-row">
                    <td>{exam.id}</td>
                    <td>{exam.name}</td>
                    <td>{exam.center_location}</td>
                    <td>{new Date(exam.exam_date).toLocaleDateString("en-GB")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* NEET Exam Data Section */}
      <div className="neet-container">
        <h3 className="exam-section-title">NEET Exam Cut-off Scores</h3>
        <div className="exam-table-container">
          <table className="exam-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Round 1 (AIR, Score)</th>
                <th>Round 2 (AIR, Score)</th>
                <th>Mop-up Round 3 (AIR, Score)</th>
                <th>Stray Round 4 (AIR, Score)</th>
                <th>SP. Stray Round 5 (AIR, Score)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UR</td>
                <td>19603, 660</td>
                <td>22995, 655</td>
                <td>24842, 652</td>
                <td>25050, 652</td>
                <td>25220, 652</td>
              </tr>
              <tr>
                <td>OBC</td>
                <td>20281, 658</td>
                <td>23358, 655</td>
                <td>24982, 652</td>
                <td>25079, 652</td>
                <td>25212, 652</td>
              </tr>
              <tr>
                <td>EWS</td>
                <td>23419, 655</td>
                <td>26720, 650</td>
                <td>28702, 647</td>
                <td>28836, 647</td>
                <td>27899, 649</td>
              </tr>
              <tr>
                <td>SC</td>
                <td>105676, 575</td>
                <td>125103, 560</td>
                <td>133872, 553</td>
                <td>137759, 550</td>
                <td>139193, 549</td>
              </tr>
              <tr>
                <td>ST</td>
                <td>145207, 544</td>
                <td>155826, 536</td>
                <td>166849, 527</td>
                <td>166840, 526</td>
                <td>168888, 526</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Railway Exam Data Section */}
<div className="railway-container">
  <h3 className="exam-section-title">🚆 Railway Exam Cut-off Scores</h3>
  <p className="exam-content">
    Below are the cut-off scores for different regions and categories in the latest Railway exam.
  </p>
  <div className="exam-table-container">
    <table className="exam-table">
      <thead>
        <tr>
          <th>Region</th>
          <th>Category</th>
          <th>Cut-off Marks</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eastern</td>
          <td>UR</td>
          <td>72.33</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Eastern</td>
          <td>OBC</td>
          <td>69.12</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Eastern</td>
          <td>SC</td>
          <td>62.78</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Eastern</td>
          <td>ST</td>
          <td>58.45</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Western</td>
          <td>UR</td>
          <td>74.10</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Western</td>
          <td>OBC</td>
          <td>70.89</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Western</td>
          <td>SC</td>
          <td>64.23</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Western</td>
          <td>ST</td>
          <td>59.87</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Northern</td>
          <td>UR</td>
          <td>73.50</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Northern</td>
          <td>OBC</td>
          <td>70.23</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Northern</td>
          <td>SC</td>
          <td>63.88</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Northern</td>
          <td>ST</td>
          <td>60.12</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Southern</td>
          <td>UR</td>
          <td>71.80</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Southern</td>
          <td>OBC</td>
          <td>68.95</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Southern</td>
          <td>SC</td>
          <td>61.30</td>
          <td>2023</td>
        </tr>
        <tr>
          <td>Southern</td>
          <td>ST</td>
          <td>57.45</td>
          <td>2023</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


      {/* CAT 2025 Expected Percentile Section */}
      <div className="cat-container">
        <h3 className="exam-section-title">CAT 2025 Expected Percentile</h3>
        <div className="exam-table-container">
          <table className="exam-table">
            <thead>
              <tr>
                <th>Institute Name</th>
                <th>CAT 2025 Expected Percentile</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>FMS</td>
                <td>99</td>
              </tr>
              <tr>
                <td>IIT Delhi</td>
                <td>98</td>
              </tr>
              <tr>
                <td>MDI Gurgaon</td>
                <td>95</td>
              </tr>
              <tr>
                <td>IIT Madras</td>
                <td>95</td>
              </tr>
              <tr>
                <td>IMT Ghaziabad</td>
                <td>90</td>
              </tr>
              <tr>
                <td>SPJIMR</td>
                <td>85 (Profile based calls)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="bank-container">
      <h3 className="exam-section-title">🏦 Bank Exam Cut-off Scores</h3>
      <p className="exam-content">
        Below are the final cut-off scores for different banks under the general category.
      </p>
      <div className="exam-table-container">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Bank Name</th>
              <th>Final Cutoff (General Category)</th>
              <th>Who Gets Selected?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Punjab National Bank (PNB)</td>
              <td>52</td>
              <td>Highest scorers (Top rankers)</td>
            </tr>
            <tr>
              <td>Bank of Baroda (BoB)</td>
              <td>51</td>
              <td>High scorers</td>
            </tr>
            <tr>
              <td>Canara Bank</td>
              <td>50</td>
              <td>Moderate to high scorers</td>
            </tr>
            <tr>
              <td>Union Bank of India</td>
              <td>49</td>
              <td>Mid-range scorers</td>
            </tr>
            <tr>
              <td>Bank of India (BoI)</td>
              <td>48</td>
              <td>Mid-range scorers</td>
            </tr>
            <tr>
              <td>Indian Bank</td>
              <td>47</td>
              <td>Average to mid scorers</td>
            </tr>
            <tr>
              <td>Central Bank of India</td>
              <td>46</td>
              <td>Average scorers</td>
            </tr>
            <tr>
              <td>Indian Overseas Bank (IOB)</td>
              <td>45</td>
              <td>Low to average scorers</td>
            </tr>
            <tr>
              <td>UCO Bank</td>
              <td>44</td>
              <td>Low scorers</td>
            </tr>
            <tr>
              <td>Bank of Maharashtra</td>
              <td>43</td>
              <td>Lower rank holders</td>
            </tr>
            <tr>
              <td>Punjab & Sind Bank</td>
              <td>42</td>
              <td>Lowest cutoff</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default CompExam;
