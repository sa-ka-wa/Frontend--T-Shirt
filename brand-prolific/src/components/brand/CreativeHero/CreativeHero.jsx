import React from "react";
import "./CreativeHero.css";

export default function CreativeHero() {
  return (
    <section className="creative-hero">
      <div className="hero-video">
        <img
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop"
          alt="Urban Street Style"
        />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">PROLIFIC</span>
          <span className="title-line">STREETWEAR</span>
        </h1>
        <p className="hero-subtitle">
          Where urban art meets everyday wear. Limited editions from the
          streets.
        </p>
        <div className="hero-scroll">
          <span>Scroll to Explore</span>
          <div className="scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
}
