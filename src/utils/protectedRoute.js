import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element: Component }) => {
  const user = useSelector((state) => state.auth.value);
  console.log("user", user);
  return (
    <Route
      render={(props) => {
        if (user) {
          return <Component {...props} />;
        } else {
          return <Navigate to="/" />;
        }
      }}
    />
  );
};

export default ProtectedRoute;
