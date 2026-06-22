import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function EnrollCourse() {
  const navigate = useNavigate();
  const location = useLocation();

  const course = location.state?.course;

  const [form, setForm] = useState({
    studentName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    college: "",
    year: "",
    address: "",
    parentName: "",
    parentPhone: "",
    reason: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    alert("Enrollment Submitted Successfully!");

    navigate("/my-courses");
  };

  return (
    <>
      <Navbar />

      <div className="container">

        <div className="form-card">

          <h1>Course Enrollment</h1>

          <p className="subtitle">
            {course?.title}
          </p>

          <form onSubmit={submitForm}>

            <input
              name="studentName"
              placeholder="Student Name"
              onChange={handleChange}
              required
            />

            <input
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />

            <select
              name="gender"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="date"
              name="dob"
              onChange={handleChange}
              required
            />

            <input
              name="college"
              placeholder="College Name"
              onChange={handleChange}
            />

            <input
              name="year"
              placeholder="Current Year"
              onChange={handleChange}
            />

            <input
              name="parentName"
              placeholder="Parent Name"
              onChange={handleChange}
            />

            <input
              name="parentPhone"
              placeholder="Parent Phone"
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              rows="3"
              onChange={handleChange}
            />

            <textarea
              name="reason"
              placeholder="Why do you want to join this course?"
              rows="4"
              onChange={handleChange}
            />

            <label className="check-box">
              <input type="checkbox" required />
              I confirm that the information provided is correct.
            </label>

            <button className="btn">
              Submit Enrollment
            </button>

          </form>

        </div>

      </div>
    </>
  );
}

export default EnrollCourse;