import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import BrandManagementComponent from "../../components/admin/BrandManagement/BrandManagement";
import AuthContext from "@t-shirt/shared/context/AuthContext.jsx";
import "./BrandManagement.css";

const BrandManagement = () => {
  const { token } = useContext(AuthContext);
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!token) return; // don't fetch if token is missing

    const fetchBrands = async () => {
      try {
        const response = await axios.get("/api/brands", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBrands(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch brands");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, [token]);

  if (loading) return <p>Loading brands...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="brand-management-page">
      <div className="page-header">
        <h1>Brand Management</h1>
        <p>Manage all your T-shirt brands in one place</p>
      </div>
      <BrandManagementComponent brands={brands} />
    </div>
  );
};

export default BrandManagement;
