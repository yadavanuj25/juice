import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isUserLoggedIn = !!localStorage.getItem("token");

  if (!isUserLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
