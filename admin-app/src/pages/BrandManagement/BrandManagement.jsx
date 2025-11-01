import React from "react";
import BrandManagementComponent from "../../components/admin/BrandManagement/BrandManagement";
import "./BrandManagement.css";

const BrandManagement = () => {
  return (
    <div className="brand-management-page">
      <div className="page-header">
        <h1>Brand Management</h1>
        <p>Manage all your T-shirt brands in one place</p>
      </div>
      <BrandManagementComponent />
    </div>
  );
};

export default BrandManagement;
