import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import BrandManagement from "./pages/BrandManagement/BrandManagement";
import ProductManagement from "./pages/ProductManagement/ProductManagement";
import UserManagement from "./pages/UserManagement/UserManagement";
import "./styles/theme.css";
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <div className="admin-app">
        <Routes>
          {/* Use the AdminDashboard as layout for all routes */}
          <Route path="/" element={<AdminDashboard />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="brands" element={<BrandManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="users" element={<UserManagement />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </Router>
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
