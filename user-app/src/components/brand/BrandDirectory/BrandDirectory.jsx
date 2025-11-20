// user-app/src/components/brand/BrandDirectory/BrandDirectory.jsx
import React, { useState, useEffect } from "react";
import brandService from "../../services/brandService";
import "./BrandDirectory.css";

const BrandDirectory = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch all active brands
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        setLoading(true);
        const brandsData = await brandService.getAllBrands();
        // Filter only active brands for display
        const activeBrands = brandsData.filter((brand) => brand.is_active);
        setBrands(activeBrands);
      } catch (err) {
        console.error("❌ Error fetching brands:", err);
        setError(
          err.response?.data?.error || err.message || "Failed to fetch brands"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  // Handle brand click - navigate to brand's home page
  const handleBrandClick = (brand) => {
    if (brand.subdomain) {
      // Navigate to brand's subdomain
      window.location.href = `http://${brand.subdomain}.lvh.me:3004`;
    } else {
      // Fallback to main site or show message
      alert(`Brand "${brand.name}" doesn't have a dedicated site yet.`);
    }
  };

  // Filter brands based on category and search
  const filteredBrands = brands.filter((brand) => {
    const matchesCategory =
      selectedCategory === "all" || brand.category === selectedCategory;
    const matchesSearch =
      brand.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      brand.description?.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories for filter
  const categories = [
    "all",
    ...new Set(brands.map((brand) => brand.category).filter(Boolean)),
  ];

  if (loading) {
    return (
      <div className="brand-directory">
        <div className="loading-spinner">Discovering amazing brands...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="brand-directory">
        <div className="error-message">Error: {error}</div>
        <button
          onClick={() => window.location.reload()}
          className="btn btn-primary"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="brand-directory">
      <div className="directory-header">
        <h1>Brand Directory</h1>
        <p>Discover amazing T-shirt brands and visit their stores</p>
      </div>

      {/* Filters */}
      <div className="directory-filters">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search brands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="category-filter">
          <label>Filter by Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "all"
                  ? "All Categories"
                  : category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <span>
          Showing {filteredBrands.length} of {brands.length} brands
          {selectedCategory !== "all" && ` in ${selectedCategory}`}
          {searchTerm && ` matching "${searchTerm}"`}
        </span>
      </div>

      {/* Brands Grid */}
      <div className="brands-grid">
        {filteredBrands.map((brand) => (
          <div
            key={brand.id}
            className="brand-card clickable"
            onClick={() => handleBrandClick(brand)}
          >
            <div className="brand-header">
              <img
                src={brand.logo_url || "/default-logo.svg"}
                alt={brand.name}
                className="brand-logo"
                onError={(e) => {
                  e.target.src = "/default-logo.svg";
                }}
              />
              <div className="brand-info">
                <h3 className="brand-name">{brand.name}</h3>
                <span className={`brand-category ${brand.category}`}>
                  {brand.category}
                </span>
              </div>
            </div>

            <div className="brand-description">
              {brand.description || "No description provided"}
            </div>

            <div className="brand-stats">
              <div className="stat">
                <span className="stat-number">{brand.products_count}</span>
                <span className="stat-label">Products</span>
              </div>
              {brand.established_year && (
                <div className="stat">
                  <span className="stat-number">{brand.established_year}</span>
                  <span className="stat-label">Est.</span>
                </div>
              )}
            </div>

            <div className="brand-actions">
              <button className="btn btn-primary visit-btn">
                Visit Store ›
              </button>
            </div>

            {brand.website && (
              <div className="brand-website">
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="website-link"
                >
                  🌐 Official Website
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredBrands.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🏪</div>
          <h3>No brands found</h3>
          <p>
            {searchTerm || selectedCategory !== "all"
              ? "Try adjusting your search or filter criteria"
              : "No brands are currently available"}
          </p>
          {(searchTerm || selectedCategory !== "all") && (
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="btn btn-secondary"
            >
              Clear Filters
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default BrandDirectory;
