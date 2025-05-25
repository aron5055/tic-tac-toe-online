import LoginForm from "@/features/auth/Login";
import RegisterForm from "@/features/auth/Register";
import { Route, Routes } from "react-router";

export default function UserRouter() {
  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="register" element={<RegisterForm />} />
    </Routes>
  );
}
