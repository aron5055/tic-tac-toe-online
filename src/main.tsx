import { ToastProvider } from "@radix-ui/react-toast";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Toaster } from "./components/ui/toaster";
import { AuthProvider } from "./contexts/AuthContext";
import "./index.css";
import AppRouter from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ToastProvider>
        <Toaster />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ToastProvider>
    </AuthProvider>
  </StrictMode>,
);
