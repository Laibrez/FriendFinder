import React from "react";
import GoogleAuthButton from "../components/GoogleAuthButton";

function Login() {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">Welcome Back</h2>
        <p className="text-gray-600 mb-4">Log in to connect with new friends near you</p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700"
          >
            Log In
          </button>
        </form>

        <div className="my-6">
          <span className="text-gray-400">or</span>
        </div>

        <GoogleAuthButton />
      </div>
    </section>
  );
}

export default Login;
