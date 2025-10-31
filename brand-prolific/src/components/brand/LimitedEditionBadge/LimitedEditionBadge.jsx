import React from "react";
import "./LimitedEditionBadge.css";

const LimitedEditionBadge = () => {
  return (
    <div className="limited-edition-badge">
      <div className="badge-content">
        <span className="badge-text">LIMITED EDITION DROP</span>
        <span className="badge-date">DEC 24 • 6PM EST</span>
        <button className="badge-button">GET EARLY ACCESS</button>
      </div>
    </div>
  );
};

// MAKE SURE THIS IS DEFAULT EXPORT
export default LimitedEditionBadge;
