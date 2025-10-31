import React from "react";
import "./Home.css";
import CreativeHero from "../../components/brand/CreativeHero/CreativeHero";
import ArtistShowcase from "../../components/brand/ArtistShowcase/ArtistShowcase";
import ProductDisplay from "../../components/brand/ProductDisplay/ProductDisplay";
import StreetArtGallery from "../../components/brand/StreetArtGallery/StreetArtGallery";
import ArtistInspiration from "../../components/brand/ArtistInspiration/ArtistInspiration";
import LimitedEditionBadge from "../../components/brand/LimitedEditionBadge/LimitedEditionBadge";

const Home = () => {
  return (
    <div className="prolific-home">
      {/* Main Hero Section */}
      <CreativeHero />

      {/* Limited Edition Badge */}
      <section className="limited-banner">
        <div className="container">
          <LimitedEditionBadge />
        </div>
      </section>

      {/* Featured Artists Showcase */}
      <section className="section section--dark">
        <div className="container">
          <h2 className="section-title">Inspired by Icons</h2>
          <p className="section-subtitle">
            Streetwear that carries the spirit of urban legends
          </p>
          <ArtistShowcase />
        </div>
      </section>

      {/* Featured Products */}
      <section className="section section--light">
        <div className="container">
          <h2 className="section-title">Street-Ready Collections</h2>
          <p className="section-subtitle">
            Premium tees built for the concrete jungle
          </p>
          <ProductDisplay />
        </div>
      </section>

      {/* Artist Inspiration */}
      <section className="section section--pattern">
        <div className="container">
          <h2 className="section-title">Creative DNA</h2>
          <ArtistInspiration />
        </div>
      </section>

      {/* Street Art Gallery */}
      <section className="section section--dark">
        <div className="container">
          <h2 className="section-title">Urban Canvas</h2>
          <p className="section-subtitle">Where street art meets streetwear</p>
          <StreetArtGallery />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join the Movement</h2>
            <p>
              Be the first to access limited drops and exclusive collections
            </p>
            <div className="cta-buttons">
              <button className="btn btn--primary">Shop Now</button>
              <button className="btn btn--outline">View Lookbook</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
