import { useState } from "react";
import API from "../api/api";
import Navbar from "../components/Navbar";

function AdminCreateCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [trainer, setTrainer] = useState("");
  const [duration, setDuration] = useState("");

  const createCourse = async (e) => {
    e.preventDefault();

    await API.post("/courses/create", {
      title,
      description,
      trainer,
      duration,
    });

    alert("Course Created");

    setTitle("");
    setDescription("");
    setTrainer("");
    setDuration("");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Create Course</h1>

        <form className="card" onSubmit={createCourse}>
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
          <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
          <input value={trainer} onChange={(e) => setTrainer(e.target.value)} placeholder="Trainer" />
          <input value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" />

          <button className="btn">Create</button>
        </form>
      </div>
    </>
  );
}

export default AdminCreateCourse;