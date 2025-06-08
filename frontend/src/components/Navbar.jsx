import React, { useState } from "react";
import { Link } from "react-router-dom";
import Signup from "./signup";
import { FaUserPlus, FaUser, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [menuOption, setmenuOption] = useState(false);

  return (
    <>
      <nav className="bg-white text-black shadow">
        <div className="flex justify-between items-center">
          {/* responsive */}
          <div className="flex items-center justify-center">
            <img src="Logo.jpg" alt="logo" className="h-10 w-auto" />
          </div>

          <button
            className="sm:hidden text-2xl"
            onClick={() => setmenuOption(!menuOption)}
          >
            <FaBars />
          </button>

          {/* desktop show */}
              <div className="hidden sm:flex justify-center items-center flex-1 px-3 py-4 gap-8">
            <Link to="/" className="hover:text-green-300 font-medium transition">Home</Link>
            <Link to="/product" className="hover:text-green-300 font-medium transition">Products</Link>
            <Link to="/About" className="hover:text-green-300 font-medium transition">AboutUs</Link>
            <Link to="/Contact" className="hover:text-green-300 font-medium transition">ContactUs</Link>
          </div>

          <div className="hidden sm:flex justify-center items-center gap-4">
            <button
              className="bg-green-500 flex items-center px-3 py-2 gap-2 text-white hover:bg-green-700"
              onClick={() => setSignupOpen(true)}
            >
              <FaUserPlus />
              Signup
            </button>
            <button className="flex items-center gap-2 text-black hover:text-green-700 px-3 py-2">
              <FaUser />
            </button>
          </div>
        </div>

        {/* mobile device */}
        {menuOption && (
          <div className="sm:hidden flex flex-col items-center gap-4 pb-4">
            <Link to="/" className="hover:text-green-300 font-medium transition">Home</Link>
            <Link to="/product" className="hover:text-green-300 font-medium transition">Products</Link>
            <Link to="/About" className="hover:text-green-300 font-medium transition">AboutUs</Link>
            <Link to="/Contact" className="hover:text-green-300 font-medium transition">ContactUs</Link>
            <button
              className="bg-green-500 flex items-center px-3 py-2 gap-2 text-white hover:bg-green-700"
              onClick={() => setSignupOpen(true)}
            >
              <FaUserPlus />
              Signup
            </button>
            <button className="flex items-center gap-2 text-black hover:text-green-700 px-3 py-2">
              <FaUser />
            </button>
          </div>
        )}
      </nav>
      {signupOpen && <Signup onClose={() => setSignupOpen(false)} />}
    </>
  );
};

export default Navbar;