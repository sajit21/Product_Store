import React from "react";

const Signup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    {/* Light, blurred overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur-md"></div>
    {/* Modal */}
    <div className="relative bg-white p-8 rounded shadow-lg min-w-[300px] z-10">
      <button
        className="text-black absolute top-2 right-4 text-xl font-bold"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <h1 className="text-2xl text-black mb-3 text-center">Signup</h1>
      <form className="space-y-4 text-black">
        <div>
          <label htmlFor="fullname" className="font-medium p-2">Fullname</label>
          <input type="text" id="fullname" placeholder="Username" className="block w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="email" className="font-medium p-2">Email</label>
          <input type="email" id="email" placeholder="Email" className="block w-full p-2 border rounded" />
        </div>
        <div>
          <label htmlFor="password" className="font-medium p-2">Password</label>
          <input type="password" id="password" placeholder="Password" className="block w-full p-2 border rounded" />
        </div>
        <button
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  </div>
);

export default Signup;