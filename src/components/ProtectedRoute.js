import React from "react";
import { Navigate } from "react-router";

export default function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  console.log(isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
}
