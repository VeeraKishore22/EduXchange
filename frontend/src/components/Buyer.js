import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Buyer = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/marketplace");
        setProducts(response.data);
        console.log(response.data, "DATA");
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuyNow = (productId) => {
    navigate("/payment"); // Navigate to the payment page
  };

  return (
    <>
      <div className="buyer-section">
        <header className="buyer-header">
          <input
            type="text"
            placeholder="Search Books..."
            className="buyer-search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </header>
      </div>

      <div className="buyer-product-grid">
        {loading ? (
          <p>Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="buyer-product-container">
              <div className="buyer-product-card">
                <img
                  src={product.file_path ? `http://localhost:5000/${product.file_path}` : "placeholder.jpg"}
                  alt={product.name}
                  className="buyer-product-image"
                />
                <h3 className="buyer-product-name">{product.name}</h3>
                <p className="buyer-product-price">₹{product.price}</p>
                <p className="buyer-product-description">{product.description}</p>
                <button className="buyer-buy-button"  onClick={() => handleBuyNow(product.id)}>Buy Now</button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </>
  );
};

export default Buyer;
