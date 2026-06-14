import React from "react";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <h2>Please Login First</h2>;
  }

  return children;
}

export default ProtectedRoute;