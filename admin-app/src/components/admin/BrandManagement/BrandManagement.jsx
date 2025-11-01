import React, { useState } from "react";
import "./BrandManagement.css";

const BrandManagement = () => {
  const [brands] = useState([
    {
      id: 1,
      name: "Prolific Streetwear",
      status: "Active",
      products: 45,
      revenue: "$12,450",
    },
    {
      id: 2,
      name: "Doktari Medical",
      status: "Active",
      products: 32,
      revenue: "$8,720",
    },
    {
      id: 3,
      name: "Urban Culture",
      status: "Inactive",
      products: 18,
      revenue: "$3,210",
    },
  ]);

  return (
    <div className="brand-management">
      <div className="section-header">
        <h2>All Brands</h2>
        <button className="btn btn-primary">Add New Brand</button>
      </div>

      <div className="brands-table">
        <table>
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Status</th>
              <th>Products</th>
              <th>Revenue</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id}>
                <td>{brand.name}</td>
                <td>
                  <span className={`status ${brand.status.toLowerCase()}`}>
                    {brand.status}
                  </span>
                </td>
                <td>{brand.products}</td>
                <td>{brand.revenue}</td>
                <td>
                  <button className="btn btn-sm">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandManagement;
