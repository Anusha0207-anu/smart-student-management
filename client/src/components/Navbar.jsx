import { Link } from "react-router-dom";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>SMS</h2>
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>

        <Link to="/courses">Courses</Link>

        <Link to="/my-courses">My Courses</Link>

        {user?.role === "admin" && (
          <Link to="/admin/create-course">
            Create Course
          </Link>
        )}
      </div>

      <div className="user-section">
        <span>{user?.name}</span>

        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;