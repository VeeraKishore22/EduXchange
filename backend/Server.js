const express = require("express");
const cors = require("cors");
require("dotenv").config(); 
const path = require("path");


const { connectDB } = require("./config/db");
const { syncDB } = require("./models");

const app = express();
app.use(express.json());

// Enable CORS
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Debugging middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Import and use routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Add Download Route
app.get("/download/uploads/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "uploads", filename);

  res.download(filePath, filename, (err) => {
    if (err) {
      console.error("❌ Error downloading file:", err);
      res.status(500).send("Error downloading file");
    }
  });
});

const startServer = async () => {
  try {
    await connectDB(); 
    await syncDB(); 

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err);
    process.exit(1); 
  }
};

startServer();