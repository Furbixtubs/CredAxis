import { Navigate } from "react-router";
import { useAuth } from "./authContext";

export default function PublicRoute({ children }) {
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  // already logged in: redirect to dashboard
  if (user) return <Navigate to="/dashboard" replace />;

  return children;
}
