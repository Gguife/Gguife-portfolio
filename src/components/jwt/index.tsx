import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
  exp: number;
}

const isAuthenticated = () => {
  const token = localStorage.getItem("token");

  if(!token) return false;

  try {
    const {exp} = jwtDecode<JwtPayload>(token);

    if(Date.now() >= exp * 1000){
      localStorage.removeItem("token");
      return false;
    }


    return true;
  } catch(err: any){
    console.error("Erro na autenticação: ", err);
  }
}

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({children} : ProtectedRouteProps) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/"/>;
}

export default ProtectedRoute;