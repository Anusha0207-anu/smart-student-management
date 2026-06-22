require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authroutes");
const studentRoutes = require("./routes/studentRoutes");
const adminRoutes = require("./routes/adminRoutes");
const courseRoutes = require("./routes/courseRoutes");

const app = express();

// Connect MongoDB
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/courses", courseRoutes);

app.get("/", (req, res) => {
  res.send("Smart Student Learning & Placement Management System API");
});

const PORT = process.env.PORT || 5000;
const User = require("./models/user");

app.get("/test-db", async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({
      success: true,
      users: count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});