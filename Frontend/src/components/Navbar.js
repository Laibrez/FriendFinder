import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav 
      className="bg-white shadow-sm sticky top-0 z-50"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded"
            aria-label="FriendFinder home"
          >
            <span className="text-2xl" aria-hidden="true">👋</span>
            <span className="text-xl font-bold text-gray-800">FriendFinder</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8" role="navigation" aria-label="Primary">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded px-2 py-1 transition-colors"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded px-2 py-1 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/go-pro" 
              className="text-gray-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded px-2 py-1 transition-colors"
            >
              Go Pro
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Link 
              to="/login"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all font-medium"
            >
              Log In
            </Link>
            <Link 
              to="/signup"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;