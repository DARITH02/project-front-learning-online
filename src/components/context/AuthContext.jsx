// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";


// 1. Create context
const AuthContext = createContext();

// 2. Create provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // `null` means not logged in

  const [isRegistered, setIsRegistered] = useState(false); // Add this

  // Load user from localStorage on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setIsRegistered(true);
      
    }
  }, []);

  // 3. Login method
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"))?.access_token;

      if (!token) {
        setUser(null);
        setIsRegistered(false);
        localStorage.removeItem("user");
        return;
      }

      // Send logout request to Laravel API
      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      // Clear frontend auth state
      setUser(null);
      setIsRegistered(false);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, login, logout, isRegistered, setIsRegistered }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 5. useAuth hook
export const useAuth = () => useContext(AuthContext);
