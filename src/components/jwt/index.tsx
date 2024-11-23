import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if(token){
    return true;
  }

  return false;
}

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({children} : ProtectedRouteProps) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/"/>;
}

export default ProtectedRoute;