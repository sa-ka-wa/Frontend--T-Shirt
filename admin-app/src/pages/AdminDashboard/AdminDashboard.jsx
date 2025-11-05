import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AuthContext from "@t-shirt/shared/context/AuthContext.jsx";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/src/assets/images/admin-logo.svg" alt="Admin Logo" />
          <h2>Admin Panel</h2>
        </div>
        <nav className="sidebar-nav">
          <Link
            to="/dashboard"
            className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
          >
            📊 Dashboard
          </Link>
          <Link
            to="/brands"
            className={`nav-link ${isActive("/brands") ? "active" : ""}`}
          >
            🎨 Brand Management
          </Link>
          <Link
            to="/products"
            className={`nav-link ${isActive("/products") ? "active" : ""}`}
          >
            👕 Product Management
          </Link>
          <Link
            to="/users"
            className={`nav-link ${isActive("/users") ? "active" : ""}`}
          >
            👥 User Management
          </Link>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">{user.name.charAt(0)}</div>
            <div className="user-details">
              <span className="user-name">{user?.name || "Admin User"}</span>
              <span className="user-role">{user?.role || "Administrator"}</span>
            </div>
            <button onClick={logout}>Logout</button>
          </div>
        </div>
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
