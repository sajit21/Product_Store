import React from "react";
// import Form from "./components/Form";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import { Routes,Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Signup from "./components/signup";

const App = () => {
  return (
    // <div className="flex flex-col md:flex-row w-full min-h-screen bg-blue-300 justify-between items-center px-8 py-8 gap-8">
    <div className="max-w-screen-2xl  bg-white w-full mx-auto sm:px-4 md:px-6 lg:px-8">
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />}></Route>
            {/* <Route path="/signup" element={<signup/>}></Route> */}

      <Route path="/product" element={<ProductPage />}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>

       
      </Routes>
      
      </div>
  );
};

export default App;
