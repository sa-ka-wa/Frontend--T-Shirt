import React from "react";
import "./ArtistInspiration.css";

const ArtistInspiration = () => {
  const inspirations = [
    {
      title: "Graffiti Culture",
      description: "Raw urban expression translated to wearable art",
      icon: "🎨",
      image:
        "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=300&fit=crop",
    },
    {
      title: "Hip-Hop Legacy",
      description: "From boom bap to modern flows in every stitch",
      icon: "🎵",
      image:
        "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
    },
    {
      title: "Street Fashion",
      description: "Born from the sidewalks, made for the streets",
      icon: "👕",
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="artist-inspiration">
      <div className="inspiration-grid">
        {inspirations.map((item, index) => (
          <div key={index} className="inspiration-card">
            <div className="inspiration-image">
              <img src={item.image} alt={item.title} />
              <div className="inspiration-icon">{item.icon}</div>
            </div>
            <div className="inspiration-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// MAKE SURE THIS LINE EXISTS
export default ArtistInspiration;
