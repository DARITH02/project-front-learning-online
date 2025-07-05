import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // your Laravel API endpoint
  headers: {
    "Content-Type": "application/json",
    // Add token here if using auth
    // Authorization: `Bearer ${token}`
  },
});

export default api;
