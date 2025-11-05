import React, { useEffect, useState } from "react";
import axios from "axios";
import "./BrandManagement.css";

const BrandManagement = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingBrand, setEditingBrand] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    status: "Active",
    category: "",
    description: "",
    established_year: "",
    logo_url: "",
  });

  const API_URL = "http://localhost:5000/api/brands";

  // Fetch brands from backend
  const fetchBrands = async () => {
    try {
      const res = await axios.get(API_URL);
      setBrands(res.data);
    } catch (err) {
      console.error("Error fetching brands:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // Open form for new brand
  const handleNewBrand = () => {
    setFormData({
      name: "",
      status: "Active",
      category: "",
      description: "",
      established_year: "",
      logo_url: "",
    });
    setEditingBrand(null);
    setShowForm(true);
  };

  // Open form for editing brand
  const handleEditBrand = (brand) => {
    setFormData({
      name: brand.name || "",
      status: brand.status || "Active",
      category: brand.category || "",
      description: brand.description || "",
      established_year: brand.established_year || "",
      logo_url: brand.logo_url || "",
    });
    setEditingBrand(brand);
    setShowForm(true);
  };

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form (create or update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingBrand) {
        await axios.put(`${API_URL}/${editingBrand.id}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      setShowForm(false);
      fetchBrands();
    } catch (err) {
      console.error("Error saving brand:", err);
      alert("Failed to save brand. Check console for details.");
    }
  };

  // Delete brand
  const handleDelete = async (brandId) => {
    if (!window.confirm("Are you sure you want to delete this brand?")) return;
    try {
      await axios.delete(`${API_URL}/${brandId}`);
      fetchBrands();
    } catch (err) {
      console.error("Error deleting brand:", err);
      alert("Failed to delete brand.");
    }
  };

  if (loading) return <div>Loading brands...</div>;

  return (
    <div className="brand-management">
      <div className="section-header">
        <h2>All Brands</h2>
        <button className="btn btn-primary" onClick={handleNewBrand}>
          Add New Brand
        </button>
      </div>

      <div className="brands-table">
        <table>
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand) => (
              <tr key={brand.id}>
                <td>{brand.name || "Unnamed"}</td>
                <td>
                  <span
                    className={`status ${
                      brand.status ? brand.status.toLowerCase() : "unknown"
                    }`}
                  >
                    {brand.status || "Unknown"}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleEditBrand(brand)}>Edit</button>
                  <button onClick={() => handleDelete(brand.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal / Form */}
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editingBrand ? "Edit Brand" : "New Brand"}</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Status:
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </label>
              <label>
                Category:
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </label>
              <label>
                Description:
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </label>
              <label>
                Established Year:
                <input
                  type="number"
                  name="established_year"
                  value={formData.established_year}
                  onChange={handleChange}
                />
              </label>
              <label>
                Logo URL:
                <input
                  name="logo_url"
                  value={formData.logo_url}
                  onChange={handleChange}
                />
              </label>
              <div className="modal-actions">
                <button type="submit" className="btn btn-primary">
                  {editingBrand ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandManagement;
