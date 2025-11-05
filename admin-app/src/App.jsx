// App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import BrandManagement from "./pages/BrandManagement/BrandManagement";
import ProductManagement from "./pages/ProductManagement/ProductManagement";
import UserManagement from "./pages/UserManagement/UserManagement";
import ProtectedRoute from "@t-shirt/shared/router/ProtectedRoute.jsx";
import { Login, Register, Profile } from "@t-shirt/shared/pages";
import "./styles/theme.css";
import "./styles/globals.css";

function App() {
  return (
    <div className="admin-app">
      <Routes>
        {/* Public route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />

        {/* Protected admin routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="brands" element={<BrandManagement />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="users" element={<UserManagement />} />
        </Route>

        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

// Dashboard page wrapper
function DashboardPage() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome to your admin dashboard</p>
      </div>
      <Dashboard />
    </div>
  );
}

export default App;
