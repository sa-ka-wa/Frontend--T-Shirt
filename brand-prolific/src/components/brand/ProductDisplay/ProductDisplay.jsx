import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = () => {
  const products = [
    {
      id: 1,
      name: "Graffiti King Tee",
      price: "$64.99",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      description: "Bold street art inspired design",
      limited: true,
    },
    {
      id: 2,
      name: "Urban Warrior Hoodie",
      price: "$89.99",
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      description: "Premium comfort for the streets",
      limited: false,
    },
    {
      id: 3,
      name: "Concrete Dreams Jacket",
      price: "$129.99",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
      description: "Street-ready outerwear",
      limited: true,
    },
    {
      id: 4,
      name: "Night Rider Beanie",
      price: "$34.99",
      image:
        "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=500&fit=crop",
      description: "Urban headwear essentials",
      limited: false,
    },
  ];

  return (
    <div className="product-display">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              {product.limited && <div className="limited-badge">Limited</div>}
              <div className="product-overlay">
                <button className="quick-view-btn">Quick View</button>
              </div>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-price">{product.price}</div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ADD THIS LINE - CRITICAL!
export default ProductDisplay;
