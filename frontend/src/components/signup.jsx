import React, { useState } from "react";
import { createPortal } from "react-dom";

const Signup = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);

  return createPortal(
    <div className="fixed inset-0 z-50  flex items-center justify-center">
      {/* Light, blurred overlay */}
      <div className="absolute inset-0 bg-gray-200/10 backdrop-blur-md"></div>
      {/* Modal */}
      <div className="relative bg-white p-8 rounded shadow-lg min-w-[400px] z-10">
        <button
          className="text-black absolute top-2 right-4 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        {!showLogin ? (
          <>
            <h1 className="text-2xl text-black mb-3 text-center">Signup</h1>
            <form className="space-y-4 text-black">
              <div>
                <label htmlFor="fullname" className="font-medium p-2">
                  Fullname
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Fullname"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="username" className="font-medium p-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-medium p-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-medium p-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="cpassword" className="font-medium p-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="cpassword"
                  placeholder="Confirm Password"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <select
                  className="border border-black rounded"
                  name="gender"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <button
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                type="submit"
              >
                Signup
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-black">
              Already have an account?{" "}
              <button
                className="text-green-700 underline"
                onClick={() => setShowLogin(true)}
              >
                Login
              </button>
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl text-black mb-3 text-center">Login</h1>
            <form className="space-y-4 text-black">
              <div>
                <label htmlFor="login-email" className="font-medium p-2">
                  Email
                </label>
                <input
                  type="email"
                  id="login-email"
                  placeholder="Email"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="font-medium p-2">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  placeholder="Password"
                  className="block w-full p-2 border rounded"
                />
              </div>
              <button
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                type="submit"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-center text-sm text-black">
              Don't have an account?{" "}
              <button
                className="text-green-700 underline"
                onClick={() => setShowLogin(false)}
              >
                Signup
              </button>
            </p>
          </>
        )}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Signup;
