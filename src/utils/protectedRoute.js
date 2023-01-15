import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.value);
  return user ? children : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
