import React from "react";
import Navbar from "./assets/components/Navbar";
import HomePage from "./assets/pages/HomePage";
import ProductPage from "./assets/components/ProductPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div
      className="min-h-screen bg-base-200  transition-colors duration-300"
      
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
