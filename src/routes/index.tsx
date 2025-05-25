import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/features/auth/Login";
import RegisterForm from "@/features/auth/Register";
import RequireAuth from "@/features/auth/RequireAuth";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router";
import GameRouter from "./game";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Route>
      <Route
        path="/game/*"
        element={
          <RequireAuth>
            <GameRouter />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
