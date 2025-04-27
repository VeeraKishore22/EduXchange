import React, { useState } from "react";
import axios from "axios"; // Import Axios for API requests
import "../App.css";

const Seller = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: null,
    imagePreview: "",
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct({ ...product, image: file, imagePreview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.image) {
      alert("Please upload an image.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("file", product.image);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/marketplace", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Response:", response.data);
      alert("Product uploaded successfully!");
      setProduct({ name: "", description: "", price: "", image: null, imagePreview: "" });
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Failed to upload product. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="product-sell-container">
      <h1 className="product-sell-title">Sell Your Product</h1>
      <form className="product-sell-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
          className="product-input-field"
        />
        <textarea
          name="description"
          placeholder="Product Description"
          value={product.description}
          onChange={handleChange}
          required
          className="product-textarea-field"
        />
        <input
          type="number"
          name="price"
          placeholder="Price (₹)"
          value={product.price}
          onChange={handleChange}
          required
          className="product-input-field"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="product-upload-input"
        />
        {product.imagePreview && (
          <img src={product.imagePreview} alt="Preview" className="product-image-preview" />
        )}
        <button type="submit" className="product-submit-btn" disabled={uploading}>
          {uploading ? "Uploading..." : "Upload Product"}
        </button>
      </form>
    </div>
  );
};

export default Seller;
