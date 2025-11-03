import React from "react";
import "./Home.css";
import { Header } from "@t-shirt/shared/components"; // shared import
// Correct import paths - adjust based on your actual folder structure
import MusicHero from "../components/brand/MusicHero/MusicHero";
import ArtistSpotlight from "../components/brand/ArtistSpotlight/ArtistSpotlight";
import AlbumCollection from "../components/brand/AlbumCollection/AlbumCollection";
import CulturalStory from "../components/brand/CulturalStory/CulturalStory";

const Home = () => {
  return (
    <div className="home">
      {/* Shared Header */}
      <Header brand="Doktari" />

      {/* Hero Section */}
      <MusicHero />

      {/* Artist Spotlight */}
      <section className="section">
        <h2 className="section-title">Artist Spotlight</h2>
        <ArtistSpotlight />
      </section>

      {/* Album Collection */}
      <section className="section">
        <h2 className="section-title">Limited Edition Collections</h2>
        <AlbumCollection />
      </section>

      {/* Cultural Story */}
      <section className="section">
        <h2 className="section-title">The DOKTARI Story</h2>
        <CulturalStory />
      </section>
    </div>
  );
};

export default Home;
