const express = require("express");
const router = express.Router();

const {
  createCourse,
  getCourses,
  getCourseById,
  enrollCourse,
} = require("../controllers/courseController");

// Middleware
const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");


// 🔥 Create Course (ADMIN ONLY)
router.post(
  "/create",
  protect,
  authorizeRoles("admin"),
  createCourse
);

// 🔥 Enroll student in course (STUDENT ONLY)
router.post(
  "/enroll",
  protect,
  authorizeRoles("student"),
  enrollCourse
);

// 🌐 Get all courses (PUBLIC)
router.get("/", getCourses);

// 🌐 Get course by ID (PUBLIC)
router.get("/:id", getCourseById);

module.exports = router;