import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/my-courses">My Courses</Link>

        {user?.role === "admin" && (
          <Link to="/admin/create-course">Create Course</Link>
        )}
      </div>

      <div>
        <span style={{ marginRight: "10px" }}>
          {user?.role}
        </span>

        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;