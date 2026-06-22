import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import Navbar from "../components/Navbar";

function Courses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const res = await API.get("/courses");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const enroll = (course) => {
    navigate("/enroll-course", {
      state: {
        course,
      },
    });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="welcome">
          <h1>📚 Available Courses</h1>
          <p>Choose a course and begin your learning journey.</p>
        </div>

        <div className="grid">

          {courses.length > 0 ? (
            courses.map((course) => (
              <div className="card" key={course._id}>

                <div
                  style={{
                    fontSize: "60px",
                    textAlign: "center",
                    marginBottom: "15px",
                  }}
                >
                  📘
                </div>

                <h2>{course.title}</h2>

                <p>{course.description}</p>

                <p>
                  <strong>Trainer:</strong>{" "}
                  {course.trainer || "Not Assigned"}
                </p>

                <p>
                  <strong>Duration:</strong>{" "}
                  {course.duration || "N/A"}
                </p>

                <button
                  className="btn"
                  onClick={() => enroll(course)}
                >
                  Enroll Now
                </button>

              </div>
            ))
          ) : (
            <div className="card">
              <h2>No Courses Available</h2>
              <p>Please check again later.</p>
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Courses;