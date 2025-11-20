import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // Updated path
import { Login, Register, Profile } from "@t-shirt/shared/pages"; // ✅ import Login page
import AdminDashboard from "@admin/pages/AdminDashboard/AdminDashboard.jsx";
import Dashboard from "@admin/components/admin/Dashboard/Dashboard.jsx";
import BrandManagement from "@admin/components/admin/BrandManagement/BrandManagement.jsx";
import ProductManagement from "@admin/components/admin/ProductManagement/ProductManagement.jsx";
import UserManagement from "@admin/components/admin/UserManagement/UserManagement.jsx";

// import Shop from "./pages/Shop";
// import Artists from "./pages/Artists";
// import Collections from "./pages/Collections";
// import Gallery from "./pages/Gallery";
// import LimitedEditions from "./pages/LimitedEditions";
// import About from "./pages/About";
import { BrandProvider } from "@t-shirt/shared/context/BrandContext.jsx";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/layouts.css";
import "./styles/components.css";

function App() {
  return (
    <BrandProvider>
      <Router>
        <div className="prolific-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prolific-admin" element={<AdminDashboard />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="brands" element={<BrandManagement />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="users" element={<UserManagement />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />

            {/* <Route path="/shop" element={<Shop />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/limited" element={<LimitedEditions />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </Router>
    </BrandProvider>
  );
}

export default App;
