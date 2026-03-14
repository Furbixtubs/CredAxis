import { Navigate, useLocation } from "react-router";
import { useAuth } from "./authContext";

export default function ProtectedRoute({ children }) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  // Still resolving session – render nothing to avoid a flash
  if (isLoading) return null;

  // Not logged in – redirect to login, remember where they were going
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
