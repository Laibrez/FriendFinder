import React from "react";

export default function Footer() {
  return (
    <footer 
      className="bg-gray-100 py-6 text-center text-gray-600 mt-20"
      role="contentinfo"
    >
      <p>© {new Date().getFullYear()} FriendFinder. All rights reserved.</p>
      <nav 
        aria-label="Footer navigation"
        className="flex justify-center space-x-4 mt-2"
      >
        <a 
          href="/privacy" 
          className="hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded transition-colors"
        >
          Privacy Policy
        </a>
        <a 
          href="/terms" 
          className="hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded transition-colors"
        >
          Terms of Service
        </a>
      </nav>
    </footer>
  );
}
