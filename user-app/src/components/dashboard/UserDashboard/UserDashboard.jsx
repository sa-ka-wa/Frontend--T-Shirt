// user-app/src/components/dashboard/UserDashboard/UserDashboard.jsx
import React, { useContext } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { useBrand } from "../../context/BrandContext";
import "./UserDashboard.css";

const UserDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const { brand, loading } = useBrand();
  const location = useLocation();

  if (loading) return <p>Loading...</p>;

  const isActive = (path) =>
    location.pathname === `/dashboard${path}` ||
    location.pathname.startsWith(`/dashboard${path}`);

  return (
    <div className="user-dashboard">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src={brand?.logo_url || "/default-logo.svg"}
            alt={brand?.name || "Store Logo"}
          />
          <h2>{brand?.name || "My Store"} Dashboard</h2>
        </div>

        <nav className="sidebar-nav">
          {/* Store Management */}
          <div className="nav-section">
            <span className="section-label">Store Management</span>
            <Link
              to="/dashboard/overview"
              className={`nav-link ${isActive("/overview") ? "active" : ""}`}
            >
              📊 Store Overview
            </Link>
            <Link
              to="/dashboard/products"
              className={`nav-link ${isActive("/products") ? "active" : ""}`}
            >
              👕 Product Management
            </Link>
            <Link
              to="/dashboard/designs"
              className={`nav-link ${isActive("/designs") ? "active" : ""}`}
            >
              🎨 Design Studio
            </Link>
            <Link
              to="/dashboard/inventory"
              className={`nav-link ${isActive("/inventory") ? "active" : ""}`}
            >
              📦 Inventory
            </Link>
          </div>

          {/* Sales & Orders */}
          <div className="nav-section">
            <span className="section-label">Sales & Orders</span>
            <Link
              to="/dashboard/orders"
              className={`nav-link ${isActive("/orders") ? "active" : ""}`}
            >
              📦 Orders ({/* Add order count here */})
            </Link>
            <Link
              to="/dashboard/sales"
              className={`nav-link ${isActive("/sales") ? "active" : ""}`}
            >
              💰 Sales Analytics
            </Link>
            <Link
              to="/dashboard/cashouts"
              className={`nav-link ${isActive("/cashouts") ? "active" : ""}`}
            >
              💳 Cashouts
            </Link>
            <Link
              to="/dashboard/returns"
              className={`nav-link ${isActive("/returns") ? "active" : ""}`}
            >
              🔄 Returns & Refunds
            </Link>
          </div>

          {/* Customer Management */}
          <div className="nav-section">
            <span className="section-label">Customers</span>
            <Link
              to="/dashboard/customers"
              className={`nav-link ${isActive("/customers") ? "active" : ""}`}
            >
              👥 Customers
            </Link>
            <Link
              to="/dashboard/reviews"
              className={`nav-link ${isActive("/reviews") ? "active" : ""}`}
            >
              ⭐ Reviews & Ratings
            </Link>
          </div>

          {/* Store Settings */}
          <div className="nav-section">
            <span className="section-label">Settings</span>
            <Link
              to="/dashboard/store-settings"
              className={`nav-link ${
                isActive("/store-settings") ? "active" : ""
              }`}
            >
              ⚙️ Store Settings
            </Link>
            <Link
              to="/dashboard/shipping"
              className={`nav-link ${isActive("/shipping") ? "active" : ""}`}
            >
              🚚 Shipping & Delivery
            </Link>
            <Link
              to="/dashboard/payment"
              className={`nav-link ${isActive("/payment") ? "active" : ""}`}
            >
              💳 Payment Methods
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="nav-section">
            <span className="section-label">Quick Actions</span>
            <Link
              to="/dashboard/quick-add"
              className={`nav-link ${isActive("/quick-add") ? "active" : ""}`}
            >
              ➕ Add New Product
            </Link>
            <Link
              to="/dashboard/promotions"
              className={`nav-link ${isActive("/promotions") ? "active" : ""}`}
            >
              🎯 Create Promotion
            </Link>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">
              {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="user-details">
              <span className="user-name">{user?.name || "User"}</span>
              <span className="user-role">
                {user?.role === "admin" ? "Store Admin" : "Store Manager"}
              </span>
              <span className="store-name">{brand?.name || "My Store"}</span>
            </div>
            <div className="user-actions">
              <Link to="/dashboard/profile" className="profile-link">
                👤 Profile
              </Link>
              <button onClick={logout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default UserDashboard;
