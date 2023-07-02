import { Navigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

export default function PublicRoute({ component: Component, redirectTo = '/contacts' }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}