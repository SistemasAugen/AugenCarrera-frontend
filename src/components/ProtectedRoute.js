import { Navigate } from "react-router-dom";
import { AuthService } from "../services/auth-service";

export const ProtectedRoute = ({ children }) => {
  if (!AuthService.isAuthenticated()) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};