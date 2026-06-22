import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="welcome">
          <h1>Student Dashboard</h1>
          <p>Welcome back, {user?.name} 👋</p>
        </div>

        <div className="grid">
          <div className="card">
            <h2>👤 Profile</h2>

            <p>
              <strong>Name:</strong> {user?.name}
            </p>

            <p>
              <strong>Email:</strong> {user?.email}
            </p>

            <p>
              <strong>Role:</strong> {user?.role}
            </p>
          </div>

          <div className="card">
            <h2>📚 Courses</h2>

            <p>Browse all available courses and enroll.</p>

            <button
              className="btn"
              onClick={() => (window.location.href = "/courses")}
            >
              View Courses
            </button>
          </div>

          <div className="card">
            <h2>🎓 My Courses</h2>

            <p>Check your enrolled courses.</p>

            <button
              className="btn"
              onClick={() => (window.location.href = "/my-courses")}
            >
              My Courses
            </button>
          </div>

          {user?.role === "admin" && (
            <div className="card">
              <h2>⚙️ Admin Panel</h2>

              <p>Create and manage courses.</p>

              <button
                className="btn"
                onClick={() =>
                  (window.location.href = "/admin/create-course")
                }
              >
                Manage
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;