import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../api/api";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
        role: "student",
      });

      alert("Registration Successful");

      window.location.href = "/";
    } catch (err) {
      alert(err.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">

        <h1>Create Account</h1>

        <p>Register to continue</p>

        <form onSubmit={registerUser}>

          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-btn" type="submit">
            Register
          </button>

        </form>

        <div className="auth-link">
          Already have an account? <Link to="/">Login</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;