import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
