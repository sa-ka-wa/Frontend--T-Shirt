// shared/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import authService from "../services/api/authService.js";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    let mounted = true;

    if (token) {
      setLoading(true);
      authService
        .getProfile()
        .then((data) => {
          if (!mounted) return;
          setUser(data);
        })
        .catch((err) => {
          if (!mounted) return;
          console.error("Failed to fetch user profile:", err);
          setUser(null);
        })
        .finally(() => {
          if (!mounted) return;
          setLoading(false);
        });
    } else {
      setUser(null);
      setLoading(false);
    }

    return () => {
      mounted = false;
    };
  }, [token]);

  const login = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
