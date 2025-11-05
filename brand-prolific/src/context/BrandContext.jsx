// src/context/BrandContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState(null); // null until detected
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const detectBrand = async () => {
      try {
        // 1️⃣ Detect subdomain
        const host = window.location.hostname; // e.g., prolific.localhost or prolific.example.com
        const subdomain = host.split(".")[0];

        // 2️⃣ Skip detection if it's main domain (e.g., localhost)
        if (!subdomain || subdomain === "localhost") {
          console.log("🌐 Default brand: main site (no subdomain)");
          setBrand({ id: 1, name: "Main", subdomain: "main" }); // fallback
          setLoading(false);
          return;
        }

        // 3️⃣ Fetch brand info from backend
        const res = await axios.get(
          "http://localhost:5000/api/brands/by-subdomain",
          {
            params: { subdomain },
          }
        );

        const detectedBrand = res.data;
        setBrand(detectedBrand);
        localStorage.setItem("brand_id", detectedBrand.id);
        localStorage.setItem("brand_name", detectedBrand.name);
        localStorage.setItem("brand_subdomain", detectedBrand.subdomain);

        console.log("✅ Brand detected:", detectedBrand);
      } catch (err) {
        console.error("⚠️ Brand detection failed:", err);
        setBrand(null);
      } finally {
        setLoading(false);
      }
    };

    detectBrand();
  }, []);

  return (
    <BrandContext.Provider value={{ brand, setBrand, loading }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (!context) {
    throw new Error("useBrand must be used within BrandProvider");
  }
  return context;
};
