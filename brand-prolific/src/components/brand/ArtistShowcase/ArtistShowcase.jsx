import React from "react";
import "./ArtistShowcase.css";

const artists = [
  {
    name: "Banksy",
    image: "/src/assets/images/artists/banksy.jpg",
    style: "Street Art",
    description:
      "Anonymous England-based street artist known for subversive satirical street art",
  },
  {
    name: "Basquiat",
    image: "/src/assets/images/artists/basquiat.jpg",
    style: "Neo-Expressionism",
    description:
      "American artist who rose to success during the 1980s as part of the Neo-expressionism movement",
  },
  {
    name: "MF DOOM",
    image: "/src/assets/images/artists/mfdoom.jpg",
    style: "Hip-Hop",
    description:
      "British-American rapper and record producer known for his intricate wordplay and signature mask",
  },
];

export default function ArtistShowcase() {
  return (
    <div className="artist-showcase">
      <div className="artist-grid">
        {artists.map((artist, index) => (
          <div key={index} className="artist-card">
            <div className="artist-image">
              <img src={artist.image} alt={artist.name} />
              <div className="artist-overlay">
                <span className="artist-style">{artist.style}</span>
              </div>
            </div>
            <div className="artist-info">
              <h3>{artist.name}</h3>
              <p>{artist.description}</p>
              <button className="view-works-btn">View Inspired Works</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
