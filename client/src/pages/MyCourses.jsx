import { useEffect, useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

function MyCourses() {
  const [courses, setCourses] = useState([]);

  const fetchMyCourses = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    const res = await API.get(`/users/my-courses/${user._id}`);

    setCourses(res.data.enrolledCourses);
  };

  useEffect(() => {
    fetchMyCourses();
  }, []);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>My Courses</h1>

        <div className="grid">
          {courses.length === 0 ? (
            <p>No courses enrolled yet.</p>
          ) : (
            courses.map((c) => (
              <div className="card" key={c._id}>
                <h3>{c.title}</h3>
                <p>{c.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default MyCourses;