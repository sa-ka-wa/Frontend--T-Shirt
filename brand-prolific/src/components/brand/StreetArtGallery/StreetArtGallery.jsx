import React from "react";
import "./StreetArtGallery.css";

const StreetArtGallery = () => {
  const artworks = [
    {
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=500&fit=crop",
      title: "Urban Canvas",
      artist: "Street Collective",
    },
    {
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=500&fit=crop",
      title: "Concrete Dreams",
      artist: "City Artists",
    },
    {
      image:
        "https://images.unsplash.com/photo-1464822759844-d62ed505c1f9?w=400&h=500&fit=crop",
      title: "Metropolitan Flow",
      artist: "Urban Vision",
    },
  ];

  return (
    <div className="street-art-gallery">
      <div className="gallery-grid">
        {artworks.map((art, index) => (
          <div key={index} className="gallery-item">
            <img src={art.image} alt={art.title} />
            <div className="gallery-overlay">
              <h4>{art.title}</h4>
              <p>{art.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ADD THIS LINE - Missing export
export default StreetArtGallery;
