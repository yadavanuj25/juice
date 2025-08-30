import React from "react";
import { Navigate } from "react-router-dom";

const AdminPublicRoute = ({ children }) => {
  const adminToken = localStorage.getItem("adminToken");
  return adminToken ? <Navigate to="/admin" replace /> : children;
};

export default AdminPublicRoute;
