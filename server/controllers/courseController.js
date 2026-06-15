const Course = require("../models/Course");

// Create Course
const createCourse = async (req, res) => {
  try {
    const { title, description, trainer, duration } = req.body;

    const course = new Course({
      title,
      description,
      trainer,
      duration,
    });

    await course.save();

    res.status(201).json({
      message: "Course Created Successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Course By ID
const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course Not Found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const User = require("../models/user");

const enrollCourse = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.enrolledCourses.push(courseId);

    await user.save();

    res.status(200).json({
      message: "Course Enrolled Successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCourse,
  getCourses,
  getCourseById,
  enrollCourse,
};