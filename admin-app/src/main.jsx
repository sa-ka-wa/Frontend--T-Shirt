// main.jsx or index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@t-shirt/shared/context/AuthContext.jsx";
import { BrandProvider } from "@t-shirt/shared/context/BrandContext.jsx"; // Import BrandProvider
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BrandProvider>
          {" "}
          {/* Add BrandProvider here */}
          <App />
        </BrandProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
