// shared/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Create the context
const AuthContext = createContext();

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  // Optional: load user info from token (if needed)
  useEffect(() => {
    if (token) {
      // e.g., fetch user data from backend using token
      // axios.get("/api/me", { headers: { Authorization: `Bearer ${token}` } })
      //   .then(res => setUser(res.data))
      //   .catch(err => console.error(err));
    } else {
      setUser(null);
    }
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
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
