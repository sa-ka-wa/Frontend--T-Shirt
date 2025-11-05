import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login, Register, Profile } from "@t-shirt/shared/pages"; // ✅ import Login page
import { BrandProvider } from "./context/BrandContext";

import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/components.css";

function App() {
  return (
    <BrandProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* You can later add routes like /shop, /about, /artist, etc. */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </BrandProvider>
  );
}

export default App;
