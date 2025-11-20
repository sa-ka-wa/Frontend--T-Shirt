import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login, Register, Profile } from "@t-shirt/shared/pages"; // ✅ import Login page
import { BrandProvider } from "@t-shirt/shared/context/BrandContext.jsx";
import AdminDashboard from "@admin/pages/AdminDashboard/AdminDashboard.jsx";
import Dashboard from "@admin/components/admin/Dashboard/Dashboard.jsx";
import BrandManagement from "@admin/components/admin/BrandManagement/BrandManagement.jsx";
import ProductManagement from "@admin/components/admin/ProductManagement/ProductManagement.jsx";
import UserManagement from "@admin/components/admin/UserManagement/UserManagement.jsx";

import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/components.css";

function App() {
  return (
    <BrandProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doktari-admin" element={<AdminDashboard />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="brands" element={<BrandManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="users" element={<UserManagement />} />
        </Route>
        {/* You can later add routes like /shop, /about, /artist, etc. */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrandProvider>
  );
}

export default App;
