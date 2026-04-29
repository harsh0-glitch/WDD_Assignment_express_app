const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// Root Route
app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});

// Status Route
app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: "production"
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});