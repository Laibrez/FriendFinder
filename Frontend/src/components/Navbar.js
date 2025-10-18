import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">👋</span>
            <span className="text-xl font-bold text-gray-800">FriendFinder</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary">About</Link>
            <Link to="/go-pro" className="text-gray-600 hover:text-primary">Go Pro</Link>
          </div>

          <div className="flex space-x-4">
            <Link to="/login">
              <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-blue-50">
                Log In
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;