import App from "@/App";
import { Route, Routes } from "react-router";
import UserRouter from "./user";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="user/*" element={<UserRouter />} />
    </Routes>
  );
}
