import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

function Courses() {
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const res = await API.get("/courses");
    setCourses(res.data);
  };

  const enroll = async (courseId) => {
    const user = JSON.parse(localStorage.getItem("user"));

    await API.post("/courses/enroll", {
      userId: user._id,
      courseId,
    });

    alert("Enrolled Successfully");
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Courses</h1>

        <div className="grid">
          {courses.map((c) => (
            <div className="card" key={c._id}>
              <h3>{c.title}</h3>
              <p>{c.description}</p>

              <button className="btn" onClick={() => enroll(c._id)}>
                Enroll
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Courses;