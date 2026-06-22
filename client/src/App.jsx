import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import MyCourses from "./pages/MyCourses";

import ProtectedRoute from "./Routes/ProtectedRoute";
import RoleProtectedRoute from "./Routes/RoleProtectedRoute";
import Register from "./pages/Register";
import EnrollCourse from "./pages/EnrollCourse";
// SAFE IMPORT (prevents blank page crash)
let AdminCreateCourse;
try {
  AdminCreateCourse = require("./pages/AdminCreateCourse").default;
} catch (e) {
  AdminCreateCourse = () => <h2>Admin Page Not Found</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* PUBLIC */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* PROTECTED */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <Courses />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-courses"
          element={
            <ProtectedRoute>
              <MyCourses />
            </ProtectedRoute>
          }
        />

        {/* ADMIN ONLY */}
        <Route
          path="/admin/create-course"
          element={
            <ProtectedRoute>
              <RoleProtectedRoute allowedRoles={["admin"]}>
                <AdminCreateCourse />
              </RoleProtectedRoute>
            </ProtectedRoute>
          }
        />
        <Route
  path="/enroll-course"
  element={
    <ProtectedRoute>
      <EnrollCourse />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;