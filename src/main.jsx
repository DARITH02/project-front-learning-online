import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import { ModalProvider } from "@/components/context/ModalContext";
import { AuthProvider } from "@/components/context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<ToastContainer />;

const clientId =
  "125020314907-34dsoh0ta5ekmaevlcshes478pa1uu0s.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        <ModalProvider>
          <App />
          <ToastContainer position="top-right" autoClose={3000} />
        </ModalProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
