import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedLogin = ({ children }) => {
  const { isLogedIn } = useAuth();

  if (isLogedIn) {
    return <Navigate to={`/`} />
  }

  return children;
};
