import { useAuth } from "@/contexts/AuthContext";
import LoadingPage from "@/pages/LoadingPage";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

export default function RequireAuth({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LoadingPage />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
