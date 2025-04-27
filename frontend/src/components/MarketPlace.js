import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserTie, FaShoppingCart } from "react-icons/fa"; // Import icons
import "../App.css";

const MarketPlace = () => {
  const navigate = useNavigate();

  return (
    <div className="marketplace-container">
      <h1>RESALE MARKETPLACE</h1>
      <div className="container-wrapper">
        <div className="seller-container" onClick={() => navigate("/seller")}>
          <FaUserTie className="icon" /> {/* Seller Icon */}
          <h2>Seller</h2>
        </div>
        <div className="buyer-container" onClick={() => navigate("/buyer")}>
          <FaShoppingCart className="icon" /> {/* Buyer Icon */}
          <h2>Buyer</h2>
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
