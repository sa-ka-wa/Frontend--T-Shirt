import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"; // Updated path
// import Shop from "./pages/Shop";
// import Artists from "./pages/Artists";
// import Collections from "./pages/Collections";
// import Gallery from "./pages/Gallery";
// import LimitedEditions from "./pages/LimitedEditions";
// import About from "./pages/About";
import { BrandProvider } from "./context/BrandContext";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/layouts.css";
import "./styles/components.css";

function App() {
  return (
    <BrandProvider>
      <Router>
        <div className="prolific-app">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/shop" element={<Shop />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/limited" element={<LimitedEditions />} />
            <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </Router>
    </BrandProvider>
  );
}

export default App;
