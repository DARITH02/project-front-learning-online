import axios from "axios";

const api = axios.create({
  // baseURL: "https://8ec6e2ee8429.ngrok-free.app/api/", // your Laravel API endpoint
  baseURL: "http://127.0.0.1:8000/api/", // your Laravel API endpoint
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
