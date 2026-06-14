import React from "react";

function RoleProtectedRoute({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !allowedRoles.includes(user.role)) {
    return <h2>Access Denied</h2>;
  }

  return children;
}

export default RoleProtectedRoute;