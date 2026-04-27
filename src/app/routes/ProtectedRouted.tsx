import React from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRoute({ darkMod, setDarkMod }) {
  // const token = localStorage.getItem("token")
  const token = true

  if (token) {
  return (
    <>
      
      <Outlet />
    </>
  );}
  return <Navigate to={"/login"} />;
}

export default ProtectedRoute;