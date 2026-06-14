import Navbar from "../components/Navbar";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>
        <h3>Welcome {user?.name}</h3>

        <div className="grid">

          <div className="card">
            <h3>Profile</h3>
            <p>Name: {user?.name}</p>
            <p>Role: {user?.role}</p>
          </div>

          <div className="card">
            <h3>Courses</h3>
            <p>Browse available courses</p>
          </div>

          {user?.role === "admin" && (
            <div className="card">
              <h3>Admin Panel</h3>
              <p>Create and manage courses</p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Dashboard;