import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { isLogedIn } = useAuth();

  if (!isLogedIn) {
    return <Navigate to={`/login`} />;
  }

  return children;
};

export default ProtectedRoute;
