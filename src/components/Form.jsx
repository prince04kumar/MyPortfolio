import React from "react";

const LoginForm = () => {
  return (
    <div className="rounded-lg h-full w-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-900 font-times">
      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-white text-3xl font-bold mb-2">Login</h1>
        <p className="text-gray-300 mb-6">Welcome onboard with us!</p>

        <form className="m-7">
          {/* Username Field */}
          <label className="block text-gray-300 text-sm mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Password Field */}
          <label className="block text-gray-300 text-sm mt-4 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-300 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Forgot Password */}
          <div className="flex justify-between items-center mt-2">
            <a href="#" className="text-sm text-gray-400 hover:text-teal-500">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            LOGIN
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            New to Logo?{" "}
            <a href="#" className="text-teal-500 font-bold hover:underline">
              Register Here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
