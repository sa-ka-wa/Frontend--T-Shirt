import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ brand = "Prolific" }) => {
  // Conditional branding logic
  const isProlific = brand.toLowerCase() === "prolific";
  const isDoktari = brand.toLowerCase() === "doktari";

  return (
    <header
      className={`header ${isProlific ? "prolific-header" : ""} ${
        isDoktari ? "doktari-header" : ""
      }`}
    >
      <h1 className="logo">
        {brand}{" "}
        <span>{isProlific ? "Artwear" : isDoktari ? "T-Shirts" : ""}</span>
      </h1>

      <nav className="nav-links">
        {isProlific ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/about">About</Link>
            <Link to="/login" className="action-btn">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/artists">Artists</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login" className="action-btn">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
