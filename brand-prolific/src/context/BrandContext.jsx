import React, { createContext, useContext, useState } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState("prolific");

  return (
    <BrandContext.Provider value={{ brand, setBrand }}>
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
