import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserRegistration from "./components/UserRegistration";
import UserLogin from "./components/UserLogin";
import Home from "./components/Home";
import CompExam from "./components/CompExam";
import AdminHome from "./Admin/AdminHome";
import MarketPlace from "./components/MarketPlace";
import StudyMaterial from "./components/StudyMaterial";
import Seller from "./components/Seller";
import Profile from "./Profile";
import UploadExamDetails from "./Admin/ExamUpload";
import UploadStudyMaterial from "./Admin/StudyUpload";
import MockTest from "./components/MockTest";
import Buyer from "./components/Buyer";
import PaymentPage from "./components/Payment";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/Contact";

const ProtectedRoute = ({ element }) => {
  const token = localStorage.getItem("token");
  return token ? element : <Navigate to="/Login" />;
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/UserReg" element={<UserRegistration />} />
        
        {/* About Us & Contact Us should be accessible to everyone */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* Protected Routes */}
        <Route path="/Profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/Home" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/AdminHome" element={<ProtectedRoute element={<AdminHome />} />} />
        <Route path="/Upload-Exam" element={<ProtectedRoute element={<UploadExamDetails />} />} />
        <Route path="/Upload-Study" element={<ProtectedRoute element={<UploadStudyMaterial />} />} />
        <Route path="/comp-exam" element={<ProtectedRoute element={<CompExam />} />} />
        <Route path="/Market" element={<ProtectedRoute element={<MarketPlace />} />} />
        <Route path="/Seller" element={<ProtectedRoute element={<Seller />} />} />
        <Route path="/buyer" element={<ProtectedRoute element={<Buyer />} />} />
        <Route path="/payment" element={<ProtectedRoute element={<PaymentPage />} />} />
        <Route path="/Material" element={<ProtectedRoute element={<StudyMaterial />} />} />
        <Route path="/MockTest" element={<ProtectedRoute element={<MockTest />} />} />
      </Routes>
    </div>
  );
}

export default App;
