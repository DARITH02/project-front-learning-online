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
  "998065850866-jod29kupnb15sedr2q7elvkfdeos1vi7.apps.googleusercontent.com";

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
