import axios from "axios";

const api = axios.create({
  baseURL: "https://8ec6e2ee8429.ngrok-free.app/api/", // your Laravel API endpoint
  headers: {
    "Content-Type": "application/json",
    // Add token here if using auth
    // Authorization: `Bearer ${token}`
  },
});

export default api;
