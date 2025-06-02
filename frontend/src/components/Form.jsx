import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[4rem] mx-4rem'>
    <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md text-blue-900">
    <h2 className="text-2xl font-bold mb-6 text-center">Signup Form</h2>
    <form className="space-y-4">
      <div>
        <label htmlFor="username" className='block mb-1'>Username:</label>
        <input
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          type="text"
          id="username"
          placeholder="Enter username"
        />
      </div>

      <div>
        <label htmlFor="password" className="block mb-1">Password:</label>
        <input
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1">Email:</label>
        <input
          className="w-full border-2 border-gray-300 p-2 rounded-md"
          type="email"
          id="email"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="gender" className="block mb-1">Gender:</label>
        <select
          id="gender"
          name="gender"
          className="w-full border-2 border-gray-300 p-2 rounded-md"
        >
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-md transition duration-200"
      >
        Signup
      </button>
    </form>
  </div>

  <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md text-blue-900">
  <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
  <form className="space-y-4">
    <div>
      <label htmlFor="username" className="block mb-1">Username:</label>
      <input
        className="w-full border border-gray-300 p-2 rounded-md"
        type="text"
        id="username"
        placeholder="Enter your username"
      />
    </div>

    <div>
      <label htmlFor="password" className="block mb-1">Password:</label>
      <input
        className="w-full border border-gray-300 p-2 rounded-md"
        type="password"
        id="password"
        placeholder="Enter your password"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-200"
    >
      Login
    </button>
  </form>
</div>

  </div>)
}

export default Form