// user-app/src/pages/Home/Home.jsx
import React, { useEffect, useState } from "react";
import "./Home.css";
import { Header } from "@t-shirt/shared/components";

const Home = () => {
  const [brand, setBrand] = useState("Doktari");

  useEffect(() => {
    // Subdomain detection logic
    const hostname = window.location.hostname;
    const subdomain = hostname.split(".")[0];

    console.log("Detected subdomain:", subdomain);

    if (subdomain && subdomain !== "www" && subdomain !== "localhost") {
      fetch("http://localhost:5000/api/brands/update-subdomain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subdomain }),
      })
        .then((res) => res.json())
        .then((data) => console.log("Subdomain saved:", data))
        .catch((err) => console.error("Error saving subdomain:", err));
    }
  }, []);

  return (
    <div className="home">
      <Header brand={brand} />

      <div className="home-content">
        <h1>Welcome to {brand}</h1>
        <p>Your music merchandise destination</p>

        {/* Add your components later */}
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>MusicHero Component - Add later</p>
          <p>ArtistSpotlight Component - Add later</p>
          <p>AlbumCollection Component - Add later</p>
          <p>CulturalStory Component - Add later</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
