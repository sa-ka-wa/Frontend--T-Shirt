import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/globals.css";
import "./styles/theme.css";
import "./styles/components.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* You can later add routes like /shop, /about, /artist, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
