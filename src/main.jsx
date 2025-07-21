import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
import { ModalProvider } from "@/components/context/ModalContext";
import { AuthProvider } from "@/components/context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </AuthProvider>
  </React.StrictMode>
);
