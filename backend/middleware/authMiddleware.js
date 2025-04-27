const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables

const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    console.log("❌ No Authorization header received");
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Extract token
  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

  console.log("🔹 Received Token:", token);
  console.log("🔹 JWT Secret (Middleware):", JWT_SECRET || "Not defined");

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("✅ Decoded Token Data:", decoded);
    
    req.user = decoded;
    next();
  } catch (error) {
    console.error("❌ JWT Verification Error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authenticate;
