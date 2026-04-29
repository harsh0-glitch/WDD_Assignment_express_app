const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || "development";

/* Logging Middleware */
app.use((req, res, next) => {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url}`
  );
  next();
});

/* Routes */
app.get("/", (req, res) => {
  res.send("Application Deployed Successfully");
});

app.get("/status", (req, res) => {
  res.json({
    status: "running",
    environment: ENV
  });
});

app.get("/info", (req, res) => {
  res.json({
    name: "Advanced Express App",
    version: "1.0.0",
    author: "Your Name"
  });
});

/* 404 Handler */
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Mode: ${ENV}`);
});