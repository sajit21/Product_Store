import React from "react";
import Navbar from "./assets/components/Navbar";
import HomePage from "./assets/pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductCard from "./assets/components/ProductCard";
import Toaster from "react-hot-toast";
function App() {
  return (
    <div
      className="min-h-screen bg-base-200  transition-colors duration-300"
      
    >
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductCard />} />
      </Routes>

      <Toaster/>
    </div>
  );
}

export default App;
